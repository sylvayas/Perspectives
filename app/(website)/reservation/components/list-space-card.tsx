"use client";

import TitleSection from "@/components/title-section";
import React, { useState, useEffect, useCallback } from "react";
import { ArrowUpRight, Calendar as CalendarIcon, Users, Bed, Loader2, Mail, Phone, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { usePay } from "@/hooks/usePay";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

import dayjs from "dayjs";

interface CalendarProps {
  id?: string;
  mode?: "multiple";
  selected: Date[];
  onSelect: (dates: Date[] | undefined) => void;
  showOutsideDays?: boolean;
  fromDate?: Date;
  className?: string;
}

interface IFormInput {
  name: string;
  email: string;
  phone: string;
}

interface RoomType {
  id: string;
  title: string;
  pricePerNight: number;
}

const roomTypes: RoomType[] = [
  { id: "single", title: "Chambre simple", pricePerNight: 10000 },
  { id: "double", title: "Chambre double", pricePerNight: 15000 },
  { id: "suite", title: "Suite", pricePerNight: 25000 },
];

export default function ListSpaceCard({
  hotel = { id: "unknown", name: "Unknown Hotel" },
}: {
  hotel?: { id: string; name: string };
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [guests, setGuests] = useState<number>(1);
  const [roomType, setRoomType] = useState<string>(roomTypes[0].id);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [data, setData] = useState<IFormInput | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apartmentData, setApartmentData] = useState<{
    name: string;
    image: string;
    description: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    mode: "onChange",
  });

  const formData = watch();

  // Extract query parameters
  useEffect(() => {
    const apartment = searchParams.get("apartment");
    const image = searchParams.get("image");
    const description = searchParams.get("description");

    if (apartment && image && description) {
      setApartmentData({
        name: decodeURIComponent(apartment),
        image: decodeURIComponent(image),
        description: decodeURIComponent(description),
      });
    } else {
      setApartmentData(null);
    }
  }, [searchParams]);

  const calculateAmount = useCallback(
    (guests: number, roomType: string, dates: Date[]): number => {
      if (!guests || !roomType || !dates || dates.length === 0) return 0;

      const qty = guests || 0;
      if (qty <= 0) return 0;

      const selectedRoom = roomTypes.find((room) => room.id === roomType);
      if (!selectedRoom) return 0;

      const nights = dates.length;
      if (nights <= 0) return 0;

      return selectedRoom.pricePerNight * qty * nights;
    },
    []
  );

  const { open, paymentStatus } = usePay();

  const isValidForm = isValid && selectedDates.length > 0 && guests >= 1;

  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    setIsSubmitting(true);
    setData(formData);
    const amount = calculateAmount(guests, roomType, selectedDates);
    try {
      if (amount > 0) {
        await open({
          amount,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        });
      } else {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject: "Room Reservation Request",
            to: [formData.email, "reservations@hotel.com"],
            emailData: {
              hotelName: hotel.name,
              roomType: roomTypes.find((r) => r.id === roomType)?.title,
              clientName: formData.name,
              clientEmail: formData.email,
              clientPhone: formData.phone,
              dates: selectedDates.map((date) => dayjs(date).format("YYYY-MM-DD")),
              guests: guests,
              totalPrice: amount,
              apartment: apartmentData?.name || "Not specified",
            },
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to send email");
        }
        router.push(
          `/recap?type=reservation&name=${encodeURIComponent(
            formData.name
          )}&email=${encodeURIComponent(
            formData.email
          )}&phone=${encodeURIComponent(
            formData.phone
          )}&hotelId=${hotel.id}&dates=${encodeURIComponent(
            selectedDates.map((date) => dayjs(date).format("YYYY-MM-DD")).join(",")
          )}&guests=${guests}&roomType=${roomType}&apartment=${encodeURIComponent(
            apartmentData?.name || ""
          )}`
        );
      }
    } catch (error) {
      toast("Error", {
        description: `An error occurred: ${error instanceof Error ? error.message : "Unknown error"}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (guests && roomType && selectedDates.length > 0) {
      const amount = calculateAmount(guests, roomType, selectedDates);
      setTotalAmount(amount);
    } else {
      setTotalAmount(0);
    }
  }, [guests, roomType, selectedDates, calculateAmount]);

  useEffect(() => {
    if (paymentStatus === "success" && data) {
      setIsSubmitting(true);
      fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "Room Reservation Confirmation",
          to: [data.email, "reservations@hotel.com"],
          emailData: {
            hotelName: hotel.name,
            roomType: roomTypes.find((r) => r.id === roomType)?.title,
            clientName: data.name,
            clientEmail: data.email,
            clientPhone: data.phone,
            dates: selectedDates.map((date) => dayjs(date).format("YYYY-MM-DD")),
            guests: guests,
            totalPrice: totalAmount,
            apartment: apartmentData?.name || "Not specified",
          },
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to send email");
          }
          router.push(
            `/recap?type=payment&name=${encodeURIComponent(
              data.name
            )}&email=${encodeURIComponent(
              data.email
            )}&phone=${encodeURIComponent(
              data.phone
            )}&hotelId=${hotel.id}&dates=${encodeURIComponent(
              selectedDates.map((date) => dayjs(date).format("YYYY-MM-DD")).join(",")
            )}&guests=${guests}&roomType=${roomType}&amount=${totalAmount}&apartment=${encodeURIComponent(
              apartmentData?.name || ""
            )}`
          );
        })
        .catch((error) => {
          toast("Error", {
            description: `An error occurred while sending the confirmation: ${error instanceof Error ? error.message : "Unknown error"}`,
          });
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else if (paymentStatus === "error") {
      toast("Payment Failed", {
        description: "An error occurred during payment. Please try again.",
      });
      setIsSubmitting(false);
    }
  }, [paymentStatus, data, totalAmount, hotel.id, selectedDates, guests, roomType, router, apartmentData]);

  const handleCalendarSelect = (dates: Date[] | undefined) => {
    setSelectedDates(dates || []);
  };

  const sortedDates = [...selectedDates].sort((a, b) => a.getTime() - b.getTime());

  return (
    <section className="container min-h-[200px] py-14 bg-gradient-to-b from-amber-50 to-white">
      {/* Display Apartment Information */}
      {apartmentData ? (
        <div className="mb-8 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-800 mb-4">{apartmentData.name}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={apartmentData.image}
                alt={`Image of ${apartmentData.name}`}
                width={800}
                height={500}
                className="w-full h-[300px] object-cover"
                quality={85}
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-amber-600 text-lg">{apartmentData.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-8 max-w-5xl mx-auto">
          <p className="text-amber-600 text-lg">Pas d&apos;appartement sélectionné. Veuillez choisir un appartement à réserver.</p>
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-6 md:gap-8 lg:grid-cols-2 mt-6 max-w-5xl mx-auto min-h-[200px]"
      >
        <div className="space-y-6">
          <Card className="shadow-lg border-amber-200">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800 flex items-center">
                <Users className="h-6 w-6 mr-2" />
                Informations sur les clients
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-amber-700">Nom complet</Label>
                <Input
                  id="name"
                  type="text"
                  className="border-amber-300 focus:ring-amber-500"
                  {...register("name", { required: "Full name is required" })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-amber-700">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    className="border-amber-300 focus:ring-amber-500"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone" className="text-amber-700">Télephone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="border-amber-300 focus:ring-amber-500"
                    {...register("phone", { required: "Phone is required" })}
                    aria-invalid={errors.phone ? "true" : "false"}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone.message}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-amber-200 min-h-[80px]">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800 flex items-center">
                <Bed className="h-6 w-6 mr-2" />
                Détails de la réservation
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="guests" className="text-amber-700">Nombres de client</Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value)))}
                  className="border-amber-300 focus:ring-amber-500"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="roomType" className="text-amber-700">Type de chambre</Label>
                <select
                  id="roomType"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="border-amber-300 focus:ring-amber-500 rounded-md p-2"
                >
                  {roomTypes.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.title} ({room.pricePerNight} FCFA/Nuit)
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2">
                <Label className="text-amber-700 flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                 Date de la reservation
                </Label>
                <Calendar
                  id="reservationDates"
                  mode="multiple"
                  selected={selectedDates}
                  onSelect={handleCalendarSelect}
                  showOutsideDays={true}
                  fromDate={new Date()}
                  className="rounded-md border border-amber-300"
                  aria-multiselectable="true"
                />
                {selectedDates.length > 0 ? (
                  <p className="text-sm text-amber-600">
                    Selectionnée une date: {sortedDates
                      .map((date) => dayjs(date).format("YYYY-MM-DD"))
                      .join(" - ")}
                  </p>
                ) : (
                  <p className="text-sm text-amber-600">Aucune date selectionné</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg border-amber-200 h-full">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-800 flex items-center">
              <Home className="h-6 w-6 mr-2" />
               Résumé de la réservation
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <p className="text-amber-700 font-semibold flex items-center">
                <Users className="h-5 w-5 mr-2" />
                  Nom du client
              </p>
              <p className="text-amber-600">
                {formData.name || "Non fourni"}
              </p>
            </div>
            <div className="grid gap-2">
              <p className="text-amber-700 font-semibold flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Email
              </p>
              <p className="text-amber-600">
                {formData.email || "Non fourni"}
              </p>
            </div>
            <div className="grid gap-2">
              <p className="text-amber-700 font-semibold flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Télephone
              </p>
              <p className="text-amber-600">
                {formData.phone || "Non fourni"}
              </p>
            </div>
            <div className="grid gap-2">
              <p className="text-amber-700 font-semibold flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                Selectionnée une date
              </p>
              <p className="text-amber-600">
                {sortedDates.length > 0
                  ? sortedDates.map((date) => dayjs(date).format("YYYY-MM-DD")).join(", ")
                  : "Aucune date selectionnée"}
              </p>
            </div>
            <div className="grid gap-2">
              <p className="text-amber-700 font-semibold flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Nombres de client
              </p>
              <p className="text-amber-600">{guests}</p>
            </div>
            <div className="grid gap-2">
              <p className="text-amber-700 font-semibold flex items-center">
                <Bed className="h-5 w-5 mr-2" />
                Type de chambre
              </p>
              <p className="text-amber-600">
                {roomTypes.find((r) => r.id === roomType)?.title || "Aucune selection"}
              </p>
            </div>
            <div className="grid gap-2">
              <p className="text-amber-700 font-semibold">Total du prix</p>
              <p className="text-lg font-bold text-amber-800">
                {totalAmount > 0
                  ? `${totalAmount} FCFA (${sortedDates.length} night${sortedDates.length > 1 ? "s" : ""})`
                  : "Aucun calcule"}
              </p>
            </div>
            <Button
              type="submit"
              disabled={!isValidForm || isSubmitting}
              className="mt-4 bg-amber-600 hover:bg-amber-700 text-white gap-2 w-full"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Chargement...</span>
                </>
              ) : (
                <>
                  <span>
                    {totalAmount > 0 ? "Procéder au paiement" : "Demander une réservation"}
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </form>
    </section>
  );
}