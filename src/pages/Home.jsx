import React from 'react';
import Hero from '../components/home/Hero';
import ServicePreview from '../components/home/ServicePreview';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicePreview />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
