/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  Quote,
  Package,
  Leaf,
  Truck,
  Award,
  ShieldCheck,
  Search,
  ChevronUp,
  ChevronDown,
  ExternalLink,
  Star,
  Clock,
  User,
  MessageCircle,
  MessageSquare
} from "lucide-react";
import { useState, useEffect, FormEvent } from "react";

const PRODUCT_CATEGORIES = [
  {
    id: "fresh",
    title: "Fresh Produce",
    seoKeyword: "fresh vegetables exporter india",
    description: "Premium export-quality fresh vegetables. Sourced directly from farms to ensure maximum freshness and quality.",
    items: [
      { name: "Tomato", desc: "Firm, red, and long shelf-life for export.", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=800&auto=format&fit=crop" },
      { name: "Raw Red Chilli", desc: "Fresh, vibrant, and spicy export-grade red chillies.", image: "/images/products/red_chilli.png" },
      { name: "Coconut (Semi Husked)", desc: "Large size, high oil content, fresh from farms.", image: "/images/products/coconut.webp" }
    ]
  },
  {
    id: "whole-spices",
    title: "Whole Spices",
    seoKeyword: "whole spices exporter india",
    description: "Aromatic and authentic whole spices. Hand-picked and meticulously sorted to guarantee superior flavor profiles.",
    items: [
      { name: "Cardamom", desc: "Highly aromatic green cardamom pods, perfect for sweet and savory dishes.", image: "/images/products/cardamom.avif" },
      { name: "Cashew Nut", desc: "Premium grade, whole white cashew nuts with a rich buttery taste.", image: "/images/products/cashew_nut.jpg" }
    ]
  },
  {
    id: "spice-powders",
    title: "Spice Powders",
    seoKeyword: "spice powder exporter india",
    description: "Our pure spices are sourced directly from farmers, ensuring 100% purity and authentic aroma. Ground to perfection.",
    items: [
      { name: "Turmeric Powder", desc: "High curcumin content, vibrant yellow color.", image: "/images/products/turmeric_powder.avif" },
      { name: "Coriander Powder", desc: "Aromatic and finely ground from premium seeds.", image: "/images/products/coriander_powder.jpg" },
      { name: "Red Chilli Powder", desc: "Perfect heat and color for culinary excellence.", image: "/images/products/red_chilli_powder.jpg" },
      { name: "Red Chilli Flakes", desc: "Spicy and vibrant flakes for a burst of flavor.", image: "/images/products/red_chili_flakes.jpg" },
      { name: "Cumin Powder", desc: "Earthly flavor, freshly ground for maximum aroma.", image: "/images/products/cumin_powder.webp" },
      { name: "Black Pepper Powder", desc: "Bold and spicy, sourced from the finest peppercorns.", image: "/images/products/black_pepper.jpg" },
      { name: "White Pepper Powder", desc: "Mild heat, perfect for creamy sauces and soups.", image: "/images/products/white_pepper_powder.jpg" },
      { name: "Garlic Powder", desc: "Convenient and flavorful, made from fresh garlic.", image: "/images/products/garlic_powder.jpg" },
      { name: "Dry Ginger Powder", desc: "Zesty and warm, ideal for tea and baking.", image: "/images/products/dry_ginger_powder.jpg" },
      { name: "Red Onion Powder", desc: "Sweet and savory, a versatile kitchen staple.", image: "/images/products/red_onion_powder.jpeg" }
    ]
  }
];

const BLOG_POSTS = [
  {
    title: "The Health Benefits of Pure Turmeric Powder",
    excerpt: "Discover why Turmeric is known as the golden spice and how it can boost your immunity...",
    date: "March 25, 2026",
    author: "Admin",
    image: "/images/blog/blog_turmeric_health.png"
  },
  {
    title: "How to Choose the Best Spices for Export",
    excerpt: "Quality standards and certifications you need to look for when importing Indian spices...",
    date: "March 20, 2026",
    author: "Admin",
    image: "/images/blog/blog_choose_spices.png"
  },
  {
    title: "Dharmapuri: The Spice Hub of Tamil Nadu",
    excerpt: "Exploring the rich agricultural heritage of Dharmapuri and its contribution to global trade...",
    date: "March 15, 2026",
    author: "Admin",
    image: "/images/blog/blog_dharmapuri.png"
  },
  {
    title: "Sustainable Farming: The Future of Spice Export",
    excerpt: "How we work with local farmers to implement sustainable practices that ensure long-term quality...",
    date: "March 10, 2026",
    author: "Admin",
    image: "/images/blog/blog_sustainable_farming.png"
  },
  {
    title: "The Science of Spice Preservation",
    excerpt: "Understanding the dehydration process and how it locks in flavor and nutrients for years...",
    date: "March 05, 2026",
    author: "Admin",
    image: "/images/blog/blog_spice_preservation.png"
  },
  {
    title: "Global Spice Trends in 2026",
    excerpt: "A deep dive into the rising demand for organic and authentic Indian spice blends in Western markets...",
    date: "March 01, 2026",
    author: "Admin",
    image: "/images/blog/blog_global_trends.png"
  },
  {
    title: "Logistics: From Farm to Global Port",
    excerpt: "The journey of a spice container: How we manage the complex supply chain for international trade...",
    date: "February 25, 2026",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Traditional vs. Modern Grinding Techniques",
    excerpt: "Why cold-grinding is essential for maintaining the volatile oils and aroma of premium spices...",
    date: "February 20, 2026",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=800&auto=format&fit=crop"
  }
];

const FAQS = [
  {
    q: "What is your minimum order quantity (MOQ)?",
    a: "Our MOQ varies by product and destination. Generally, we cater to bulk wholesale orders for international export. Please request a quote for specific details."
  },
  {
    q: "Do you provide customized packaging for B2B clients?",
    a: "Yes, we offer private labeling and customized packaging solutions to meet the specific branding requirements of our global partners."
  },
  {
    q: "How do you ensure the quality of your spices?",
    a: "We follow strict quality control measures, from sourcing raw materials to final packaging. Our products are tested for purity, aroma, and shelf-life."
  },
  {
    q: "What are your payment terms for international orders?",
    a: "We typically work with Letter of Credit (L/C) or Telegraphic Transfer (T/T). Specific terms can be negotiated based on the order volume and partnership duration."
  },
  {
    q: "How long does shipping take to major global ports?",
    a: "Transit times vary by destination. Typically, shipments to Southeast Asia take 7-10 days, while Europe and North America take 25-35 days from the port of loading."
  },
  {
    q: "Do you provide samples before bulk orders?",
    a: "Yes, we can provide product samples for quality evaluation. Shipping costs for samples are usually borne by the buyer, which are later adjusted in the first bulk order."
  },
  {
    q: "Are your products certified for specific regions (e.g., EU, USA)?",
    a: "Our products comply with global standards. We provide FSSAI, APEDA, and Spices Board certifications. Specific regional compliance certificates can be arranged upon request."
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [isContactLoading, setIsContactLoading] = useState(false);
  const [isQuoteLoading, setIsQuoteLoading] = useState(false);
  const [isNewsletterLoading, setIsNewsletterLoading] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openQuoteModal = (productName?: string) => {
    setSelectedProduct(productName || "General Inquiry");
    setIsQuoteModalOpen(true);
  };

  const filteredProducts = PRODUCT_CATEGORIES.map(cat => ({
    ...cat,
    items: cat.items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  })).filter(cat => cat.items.length > 0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsAppInquiry = (name: string, email: string, subject: string, message: string) => {
    const text = `*New Inquiry from Website*\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919677402451?text=${encodedText}`, '_blank');
  };

  const handleEmailSubmission = async (data: any) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send email');
      return true;
    } catch (error) {
      console.error('Email error:', error);
      return false;
    }
  };

  const handleQuoteSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsQuoteLoading(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const quantity = formData.get('quantity') as string;
    const requirements = formData.get('requirements') as string;
    
    const success = await handleEmailSubmission({
      name,
      email,
      company,
      quantity,
      subject: selectedProduct,
      message: requirements,
      isQuote: true
    });

    setIsQuoteLoading(false);
    if (success) {
      setFormStatus("success");
      setTimeout(() => {
        setIsQuoteModalOpen(false);
        setFormStatus("idle");
      }, 3000);
    } else {
      // Fallback to WhatsApp
      const message = `Requirement for ${selectedProduct}.\nCompany: ${company}\nQuantity: ${quantity}\nDetails: ${requirements}`;
      handleWhatsAppInquiry(name, email, `Quote Request: ${selectedProduct}`, message);
      setIsQuoteModalOpen(false);
    }
  };

  const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsContactLoading(true);
    setFormStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    const success = await handleEmailSubmission({
      name,
      email,
      subject,
      message,
      isQuote: false
    });

    setIsContactLoading(false);
    if (success) {
      setFormStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormStatus("idle"), 5000);
    } else {
      setFormStatus("error");
      handleWhatsAppInquiry(name, email, subject, message);
    }
  };

  const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsNewsletterLoading(true);
    
    const success = await handleEmailSubmission({
      name: "Newsletter Subscriber",
      email: newsletterEmail,
      subject: "Newsletter Subscription",
      message: `New newsletter subscription request from: ${newsletterEmail}`,
      isNewsletter: true
    });

    setIsNewsletterLoading(false);
    if (success) {
      setNewsletterStatus("success");
      setNewsletterEmail("");
      setTimeout(() => setNewsletterStatus("idle"), 5000);
    } else {
      setNewsletterStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white text-brand-earth font-sans selection:bg-brand-gold selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative">
              <img src="image.png" alt="TM International Logo" className="h-10 w-auto transition-all duration-500" referrerPolicy="no-referrer" />
              <div className="absolute -inset-2 bg-brand-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <h1 className={`text-xl font-black tracking-tighter leading-none transition-colors duration-500 ${!isScrolled ? "text-white" : "text-brand-earth"}`}>TM INTERNATIONAL</h1>
              <p className="text-[8px] uppercase tracking-[0.4em] text-brand-gold font-black">Tradeline</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-12">
            {["Home", "Products", "About", "Insights", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-[10px] uppercase tracking-[0.2em] font-black transition-all hover:text-brand-gold relative group ${!isScrolled ? "text-white/80" : "text-brand-earth/80"}`}
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-gold transition-all group-hover:w-full" />
              </a>
            ))}
            <button 
              onClick={() => openQuoteModal("General Inquiry")}
              className={`px-8 py-3 text-[10px] uppercase font-black tracking-[0.2em] transition-all rounded-sm ${!isScrolled ? "bg-white text-brand-earth hover:bg-brand-gold hover:text-white" : "bg-brand-earth text-white hover:bg-brand-gold"}`}
            >
              Get a Quote
            </button>
          </div>

          <button className={`lg:hidden transition-colors ${!isScrolled ? "text-white" : "text-brand-earth"}`} onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-brand-earth flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-20">
              <div className="flex items-center gap-3">
                <img src="image.png" alt="Logo" className="h-10 w-auto" referrerPolicy="no-referrer" />
                <div>
                  <h1 className="text-xl font-black tracking-tighter leading-none text-white">TM INTERNATIONAL</h1>
                  <p className="text-[8px] uppercase tracking-[0.4em] text-brand-gold font-black">Tradeline</p>
                </div>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="text-white">
                <X className="w-10 h-10" />
              </button>
            </div>
            
            <div className="flex flex-col gap-8">
              {["Home", "Products", "About", "Insights", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-serif text-white hover:text-brand-gold transition-colors italic"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-white/10">
              <button 
                onClick={() => { setIsMenuOpen(false); openQuoteModal("General Inquiry"); }}
                className="w-full bg-brand-gold text-white py-6 rounded-sm font-black text-xs uppercase tracking-[0.3em]"
              >
                Request a Quote
              </button>
              <div className="mt-8 flex gap-6">
                <Phone className="w-5 h-5 text-brand-gold" />
                <p className="text-white font-serif">+91 9677402451</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden bg-brand-earth">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2000&auto=format&fit=crop" 
            alt="Spice Background" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-earth via-brand-earth/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 md:pt-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-brand-gold" />
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-black">Global Spice Exporters</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl lg:text-[120px] font-serif text-white leading-[0.9] mb-10 tracking-tighter">
              The Essence of <br />
              <span className="text-brand-gold italic">Pure India.</span>
            </h1>

            <p className="text-base md:text-xl text-white/70 max-w-2xl mb-12 leading-relaxed font-light">
              From the fertile lands of Dharmapuri to the global stage. We export premium, farm-fresh spices and produce with a legacy of trust and 100% purity.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-brand-gold text-white px-8 md:px-10 py-5 md:py-6 rounded-sm font-black text-[10px] md:text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-brand-earth transition-all flex items-center justify-center gap-4 shadow-2xl shadow-brand-gold/20"
              >
                Explore Catalog <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border border-white/30 text-white px-8 md:px-10 py-5 md:py-6 rounded-sm font-black text-[10px] md:text-xs uppercase tracking-[0.3em] hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-6 z-10 hidden lg:flex items-center gap-8">
          <div className="flex flex-col gap-4">
            {["Instagram", "LinkedIn", "Twitter"].map((social) => (
              <a key={social} href="#" className="text-[8px] uppercase tracking-[0.3em] text-white/40 hover:text-brand-gold transition-colors vertical-text">{social}</a>
            ))}
          </div>
          <div className="w-[1px] h-32 bg-white/10" />
        </div>

        <div className="absolute bottom-0 right-0 z-10 hidden xl:block">
          <div className="bg-white p-12 max-w-sm">
            <p className="text-brand-earth font-serif text-2xl mb-4 italic">"Quality is not an act, it is a habit."</p>
            <p className="text-[10px] uppercase tracking-widest font-black text-brand-gold">— TM International Tradeline</p>
          </div>
        </div>
      </section>

      {/* Featured Stats Section */}
      <section className="py-12 bg-brand-earth text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Products", value: "50+" },
            { label: "Countries", value: "15+" },
            { label: "Experience", value: "10+ Yrs" },
            { label: "Purity", value: "100%" }
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-3xl md:text-4xl font-black text-brand-gold mb-1">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      {/* Features Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6">Why Choose Us</h2>
              <h3 className="text-5xl font-serif text-brand-earth mb-8 leading-tight">Excellence in every <span className="text-brand-gold italic">grain.</span></h3>
              <p className="text-gray-500 leading-relaxed mb-10">We bridge the gap between local farms and global markets, ensuring that the essence of Indian spices remains untainted and pure.</p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-12 h-12 rounded-full border-4 border-white object-cover" alt="Client" />
                  ))}
                </div>
                <p className="text-[10px] uppercase tracking-widest font-black text-brand-earth">Trusted by 500+ <br /> Global Partners</p>
              </div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  icon: <ShieldCheck className="w-10 h-10" />, 
                  title: "Certified Purity", 
                  desc: "Rigorous laboratory testing for curcumin levels, moisture, and microbial safety." 
                },
                { 
                  icon: <Truck className="w-10 h-10" />, 
                  title: "Direct Export", 
                  desc: "Seamless logistics from Dharmapuri to any global port with full documentation support." 
                },
                { 
                  icon: <Leaf className="w-10 h-10" />, 
                  title: "Farm to Fork", 
                  desc: "Direct sourcing from farmers ensures maximum freshness and fair trade practices." 
                },
                { 
                  icon: <Award className="w-10 h-10" />, 
                  title: "Premium Grade", 
                  desc: "Only the highest export-quality produce makes it into our TM International catalog." 
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-12 rounded-sm shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-all duration-500 group">
                  <div className="text-brand-gold mb-8 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                  <h4 className="text-xl font-black text-brand-earth mb-4 tracking-tight">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote 1 */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Quote className="w-12 h-12 text-brand-gold/20 mx-auto mb-8" />
            <p className="text-3xl md:text-4xl font-serif italic text-brand-earth leading-tight mb-8">
              "Our mission is to bring the authentic flavors of India to every corner of the globe, maintaining the highest standards of purity and ethical sourcing."
            </p>
            <div className="w-12 h-[2px] bg-brand-gold mx-auto mb-4" />
            <p className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-gold">The TM International Promise</p>
          </motion.div>
        </div>
      </section>

      {/* Product Catalog */}
      <section id="products" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-16">
            <div className="max-w-3xl">
              <h2 className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6">Our Catalog</h2>
              <h3 className="text-4xl md:text-6xl font-serif text-brand-earth mb-8 tracking-tighter">Premium <span className="italic text-brand-gold">Collections.</span></h3>
              <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed">Explore our meticulously curated selection of pure spices, blended masalas, and fresh produce. Each item is a testament to our commitment to quality.</p>
            </div>
            <div className="relative w-full lg:w-96">
              <input 
                type="text" 
                placeholder="Search our catalog..." 
                className="w-full pl-12 pr-6 py-4 md:py-6 bg-white rounded-sm border-none shadow-xl shadow-gray-200/50 focus:ring-2 focus:ring-brand-gold outline-none transition-all text-sm font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold w-5 h-5" />
            </div>
          </div>

          {/* Category Quick Nav */}
          <div className="sticky top-[72px] md:top-[88px] z-[40] bg-gray-50/80 backdrop-blur-sm py-4 mb-12 border-b border-gray-200 -mx-6 px-6 overflow-x-auto no-scrollbar">
            <div className="flex gap-4 md:gap-8 min-w-max">
              {PRODUCT_CATEGORIES.map((cat) => (
                <button 
                  key={cat.id}
                  onClick={() => document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="text-[9px] md:text-[10px] uppercase font-black tracking-widest text-brand-earth/60 hover:text-brand-gold transition-colors whitespace-nowrap"
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-24 md:space-y-40">
            {filteredProducts.map((category) => (
              <div key={category.id} id={category.id} className="relative scroll-mt-32 md:scroll-mt-40">
                <div className="flex flex-col lg:flex-row gap-20">
                  <div className="lg:w-1/3 sticky top-32 h-fit">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-[1px] bg-brand-gold" />
                      <span className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-black">Category</span>
                    </div>
                    <h4 className="text-2xl md:text-4xl font-serif text-brand-earth mb-8 tracking-tight">{category.title}</h4>
                    <p className="text-gray-500 leading-relaxed mb-6 font-light text-sm md:text-base">{category.description}</p>
                    {category.seoKeyword && (
                      <p className="text-[10px] text-gray-400 mb-10 italic">Tags: {category.seoKeyword}</p>
                    )}
                    <button 
                      onClick={() => openQuoteModal(`Bulk Inquiry: ${category.title}`)}
                      className="text-[9px] md:text-[10px] uppercase font-black tracking-[0.3em] text-brand-earth hover:text-brand-gold transition-colors flex items-center gap-4 group"
                    >
                      Inquire for Category <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                  <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-12">
                    {category.items.map((item) => (
                      <motion.div 
                        whileHover={{ y: -10 }}
                        key={item.name}
                        className="group bg-white rounded-sm overflow-hidden shadow-lg shadow-gray-200/30 hover:shadow-2xl transition-all duration-500 flex flex-col"
                      >
                        <div className="aspect-[1/1] md:aspect-[4/5] overflow-hidden relative">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-brand-earth/10 group-hover:bg-transparent transition-colors duration-700" />
                          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-brand-earth/80 to-transparent hidden md:block">
                            <button 
                              onClick={() => openQuoteModal(item.name)}
                              className="w-full py-3 bg-brand-gold text-white text-[10px] uppercase font-black tracking-[0.3em] hover:bg-white hover:text-brand-earth transition-all"
                            >
                              Request Quote
                            </button>
                          </div>
                        </div>
                        <div className="p-4 md:p-10 flex flex-col flex-grow">
                          <div className="flex justify-between items-start mb-2 md:mb-4">
                            <h5 className="text-sm md:text-2xl font-black text-brand-earth tracking-tighter leading-tight">{item.name}</h5>
                            <Package className="w-4 h-4 md:w-5 md:h-5 text-brand-gold/30 shrink-0" />
                          </div>
                          <p className="text-[10px] md:text-sm text-gray-500 leading-relaxed font-light mb-4 md:mb-8 flex-grow line-clamp-2 md:line-clamp-none">{item.desc}</p>
                          <div className="pt-3 md:pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                            <button 
                              onClick={() => openQuoteModal(item.name)}
                              className="w-full md:w-auto text-[8px] md:text-[9px] uppercase tracking-widest font-black text-brand-gold hover:text-brand-earth transition-colors py-2 border border-brand-gold/20 md:border-none text-center"
                            >
                              Inquire Now
                            </button>
                            <a 
                              href={`https://wa.me/919677402451?text=${encodeURIComponent(`I'm interested in ${item.name}. Please provide more details.`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-brand-gold hover:text-brand-earth transition-colors"
                            >
                              <MessageCircle className="w-5 h-5" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 aspect-[3/4] rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=1000&auto=format&fit=crop" 
                  alt="Spice Sourcing" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-earth/5 rounded-full blur-3xl -z-10" />
              <div className="absolute top-1/2 -right-12 -translate-y-1/2 bg-brand-earth p-12 text-white hidden xl:block shadow-2xl">
                <p className="text-6xl font-black mb-2 text-brand-gold">10+</p>
                <p className="text-[10px] uppercase tracking-[0.4em] font-black opacity-60 leading-tight">Years of <br /> Global Trust</p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px] mb-8">The Legacy</h2>
              <h3 className="text-6xl font-serif text-brand-earth mb-10 tracking-tighter leading-[1.1]">Bridging Cultures Through <span className="italic text-brand-gold">Flavor.</span></h3>
              <div className="space-y-8 text-gray-600 leading-relaxed font-light text-lg">
                <p>
                  Based in the agricultural heartland of <strong>Dharmapuri, Tamil Nadu</strong>, TM International Tradeline has established itself as a premier exporter of high-quality Indian spices and fresh produce.
                </p>
                <p>
                  Our strategic location allows us to source directly from farmers, ensuring that our products are as fresh as they are pure. We adhere to the highest standards of hygiene and quality control, making us a preferred partner for B2B clients worldwide.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                  {[
                    { title: "Direct Sourcing", desc: "No middleman, straight from the farms." },
                    { title: "Global Reach", desc: "Exporting to over 20+ countries." },
                    { title: "Pure Quality", desc: "100% natural, no additives." },
                    { title: "B2B Expert", desc: "Tailored wholesale solutions." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-1 h-full bg-brand-gold" />
                      <div>
                        <h5 className="text-sm font-black text-brand-earth uppercase tracking-widest mb-1">{item.title}</h5>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Center: Raw vs. Powdered */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6">Knowledge Center</h2>
            <h3 className="text-5xl md:text-6xl font-serif text-brand-earth tracking-tighter leading-tight">Raw vs. <span className="italic text-brand-gold">Powdered.</span></h3>
            <p className="text-gray-500 mt-6 max-w-2xl mx-auto font-light">Understanding the strategic advantages of dry powdered spices and vegetables for global trade and industrial use.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white shadow-2xl rounded-sm overflow-hidden">
                <thead>
                  <tr className="bg-brand-earth text-white uppercase text-[10px] tracking-[0.2em] font-black">
                    <th className="p-6">Feature</th>
                    <th className="p-6">Raw Vegetable</th>
                    <th className="p-6">Dry Powdered</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="p-6 font-black text-brand-earth uppercase text-[10px]">Shelf Life</td>
                    <td className="p-6">7-14 Days</td>
                    <td className="p-6 text-brand-gold font-bold">12-24 Months</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 font-black text-brand-earth uppercase text-[10px]">Logistics</td>
                    <td className="p-6">Cold Chain Required</td>
                    <td className="p-6 text-brand-gold font-bold">Ambient Storage</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 font-black text-brand-earth uppercase text-[10px]">Volume</td>
                    <td className="p-6">High (Water Content)</td>
                    <td className="p-6 text-brand-gold font-bold">Concentrated (1:10)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 font-black text-brand-earth uppercase text-[10px]">Nutrients</td>
                    <td className="p-6">Fresh but degrades</td>
                    <td className="p-6 text-brand-gold font-bold">Locked via Dehydration</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-black text-brand-earth uppercase text-[10px]">Usage</td>
                    <td className="p-6">Manual Prep Needed</td>
                    <td className="p-6 text-brand-gold font-bold">Ready to Use</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-12">
              <h4 className="text-3xl font-serif text-brand-earth italic">Why Industry Prefers Powdered?</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Cost Efficient", desc: "Significant reduction in shipping costs due to weight reduction." },
                  { title: "Zero Waste", desc: "No peeling or cutting required. 100% of the product is utilized." },
                  { title: "Consistent Flavor", desc: "Standardized potency ensures uniform taste in large batches." },
                  { title: "Easy Storage", desc: "Requires 90% less warehouse space compared to raw produce." }
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1 h-full bg-brand-gold" />
                    <div>
                      <h5 className="text-[10px] font-black text-brand-earth uppercase tracking-widest mb-2">{benefit.title}</h5>
                      <p className="text-xs text-gray-500 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-32">
            <h4 className="text-center text-3xl font-serif text-brand-earth mb-16 italic">Versatile Uses of Dry Powdered Products</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: <Package className="w-8 h-8" />, title: "Food Processing", desc: "Essential for instant noodles, soups, and snack seasonings." },
                { icon: <ShieldCheck className="w-8 h-8" />, title: "Pharmaceuticals", desc: "Used in herbal supplements and traditional medicines." },
                { icon: <Star className="w-8 h-8" />, title: "Cosmetics", desc: "Natural colorants and active ingredients in skincare." },
                { icon: <Truck className="w-8 h-8" />, title: "Hospitality", desc: "Convenient for large-scale catering and restaurant chains." }
              ].map((use, i) => (
                <div key={i} className="bg-white p-10 border border-gray-100 hover:border-brand-gold transition-colors text-center">
                  <div className="text-brand-gold flex justify-center mb-6">{use.icon}</div>
                  <h5 className="text-sm font-black text-brand-earth uppercase tracking-widest mb-4">{use.title}</h5>
                  <p className="text-xs text-gray-500 leading-relaxed">{use.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights/Blog Section (WordPress Style) */}
      <section id="insights" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6">Market Intelligence</h2>
              <h3 className="text-6xl font-serif text-brand-earth tracking-tighter leading-tight">From our <span className="italic text-brand-gold">spice journal.</span></h3>
            </div>
            <button className="text-[10px] uppercase font-black tracking-[0.3em] text-brand-earth border-b-2 border-brand-gold pb-2 hover:text-brand-gold transition-colors">
              View All Insights
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {BLOG_POSTS.map((post, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden mb-8">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-earth/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-6 left-6 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-widest text-brand-earth">
                    {post.date.split(' ')[0]} {post.date.split(' ')[1]}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[10px] uppercase font-black tracking-widest text-brand-gold">
                    <span className="flex items-center gap-2"><User className="w-3 h-3" /> {post.author}</span>
                  </div>
                  <h4 className="text-2xl font-serif text-brand-earth group-hover:text-brand-gold transition-colors leading-tight">{post.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 font-light">{post.excerpt}</p>
                  <div className="pt-4">
                    <span className="inline-flex items-center gap-3 text-[10px] uppercase font-black tracking-[0.2em] text-brand-earth group-hover:translate-x-2 transition-transform">
                      Read Article <ArrowRight className="w-4 h-4 text-brand-gold" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-brand-earth text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="text-center md:text-left">
              <p className="text-[10px] uppercase tracking-[0.5em] font-black mb-2">Global Standards</p>
              <p className="text-2xl font-serif italic">Fully Certified for Export</p>
            </div>
            <div className="flex flex-wrap justify-center gap-16 items-center">
              {['FSSAI', 'APEDA', 'ISO 22000', 'SPICES BOARD', 'HACCP'].map((cert, i) => (
                <div key={i} className="text-2xl font-black tracking-tighter opacity-40 hover:opacity-100 transition-opacity cursor-default">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-32 bg-brand-earth text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/texture2/2000/2000')] opacity-5 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6">Testimonials</h2>
            <h3 className="text-5xl md:text-6xl font-serif tracking-tighter leading-tight">Voices of <span className="italic text-brand-gold">Trust.</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Ahmed Al-Farsi",
                role: "Wholesale Distributor, Dubai",
                text: "TM International has been our primary source for turmeric and coriander for 3 years. Their consistency in quality and timely delivery is unmatched in the industry.",
                rating: 5
              },
              {
                name: "Sarah Jenkins",
                role: "Procurement Manager, UK",
                text: "The aroma and purity of their blended masalas are exceptional. Our customers specifically ask for the spices sourced from Dharmapuri. Highly recommended for B2B partners.",
                rating: 5
              },
              {
                name: "Chen Wei",
                role: "Food Processing Unit, Singapore",
                text: "Finding reliable export-grade tomatoes and coconuts was a challenge until we found TM International. Their packaging and quality control are top-notch.",
                rating: 5
              }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 border border-white/10 p-12 rounded-sm relative group hover:bg-white/10 transition-all duration-500"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors" />
                <div className="flex gap-1 mb-8">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-lg font-light leading-relaxed mb-10 text-white/80 italic">"{review.text}"</p>
                <div>
                  <h5 className="text-lg font-black tracking-tight text-white mb-1">{review.name}</h5>
                  <p className="text-[10px] uppercase tracking-widest text-brand-gold font-black">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6">Assistance</h2>
            <h3 className="text-5xl font-serif text-brand-earth tracking-tight">Common <span className="italic text-brand-gold">Inquiries.</span></h3>
          </div>
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <details key={i} className="group bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden transition-all duration-500 open:shadow-xl">
                <summary className="flex justify-between items-center p-8 cursor-pointer list-none font-black text-brand-earth uppercase tracking-tight text-sm">
                  {faq.q}
                  <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-open:rotate-180 transition-transform">
                    <ChevronDown className="w-4 h-4 text-brand-gold" />
                  </div>
                </summary>
                <div className="px-8 pb-8 text-gray-500 leading-relaxed font-light">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote 2 */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <p className="text-4xl md:text-5xl font-serif italic text-brand-earth leading-tight mb-10">
              "For us, export is not just a business; it's a bridge of trust between the farmer and the global consumer."
            </p>
            <p className="text-[12px] uppercase tracking-[0.5em] font-black text-brand-gold">Dharmapuri to the World</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brand-earth rounded-sm overflow-hidden shadow-[0_50px_100px_-20px_rgba(43,33,24,0.3)] flex flex-col lg:flex-row">
            <div className="lg:w-5/12 p-12 md:p-20 text-white relative">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/seed/texture/1000/1000')] opacity-5 mix-blend-overlay" />
              <h2 className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px] mb-8">Get in Touch</h2>
              <h3 className="text-5xl font-serif mb-12 leading-tight">Let's discuss your <span className="italic text-brand-gold">requirements.</span></h3>
              
              <div className="space-y-12 relative z-10">
                <div className="flex gap-8 group">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-white/40 tracking-widest mb-2">Direct Line</p>
                    <p className="text-2xl font-serif">+91 9677402451</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-white/40 tracking-widest mb-2">Email Inquiry</p>
                    <p className="text-xl font-serif break-all">tminternationaltradeline@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-white/40 tracking-widest mb-2">Headquarters</p>
                    <p className="text-xl font-serif">Dharmapuri, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-7/12 bg-white p-12 md:p-20">
              <h4 className="text-3xl font-serif text-brand-earth mb-10">Send a Detailed <span className="italic text-brand-gold">Inquiry</span></h4>
              <form className="space-y-8" onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Your Name</label>
                    <input name="name" required type="text" className="w-full border-b-2 border-gray-100 py-4 focus:border-brand-gold outline-none transition-all font-serif text-lg" placeholder="Full Name" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Email Address</label>
                    <input name="email" required type="email" className="w-full border-b-2 border-gray-100 py-4 focus:border-brand-gold outline-none transition-all font-serif text-lg" placeholder="email@company.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Subject of Interest</label>
                  <input name="subject" required type="text" className="w-full border-b-2 border-gray-100 py-4 focus:border-brand-gold outline-none transition-all font-serif text-lg" placeholder="Bulk Export Inquiry" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Your Message</label>
                  <textarea name="message" required rows={4} className="w-full border-b-2 border-gray-100 py-4 focus:border-brand-gold outline-none transition-all resize-none font-serif text-lg" placeholder="Describe your wholesale requirements..."></textarea>
                </div>
                <button type="submit" disabled={isContactLoading} className="group relative w-full bg-brand-earth text-white py-6 rounded-sm font-black text-[10px] uppercase tracking-[0.4em] overflow-hidden transition-all hover:bg-brand-gold disabled:opacity-70">
                  <span className="relative z-10">
                    {isContactLoading ? "Sending Inquiry..." : formStatus === "success" ? "Inquiry Sent!" : "Dispatch Inquiry"}
                  </span>
                  <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
                {formStatus === "success" && <p className="text-green-600 text-xs text-center font-bold">Email sent successfully! We'll reach out soon.</p>}
                {formStatus === "error" && <p className="text-red-600 text-xs text-center font-bold">SMTP error. Redirecting to WhatsApp fallback...</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1512] text-white pt-32 pb-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-10">
              <img src="image.png" alt="TM International Tradeline" className="h-12 w-auto" referrerPolicy="no-referrer" />
              <div>
                <h1 className="text-2xl font-black tracking-tighter leading-none">TM INTERNATIONAL</h1>
                <p className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-black">Tradeline</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed mb-12 font-light text-lg">
              A legacy of excellence in global spice trade. We bring the rich heritage of Indian agriculture to the world's finest kitchens and manufacturing facilities.
            </p>
            <div className="flex gap-6">
              {[Globe, Mail, Phone].map((Icon, i) => (
                <div key={i} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all duration-500 cursor-pointer group">
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h5 className="font-black text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-10">Navigation</h5>
            <ul className="space-y-6 text-sm font-light text-gray-400">
              <li><a href="#home" className="hover:text-brand-gold transition-colors">The Beginning</a></li>
              <li><a href="#products" className="hover:text-brand-gold transition-colors">Our Catalog</a></li>
              <li><a href="#about" className="hover:text-brand-gold transition-colors">The Legacy</a></li>
              <li><a href="#insights" className="hover:text-brand-gold transition-colors">Spice Journal</a></li>
              <li><a href="#contact" className="hover:text-brand-gold transition-colors">Get in Touch</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="font-black text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-10">Specialties</h5>
            <ul className="space-y-6 text-sm font-light text-gray-400">
              <li><a href="#products" className="hover:text-brand-gold transition-colors">Pure Spices</a></li>
              <li><a href="#products" className="hover:text-brand-gold transition-colors">Blended Masalas</a></li>
              <li><a href="#products" className="hover:text-brand-gold transition-colors">Fresh Coconut</a></li>
              <li><a href="#products" className="hover:text-brand-gold transition-colors">Export Grade Tomato</a></li>
              <li><a href="#products" className="hover:text-brand-gold transition-colors">Bulk Wholesale</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h5 className="font-black text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-10">Newsletter</h5>
            <p className="text-gray-400 text-sm font-light mb-8">Subscribe to our market reports and harvest updates.</p>
            <form onSubmit={handleNewsletterSubmit} className="relative">
              <input 
                type="email" 
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 py-4 px-6 rounded-sm outline-none focus:border-brand-gold transition-colors text-sm" 
              />
              <button 
                type="submit"
                disabled={isNewsletterLoading}
                className="absolute right-2 top-2 bottom-2 bg-brand-gold px-4 rounded-sm hover:bg-white hover:text-brand-gold transition-all disabled:opacity-50"
              >
                {isNewsletterLoading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </button>
            </form>
            {newsletterStatus === "success" && (
              <p className="mt-4 text-green-500 text-[10px] font-black uppercase tracking-widest">Successfully subscribed!</p>
            )}
            {newsletterStatus === "error" && (
              <p className="mt-4 text-brand-gold text-[10px] font-black uppercase tracking-widest">Failed to subscribe. Please try again.</p>
            )}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-gray-500 font-black uppercase tracking-[0.3em]">
          <p>© 2026 TM International Tradeline. Crafted for Global Excellence.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </footer>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-32 right-8 z-[90] flex flex-col gap-4">
        <motion.a
          href="mailto:tminternationaltradeline@gmail.com"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          className="group relative flex items-center justify-center w-14 h-14 bg-white text-brand-earth border border-gray-100 rounded-full shadow-2xl transition-all hover:bg-brand-earth hover:text-white"
        >
          <Mail className="w-6 h-6" />
          <span className="absolute right-full mr-4 px-4 py-1.5 bg-brand-earth text-white text-[10px] uppercase font-black tracking-widest rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Email Us</span>
        </motion.a>

        <motion.a
          href="https://wa.me/919677402451"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl transition-all hover:bg-[#128C7E]"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-full mr-4 px-4 py-1.5 bg-[#25D366] text-white text-[10px] uppercase font-black tracking-widest rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">WhatsApp Us</span>
        </motion.a>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, x: 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, x: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[90] bg-brand-gold text-white p-4 rounded-full shadow-2xl hover:bg-brand-earth transition-all"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Quote Modal */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute inset-0 bg-brand-earth/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="bg-brand-earth p-6 md:p-10 text-white flex justify-between items-center sticky top-0 z-10">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif italic">Request a Quote</h3>
                  <p className="text-brand-gold text-[10px] md:text-xs uppercase font-black tracking-widest mt-2">Product: {selectedProduct}</p>
                </div>
                <button onClick={() => setIsQuoteModalOpen(false)} className="text-white/60 hover:text-white transition-colors">
                  <X className="w-6 h-6 md:w-8 md:h-8" />
                </button>
              </div>
              <div className="p-6 md:p-10">
                <form className="space-y-6" onSubmit={handleQuoteSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black text-gray-400">Full Name</label>
                      <input name="name" required type="text" className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-brand-gold text-sm md:text-base" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black text-gray-400">Email Address</label>
                      <input name="email" required type="email" className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-brand-gold text-sm md:text-base" placeholder="john@company.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black text-gray-400">Company Name</label>
                      <input name="company" required type="text" className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-brand-gold text-sm md:text-base" placeholder="Global Trade Ltd" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black text-gray-400">Estimated Quantity</label>
                      <input name="quantity" required type="text" className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-brand-gold text-sm md:text-base" placeholder="e.g. 5 Metric Tons" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-gray-400">Detailed Requirements</label>
                    <textarea name="requirements" rows={3} className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-brand-gold resize-none text-sm md:text-base" placeholder="Please specify packaging, certifications, or destination..."></textarea>
                  </div>
                  <button type="submit" disabled={isQuoteLoading} className="w-full bg-brand-gold text-white py-4 md:py-5 rounded-sm font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-brand-earth transition-all shadow-xl shadow-brand-gold/20 disabled:opacity-70">
                    {isQuoteLoading ? "Submitting..." : formStatus === "success" ? "Quote Request Sent!" : "Submit Quote Request"}
                  </button>
                  {formStatus === "success" && <p className="text-green-600 text-xs text-center font-bold mt-2">Request submitted successfully via SMTP.</p>}
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

