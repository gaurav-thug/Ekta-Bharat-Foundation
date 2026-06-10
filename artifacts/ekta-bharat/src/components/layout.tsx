import { ReactNode, useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Facebook, Twitter, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Layout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "What We Do", href: "#what-we-do" },
    { name: "Impact", href: "#impact" },
    { name: "Stories", href: "#stories" },
    { name: "Campaigns", href: "#campaigns" },
    { name: "Volunteer", href: "#volunteer" },
    { name: "CSR Partners", href: "#csr" },
    { name: "Transparency", href: "#transparency" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("#home")}>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <span className={`font-serif font-bold text-xl md:text-2xl ${isScrolled ? "text-foreground" : "text-white"}`}>
              Ekta Bharat Foundation
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground/80" : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#campaigns")}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Donate Now
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="flex flex-col py-4 px-6 gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.href)}
                    className="text-left text-foreground/80 font-medium hover:text-primary py-2"
                  >
                    {link.name}
                  </button>
                ))}
                <button
                  onClick={() => scrollTo("#campaigns")}
                  className="bg-primary text-white px-6 py-3 rounded-full font-semibold mt-4"
                >
                  Donate Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">{children}</main>

      {/* Sticky Donate Button (Mobile) */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => scrollTo("#campaigns")}
          className="bg-primary text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center animate-pulse"
        >
          <Heart className="w-6 h-6 fill-current" />
        </button>
      </div>

      <footer className="bg-foreground text-white/80 pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <span className="font-serif font-bold text-2xl text-white">
                  Ekta Bharat
                </span>
              </div>
              <p className="mb-6">
                United We Rise, India We Build. Working towards a stronger, more equitable nation since 2010.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollTo("#about")} className="hover:text-primary transition-colors">About Us</button></li>
                <li><button onClick={() => scrollTo("#what-we-do")} className="hover:text-primary transition-colors">Our Work</button></li>
                <li><button onClick={() => scrollTo("#campaigns")} className="hover:text-primary transition-colors">Campaigns</button></li>
                <li><button onClick={() => scrollTo("#volunteer")} className="hover:text-primary transition-colors">Volunteer</button></li>
                <li><button onClick={() => scrollTo("#transparency")} className="hover:text-primary transition-colors">Transparency</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>123 Foundation Marg, Institutional Area, New Delhi, India 110001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span>contact@ektabharatfoundation.org</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Make a Difference</h4>
              <p className="mb-6">Your contribution can change a life today.</p>
              <button
                onClick={() => scrollTo("#campaigns")}
                className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-semibold transition-colors text-center"
              >
                Donate Now
              </button>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>© {new Date().getFullYear()} Ekta Bharat Foundation. All rights reserved.</p>
            <p>Ekta Bharat Foundation is a registered NGO under Section 8 of Companies Act 2013 | 80G | FCRA Registered</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
