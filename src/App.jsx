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
    <div className="bg-white text-black dark:bg-black dark:text-white transition-colors">

      <Navbar />
      <Hero />
      <section id="how"><HowItWorks /></section>
      <section id="why"><WhyChooseUs /></section>
      <section id="testimonials"><Testimonials /></section>
      <ContactForm />
      <ChatWidget />
      <Footer />
   </div>
  );
};

export default App;
