import React from 'react'
import Hero from "@/components/space/Hero";
import Description from "@/components/space/Description";
import { espaces } from '@/config/data';
import DescripTransport from '@/components/space/DescripTransport';

export default function SpacePage({params: { space_id } }: { params: { space_id: string } }) {
    const space = espaces.find((espace) => espace.id == space_id);
    return (
        <div>
            <Hero space={space} />
            <Description space={space} />
            <DescripTransport space={space} />
        </div>
    )
}
