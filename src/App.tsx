/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ShoppingBag, Search, User, Menu, X, ArrowRight, Instagram, Twitter, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const PRODUCTS = [
  {
    id: 1,
    name: 'Serpent Noir Hoodie',
    price: '$85.00',
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    tag: 'Premium'
  },
  {
    id: 2,
    name: 'Eternal Rose Tee',
    price: '$45.00',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800',
    tag: 'Best Seller'
  },
  {
    id: 3,
    name: 'Umbra Totem Bag',
    price: '$35.00',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
    tag: 'New'
  },
  {
    id: 4,
    name: 'Darkness Within Cap',
    price: '$30.00',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800',
    tag: 'Limited'
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/10 ${isScrolled ? 'premium-blur py-6' : 'py-10'}`}>
      <div className="container mx-auto px-12 flex justify-between items-center">
        <div className="flex-1 lg:flex hidden items-center space-x-12">
          <div className="font-bold tracking-tighter uppercase italic text-xl">U M B R A</div>
          <div className="flex space-x-8 text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">
            <a href="#" className="hover:opacity-100 transition-opacity">Collections</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Lookbook</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Philosophy</a>
          </div>
        </div>

        <div className="lg:hidden block flex-shrink-0">
          <h1 className="font-bold tracking-tighter uppercase italic text-xl">U M B R A</h1>
        </div>

        <div className="flex-1 flex justify-end items-center space-x-8">
          <button className="lg:block hidden text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">Search</button>
          <button className="relative group">
            <div className="text-[10px] uppercase tracking-widest border border-white/20 px-4 py-2 group-hover:bg-white group-hover:text-black transition-all">Cart [2]</div>
          </button>
          <button className="lg:hidden block" onClick={() => setMobileMenuOpen(true)}><Menu size={20} strokeWidth={1.5} /></button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-[60] p-8 flex flex-col"
          >
            <div className="flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col space-y-8 mt-12">
              <a href="#" className="font-serif text-5xl lowercase">Catalog</a>
              <a href="#" className="font-serif text-5xl lowercase">Archive</a>
              <a href="#" className="font-serif text-5xl lowercase">Collections</a>
              <a href="#" className="font-serif text-5xl lowercase">About</a>
            </div>
            <div className="mt-auto pt-8 border-t border-white/10 flex justify-between items-center text-xs uppercase tracking-widest opacity-50">
              <span>©2024 House of Umbra</span>
              <div className="flex space-x-4">
                <Instagram size={18} />
                <Twitter size={18} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="container mx-auto px-12 grid grid-cols-12 gap-8 z-10">
        {/* Editorial Text Block */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <span className="w-12 h-[1px] bg-white/20"></span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-bone/40 font-bold">Volume 02 // Issue 01</span>
            </div>
            
            <h2 className="text-[14vw] lg:text-[10vw] leading-[0.8] font-serif tracking-tighter mb-12">
              BEYOND <br />
              <span className="italic font-light text-stroke ml-[10%]">THE VOID.</span>
            </h2>

            <div className="flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
              <p className="text-[11px] text-bone/50 leading-relaxed max-w-[280px] uppercase tracking-[0.2em] font-light">
                An exploration of minimalist silhouettes and architectural shadow. Engineered for the contemporary explorer.
              </p>
              
              <div className="flex space-x-6">
                <button className="brutalist-border px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all">
                  Shop Drop
                </button>
                <button className="flex items-center space-x-3 group py-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-white/20 group-hover:border-white transition-all pb-1">Archive</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Asymmetric Image Block */}
        <div className="col-span-12 lg:col-span-5 relative mt-12 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 brutalist-border p-4 bg-onyx/20 backdrop-blur-sm"
          >
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200" 
              alt="Editorial" 
              className="w-full aspect-[4/5] object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute top-0 right-0 bg-bone text-noir px-4 py-2 text-[10px] font-bold uppercase tracking-widest translate-x-4 -translate-y-4 shadow-xl">
              N° 24.01
            </div>
          </motion.div>
          
          <div className="absolute -bottom-10 -left-10 text-[120px] font-serif text-white/5 select-none pointer-events-none italic">
            UMBRA
          </div>
        </div>
      </div>

      {/* Side Label */}
      <div className="absolute right-12 bottom-12 hidden lg:flex items-center space-x-8 -rotate-90 origin-right">
        <span className="text-[9px] uppercase tracking-[0.5em] text-bone/20 font-bold whitespace-nowrap">HOUSE OF UMBRA © 2024</span>
        <div className="w-48 h-[1px] bg-white/10"></div>
      </div>

      <motion.div style={{ opacity }} className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,20,1)_0%,rgba(5,5,5,1)_100%)] -z-20" />
    </section>
  );
};

const ProductCard = ({ product }: { product: typeof PRODUCTS[0] }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative brutalist-border p-3 bg-onyx/40 backdrop-blur-sm"
    >
      <div className="relative aspect-[3/4] overflow-hidden mb-5 bg-noir grayscale group-hover:grayscale-0 transition-all duration-700">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Technical Overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-4 pointer-events-none">
          <div className="flex justify-between items-start">
            <span className="text-[8px] tracking-[0.2em] font-mono text-white/40 uppercase bg-black/80 px-2 py-1">SPEC_0{product.id}</span>
            <div className="w-2 h-2 bg-white rounded-full' animate-pulse" />
          </div>
          <div className="text-[10px] space-y-1">
             <div className="flex justify-between border-b border-white/10 pb-1">
               <span className="text-white/40 uppercase tracking-tighter">Composition</span>
               <span className="text-white font-medium italic">100% Cotton</span>
             </div>
             <div className="flex justify-between">
               <span className="text-white/40 uppercase tracking-tighter">Weight</span>
               <span className="text-white font-medium italic text-right leading-none group-hover:block transition-all delay-100">450 GSM</span>
             </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="font-serif text-lg leading-tight tracking-tight uppercase group-hover:italic transition-all duration-300">{product.name}</h3>
          <span className="text-[10px] font-mono text-white/40 mt-1">[{product.tag}]</span>
        </div>
        
        <div className="flex justify-between items-center pt-2 border-t border-white/5 opacity-60">
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold">{product.category}</span>
          <span className="text-[10px] tracking-widest font-light">{product.price}</span>
        </div>
        
        <button className="w-full py-3 mt-2 bg-white text-noir text-[9px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-lg">
          Add to Archive
        </button>
      </div>
    </motion.div>
  );
};

const FeaturedSection = () => {
  return (
    <section className="py-32 bg-noir">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 space-y-6 lg:space-y-0">
          <div>
            <h2 className="text-4xl lg:text-6xl font-serif tracking-tighter mb-4">Core Essentials</h2>
            <p className="text-bone/40 max-w-md font-light text-sm uppercase tracking-widest leading-relaxed">
              Timeless minimalist silhouettes designed for the contemporary seeker.
            </p>
          </div>
          <a href="#" className="flex items-center space-x-2 text-xs uppercase tracking-widest hover:opacity-60 transition-opacity">
            <span>View All</span>
            <ChevronRight size={14} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-32 border-t border-white/5 relative overflow-hidden bg-noir">
      <div className="container mx-auto px-12 text-center max-w-3xl">
        <h2 className="text-4xl lg:text-6xl font-serif tracking-tighter mb-8 italic font-light">Shadow Archive.</h2>
        <p className="text-bone/40 font-light mb-12 text-[10px] uppercase tracking-[0.4em]">
          Subscribe for early access and limited archive drops.
        </p>
        <form className="relative max-w-md mx-auto group">
          <input 
            type="email" 
            placeholder="EMAIL ADDRESS" 
            className="w-full bg-transparent border-b border-white/20 py-4 px-2 text-[10px] tracking-[0.3em] focus:outline-none focus:border-white transition-colors uppercase font-medium"
          />
          <button className="absolute right-0 bottom-4 opacity-40 group-focus-within:opacity-100 transition-opacity">
            <ArrowRight size={18} strokeWidth={1} />
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-noir">
      <div className="container mx-auto px-12 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-12 lg:space-y-0">
          <div className="flex flex-wrap gap-x-24 gap-y-8">
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.4em] text-bone/40 mb-3 font-bold">Connect</span>
              <div className="flex space-x-6 text-[10px] tracking-widest uppercase">
                <a href="#" className="hover:opacity-40 transition-opacity font-medium">Instagram</a>
                <span className="opacity-20">/</span>
                <a href="#" className="hover:opacity-40 transition-opacity font-medium">Twitter</a>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.4em] text-bone/40 mb-3 font-bold">Company</span>
              <div className="flex space-x-6 text-[10px] tracking-widest uppercase">
                <a href="#" className="hover:opacity-40 transition-opacity font-medium">Archive</a>
                <span className="opacity-20">/</span>
                <a href="#" className="hover:opacity-40 transition-opacity font-medium">Privacy</a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-start lg:items-end lg:text-right">
            <span className="text-[9px] uppercase tracking-[0.4em] text-bone/40 mb-3 block font-bold italic">Noir Philosophy.</span>
            <span className="text-[10px] tracking-widest opacity-30 uppercase font-medium">© 2024 UMBRA. ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-noir overflow-x-hidden selection:bg-bone selection:text-noir">
      <Navbar />
      <main>
        <Hero />
        
        {/* About/Trust Section */}
        <section className="py-32 bg-noir">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=800" 
                alt="Detail" 
                className="w-full aspect-[4/5] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-graphite p-8 lg:block hidden">
                <p className="text-xs uppercase tracking-[0.2em] leading-loose opacity-60">
                  "Light and shadow are the same thing. One is just more honest about its intentions."
                </p>
                <p className="mt-4 font-serif italic">— House Philosophy</p>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="space-y-8"
            >
              <span className="text-xs uppercase tracking-widest opacity-40">The Craft</span>
              <h2 className="text-4xl lg:text-6xl font-serif tracking-tighter leading-tight">
                Designed for the <br /> <span className="italic">Eternal Soul</span>
              </h2>
              <p className="text-bone/50 leading-relaxed font-light text-sm uppercase tracking-widest max-w-md">
                Every piece is a meditation on minimalism. We source only premium fabrics to ensure that our dark aesthetic feels as good as it looks. Print on demand means zero waste and maximum focus on artistry.
              </p>
              <div className="pt-4">
                <button className="flex items-center space-x-4 group">
                  <span className="text-xs uppercase tracking-widest border-b border-bone/20 pb-1 group-hover:border-bone transition-all">Read our Story</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <FeaturedSection />
        
        {/* USP Section */}
        <section className="py-24 bg-noir border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full mb-2">
                  <span className="font-serif italic text-sm">01</span>
                </div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em]">Curation</h3>
                <p className="text-[10px] uppercase tracking-widest opacity-40 leading-relaxed max-w-[200px]">Only the most essential designs make it into our archive.</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full mb-2">
                  <span className="font-serif italic text-sm">02</span>
                </div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em]">Quality</h3>
                <p className="text-[10px] uppercase tracking-widest opacity-40 leading-relaxed max-w-[200px]">Premium threads and advanced printing techniques as standard.</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full mb-2">
                  <span className="font-serif italic text-sm">03</span>
                </div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em]">Conscience</h3>
                <p className="text-[10px] uppercase tracking-widest opacity-40 leading-relaxed max-w-[200px]">On-demand manufacturing reduces fashion waste significantly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Collection Grid */}
        <section className="py-32 bg-onyx">
           <div className="container mx-auto px-12">
              <div className="editorial-grid h-auto lg:h-[900px] gap-6">
                <motion.div 
                  whileHover={{ scale: 0.99 }}
                  className="col-span-12 lg:col-span-8 relative overflow-hidden group brutalist-border"
                >
                  <img src="https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-1000" alt="Collection" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 p-16 flex flex-col justify-end">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-white/60">COLLECTION_01</span>
                      <div className="w-8 h-[1px] bg-white/20"></div>
                    </div>
                    <h3 className="text-6xl lg:text-8xl font-serif tracking-tighter mb-8 italic">The Occult <br /> Archive</h3>
                    <div className="flex space-x-8">
                       <button className="brutalist-border px-10 py-4 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">Explore Entry</button>
                       <div className="hidden md:flex flex-col justify-center">
                          <span className="text-[9px] uppercase tracking-[0.2em] opacity-40">Limited Run // 100 Pieces Only</span>
                       </div>
                    </div>
                  </div>
                </motion.div>
                
                <div className="col-span-12 lg:col-span-4 grid grid-rows-2 gap-6">
                  <motion.div whileHover={{ scale: 0.99 }} className="relative overflow-hidden group brutalist-border bg-noir">
                    <img src="https://images.unsplash.com/photo-1554568212-3c1696996a24?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale brightness-[0.3] group-hover:scale-105 transition-transform duration-1000" alt="Collection" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 p-10 flex flex-col justify-between">
                       <div className="text-[9px] uppercase tracking-[0.4em] opacity-40">Technical Apparel</div>
                       <div>
                        <h3 className="text-3xl font-serif tracking-tight mb-4 lowercase">minimalist basics</h3>
                        <ChevronRight size={32} strokeWidth={1} className="group-hover:translate-x-2 transition-transform opacity-60" />
                       </div>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 0.99 }} className="relative overflow-hidden group brutalist-border bg-noir">
                    <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale brightness-[0.3] group-hover:scale-105 transition-transform duration-1000" alt="Collection" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 p-10 flex flex-col justify-between">
                       <div className="text-[9px] uppercase tracking-[0.4em] opacity-40">Artifacts</div>
                       <div>
                        <h3 className="text-3xl font-serif tracking-tight mb-4 lowercase">haus objects</h3>
                        <ChevronRight size={32} strokeWidth={1} className="group-hover:translate-x-2 transition-transform opacity-60" />
                       </div>
                    </div>
                  </motion.div>
                </div>
              </div>
           </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
