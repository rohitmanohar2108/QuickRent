import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import GadgetList from '../components/GadgetList';
import ContactForm from '../components/ContactForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <GadgetList />
      <ContactForm />
    </>
  );
}