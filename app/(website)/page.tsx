'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/website/Hero';
import Services from '@/components/website/Services/services';
import ShowcasePartenaires from '@/components/website/Partenaires/showcasepartenaires';
import Showcase from '@/components/website/Showcase/showcase';
import About from '@/components/website/About/about';
import SplashScreen from '@/components/SplashScreen'; // Import du SplashScreen

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <div>
          <Hero />
          <Showcase />
          <ShowcasePartenaires />
          <Services />
          <About />
        </div>
      )}
    </>
  );
}