import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhyChooseUs from './components/WhyChooseUs';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';

const App = () => {
  return (
    <main className="bg-white text-gray-800">
      <Navbar />
      <Hero />
      <section id="how"><HowItWorks /></section>
      <section id="why"><WhyChooseUs /></section>
      <section id="testimonials"><Testimonials /></section>
      <ContactForm />
      <ChatWidget />
      <Footer />
    </main>
  );
};

export default App;
