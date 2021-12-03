import React from 'react';
import ContactSection from '../ContactSection';
import Map from '../Map';
import Footer from '../Footer'

export default function Contact() {
  return (
    <div style={{backgroundColor:'gray'}}>
      <ContactSection />
     <Map/>
     <Footer/>
    </div>
  );
}