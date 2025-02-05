'use client'
import { useState } from 'react';
import './style.css'
import { Mail, MapPin, Phone, Twitter, Instagram, Linkedin,Facebook } from 'lucide-react';
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "300",
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "700",
});

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 pt-[100px] md:pt-[100px]">
      <div className="max-w-6xl mx-auto relative">
        {/* Logo positioned on the right side */}
        <div className="absolute top-0 right-0 w-16 md:w-24">
          {/* Placeholder for your logo */}
          <div className="text-right">
            {/* Replace this div with your actual logo image */}
            <div className="w-16 md:w-24 h-16 md:h-24 inline-block -ml-6">
                <img 
                src="images/logo-slide.png" 
                alt="Logo" 
                className="w-full h-full object-contain"
                />
            </div>

          </div>
        </div>

        <h1 className={`text-[36px] leading-[40px] mb-[30px] ${monsterfont.className}`}>Get in Touch!</h1>
        <div className={`text-[48px] leading-[52px] mb-[30px] ${monsterfont1.className}`}>
          <h2>Have an idea?</h2>
          <h2>Drop your details below</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-10">
          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className={`text-[24px] leading-[28px] mb-[10px] ${monsterfont1.className}`}>Send a Request</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-1/2 bg-transparent border-b border-gray-600 px-2 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-1/2 bg-transparent border-b border-gray-600 px-2 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="question"
                  placeholder="Your Question"
                  value={formData.question}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-transparent border-b border-gray-600 px-2 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>
              <a href='/contact-us'>
              <button
                type="submit"
                className="px-8 py-3 border border-white rounded-full"
              >
                CONTACT US
              </button>
              </a>
            </form>
          </div>

          {/* Find Us Section */}
          <div className="bg-black p-10  contact-card">
            <h3 className={`text-[24px] leading-[28px] mb-[60px] ${monsterfont1.className}`}>Find Us</h3>
            <div className="">
              <div className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-blue-500" />
                <a href="mailto:connect@thealgorithmx.com" className={`text-[14px] leading-[18px]  font-[Helvetica] font-[700] mb-3 hover:underline`}>
                  connect@thealgorithmx.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-4 h-4 text-blue-500" />
                <p className={`text-[14px] leading-[18px]  font-[Helvetica] font-[700] mb-3 hover:underline`}>2810 N Church St. PMB 15369, Wilmington, DE 19802</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-blue-500" />
                <a href="tel:+14255776660" className={`text-[14px] leading-[18px]  font-[Helvetica] font-[500] hover:underline`}>
                  +1-425-577-6660
                </a>
              </div>
              <div className="flex gap-1 mt-[80px]">
                <a href="http://x.com/algorithmxinc"  target="_blank" className="hover:text-blue-500 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/thealgorithmx/" target="_blank" className="hover:text-blue-500 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.facebook.com/algorithmxinc" target="_blank" className="hover:text-blue-500 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/company/algorithmxinc" target="_blank" className="hover:text-blue-500 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;