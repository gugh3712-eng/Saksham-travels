import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Car, ShieldCheck, ChevronRight, 
  ArrowRight, Quote, Menu, X, Instagram, Facebook, Star, Flame, Anchor, Camera
} from 'lucide-react';

/**
 * SAKSHAM TRAVELS - FINAL MASTER CODE
 * Email: sakshamtravels139@gmail.com
 * Numbers: 72660 10969 / 94517 97977
 */

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const business = {
    name: "Saksham Travels",
    phone: "72660 10969",
    altPhone: "94517 97977",
    email: "sakshamtravels139@gmail.com",
    address: "Phase-1, Ashok Vihar, Varanasi, UP 221007",
    whatsappBase: "917266010969"
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = (message) => {
    const encodedMsg = encodeURIComponent(message || "Hello Saksham Travels, I would like to inquire about a premium ride in Varanasi.");
    window.open(`https://wa.me/${business.whatsappBase}?text=${encodedMsg}`, '_blank');
  };

  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=800", title: "Evening Ganga Aarti" },
    { url: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&q=80&w=800", title: "The Blue Ghats" },
    { url: "https://images.unsplash.com/photo-1590050752117-23a9d7fc20c7?auto=format&fit=crop&q=80&w=800", title: "Morning Prayer" },
    { url: "https://images.unsplash.com/photo-1628114251213-9a3b6f001718?auto=format&fit=crop&q=80&w=800", title: "Sarnath Stupa" },
    { url: "https://images.unsplash.com/photo-1629814402685-61877864805e?auto=format&fit=crop&q=80&w=800", title: "Eternal Ghats" },
    { url: "https://images.unsplash.com/photo-1622619745821-27757962454b?auto=format&fit=crop&q=80&w=800", title: "Golden Temple Glow" }
  ];

  const fleet = [
    {
      name: "Luxury Sedan",
      model: "Maruti Swift Dzire",
      seats: 4,
      image: "https://images.unsplash.com/photo-1662496739822-26d0e657c919?auto=format&fit=crop&q=80&w=800",
      price: "Starts ₹2,000"
    },
    {
      name: "Executive SUV",
      model: "Maruti Ertiga",
      seats: 6,
      image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&q=80&w=800",
      price: "Starts ₹3,000"
    },
    {
      name: "Premium Gold",
      model: "Toyota Innova Crysta",
      seats: 7,
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800",
      price: "Starts ₹4,500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] font-sans selection:bg-[#D4AF37] selection:text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        .font-display { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        @keyframes reveal-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal-up { animation: reveal-up 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-gray-100' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col group cursor-pointer">
            <span className={`text-2xl font-display font-bold tracking-tight transition-colors duration-500 ${scrolled ? 'text-black' : 'text-white'}`}>
              SAKSHAM <span className="text-[#D4AF37]">TRAVELS</span>
            </span>
            <span className={`text-[10px] tracking-[0.4em] uppercase transition-colors duration-500 ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>
              Varanasi • Excellence In Every Mile
            </span>
          </div>

          <div className="hidden lg:flex space-x-12 text-[11px] font-medium uppercase tracking-[0.2em]">
            {['Ghats', 'Fleet', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`hover:text-[#D4AF37] transition-colors relative group ${scrolled ? 'text-black' : 'text-white'}`}>
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => openWhatsApp()}
              className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${scrolled ? 'bg-black text-white hover:bg-[#D4AF37]' : 'bg-white text-black hover:bg-[#D4AF37] hover:text-white'}`}
            >
              Reserve Now
            </button>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className={scrolled ? 'text-black' : 'text-white'} /> : <Menu className={scrolled ? 'text-black' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 lg:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-black"><X size={32}/></button>
          {['Ghats', 'Fleet', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-3xl font-display text-black">{item}</a>
          ))}
          <button onClick={() => openWhatsApp()} className="bg-black text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest">WhatsApp Inquiry</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1590050752117-23a9d7fc20c7?auto=format&fit=crop&q=80&w=2000" 
            alt="Varanasi Sunrise" 
            className="w-full h-full object-cover opacity-80 animate-[zoom_30s_infinite_alternate]"
          />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl text-center md:text-left mx-auto md:mx-0">
            <h1 className="text-6xl md:text-[90px] font-display leading-[1.1] mb-10 animate-reveal-up">Arrival In <span className="italic text-[#D4AF37]">Paradise.</span></h1>
            <div className="flex flex-col sm:flex-row gap-8 justify-center md:justify-start animate-reveal-up delay-100">
              <button onClick={() => openWhatsApp("Hello, I want to book a premium ride in Varanasi.")} className="bg-[#D4AF37] hover:bg-white hover:text-black text-white px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] transition-all">Book via WhatsApp</button>
              <a href="#fleet" className="border border-white/20 hover:border-white text-white px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] transition-all">View Fleet</a>
            </div>
          </div>
        </div>
      </section>

      {/* Aesthetic Gallery */}
      <section id="ghats" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Kashi Vignettes</span>
            <h2 className="text-5xl font-display text-black">A City Beyond Time</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="group relative h-[450px] overflow-hidden rounded-sm cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700">
                <img src={img.url} alt={img.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10 text-white">
                    <h3 className="text-2xl font-display">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-32 bg-[#FAF9F6]">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">The Chariots</span>
          <h2 className="text-5xl font-display text-black mb-24 uppercase">Executive Mobility</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {fleet.map((car, idx) => (
              <div key={idx} className="group bg-white border border-gray-100 hover:border-[#D4AF37]/30 transition-all duration-500 overflow-hidden shadow-sm">
                <div className="h-72 overflow-hidden relative">
                  <img src={car.image} alt={car.model} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="p-12 text-left">
                  <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold block mb-2">{car.name}</span>
                  <h3 className="text-3xl font-display mb-8 text-black">{car.model}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-xs tracking-widest uppercase">{car.price}</span>
                    <button onClick={() => openWhatsApp(`Hello Saksham Travels, I would like to book a ${car.model} for my trip.`)} className="text-black border-b border-black/10 pb-1 text-[10px] uppercase tracking-[0.2em] font-bold hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">Book This Ride</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Direct Assistance</span>
              <h2 className="text-6xl font-display mb-12 text-black leading-tight">Start Your <br/>Journey Now.</h2>
              <div className="space-y-12">
                <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-300 mb-4">Priority Access</h4>
                    <a href={`tel:91${business.phone.replace(/\s/g, '')}`} className="text-3xl font-display hover:text-[#D4AF37] block mb-2 transition-colors">+91 {business.phone}</a>
                    <a href={`tel:91${business.altPhone.replace(/\s/g, '')}`} className="text-3xl font-display hover:text-[#D4AF37] block mb-2 transition-colors">+91 {business.altPhone}</a>
                </div>
                <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-300 mb-4">Official Email</h4>
                    <p className="text-2xl font-display">{business.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF9F6] p-12 md:p-16 rounded-sm shadow-sm relative">
                <form className="space-y-10" onSubmit={e => e.preventDefault()}>
                    <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold">Your Name</label>
                        <input type="text" id="custName" className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-[#D4AF37] outline-none transition-all font-display text-xl" placeholder="Full Name" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold">Service Required</label>
                        <select id="custService" className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-[#D4AF37] outline-none transition-all font-display text-xl bg-[#FAF9F6]">
                            <option>Ghat Tour & Aarti</option>
                            <option>Airport Pick/Drop</option>
                            <option>Sarnath Sacred Circuit</option>
                            <option>Outstation Journey</option>
                        </select>
                    </div>
                    <button 
                      onClick={() => {
                        const name = document.getElementById('custName').value;
                        const service = document.getElementById('custService').value;
                        openWhatsApp(`Hello, my name is ${name}. I am looking for a ${service} service with Saksham Travels.`);
                      }}
                      className="w-full bg-black text-white py-6 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[#D4AF37] transition-all duration-500 shadow-xl"
                    >
                        Secure Ride via WhatsApp
                    </button>
                </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-24 text-center">
        <div className="container mx-auto px-6">
          <span className="text-3xl font-display font-bold tracking-tighter block mb-6 uppercase">SAKSHAM <span className="text-[#D4AF37]">TRAVELS</span></span>
          <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] mb-12">Luxury Redefined • Varanasi</p>
          <div className="flex justify-center space-x-12 text-white/50 mb-12">
            <a href="#" className="hover:text-[#D4AF37] transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors"><Facebook size={20} /></a>
          </div>
          <p className="text-[9px] text-white/20 uppercase tracking-[0.4em]">&copy; {new Date().getFullYear()} Saksham Travels. Established 2018.</p>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <button 
        onClick={() => openWhatsApp()}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </button>
    </div>
  );
};

export default App;

                    
