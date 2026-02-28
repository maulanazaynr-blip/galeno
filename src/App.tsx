/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Sword, 
  Scroll, 
  Map, 
  Settings, 
  Users, 
  TrendingUp, 
  Truck, 
  Activity, 
  Mail, 
  ChevronRight,
  Menu,
  X,
  Crown,
  Flame
} from 'lucide-react';

// --- Types ---
interface Realm {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

// --- Data ---
const REALMS: Realm[] = [
  {
    id: 'optimization',
    title: 'Optimization & Operations Research',
    description: 'Mastering mathematical modeling and algorithms to maximize efficiency and minimize operational waste.',
    icon: <TrendingUp className="w-8 h-8" />,
    details: [
      'Linear Programming & Modeling',
      'Integer Programming',
      'Metaheuristics',
      'Decision Analysis'
    ]
  },
  {
    id: 'ergonomics',
    title: 'Human Factors & Ergonomics',
    description: 'Designing human-centric systems and environments to enhance safety, comfort, and productivity.',
    icon: <Users className="w-8 h-8" />,
    details: [
      'Anthropometry',
      'Cognitive Ergonomics',
      'Work Environment Design',
      'Safety Engineering'
    ]
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain & Logistics',
    description: 'Optimizing the flow of goods and information across global supply chains to ensure timely delivery.',
    icon: <Truck className="w-8 h-8" />,
    details: [
      'Inventory Management',
      'Warehouse Optimization',
      'Distribution Networks',
      'Procurement Strategy'
    ]
  },
  {
    id: 'production',
    title: 'Manufacturing & Production',
    description: 'Transforming raw materials into high-value products through advanced manufacturing and process control.',
    icon: <Settings className="w-8 h-8" />,
    details: [
      'Production Planning & Control',
      'Lean Manufacturing',
      'Facility Layout',
      'Work Measurement'
    ]
  },
  {
    id: 'quality',
    title: 'Quality & Reliability Engineering',
    description: 'Implementing rigorous statistical methods and standards to ensure excellence and continuous improvement.',
    icon: <Shield className="w-8 h-8" />,
    details: [
      'Statistical Process Control',
      'Six Sigma Methodology',
      'Total Quality Management',
      'Reliability Engineering'
    ]
  }
];

const PROJECTS = [
  {
    title: "Supply Chain Network Optimization",
    subtitle: "Strategic Distribution & Logistics",
    description: "Redesigned distribution networks for a local manufacturing firm, reducing lead times by 20% using Dijkstra's algorithm and heuristic modeling.",
    year: "Year 3",
    image: "https://cdn.prod.website-files.com/63483ad423421bd16e7a7ae7/639c39c4bf582d138709af77_header.jpeg"
  },
  {
    title: "Lean Production System Implementation",
    subtitle: "Manufacturing Efficiency & Flow",
    description: "Applied Lean principles to an assembly line simulation, eliminating three major bottlenecks and increasing throughput by 15%.",
    year: "Year 2",
    image: "https://www.l2l.com/hubfs/_CAP7717.jpg"
  },
  {
    title: "Integrated Inventory Management System",
    subtitle: "Information Systems & Data Analytics",
    description: "Developed a comprehensive inventory tracking system for university laboratories, integrating SQL databases with a user-friendly interface.",
    year: "Year 3",
    image: "https://www.roamingtech.com.au/theme/roamingtechcomau/assets/public/image/news/WarehouseFZG1.jpg"
  }
];

// --- Components ---

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold gold-gradient mb-4 uppercase tracking-widest">
          {title}
        </h2>
        <div className="h-1 w-24 bg-got-gold mx-auto mb-4" />
        {subtitle && <p className="font-serif italic text-xl text-got-gold/70">{subtitle}</p>}
      </motion.div>
    </div>
  );
}

function RealmCard({ realm }: { realm: Realm }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-got-stone/50 border border-got-gold/30 p-8 rounded-sm relative overflow-hidden group hover:border-got-gold transition-colors duration-500"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
        {realm.icon}
      </div>
      <div className="text-got-gold mb-6">{realm.icon}</div>
      <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-got-gold transition-colors">
        {realm.title}
      </h3>
      <p className="font-serif text-got-gold/80 mb-6 italic">
        "{realm.description}"
      </p>
      <ul className="space-y-2">
        {realm.details.map((detail, i) => (
          <li key={i} className="flex items-center text-sm text-gray-400">
            <ChevronRight className="w-4 h-4 text-got-gold mr-2" />
            {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-got-black selection:bg-got-gold selection:text-got-black">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-got-black/95 border-b border-got-gold/20 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Crown className="text-got-gold w-8 h-8" />
            <span className="font-display font-bold text-2xl tracking-tighter gold-gradient">
              THE INDUSTRIAL HAND
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {['Core Expertise', 'Projects', 'Technical Arsenal', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="font-display text-sm uppercase tracking-widest text-got-gold/70 hover:text-got-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-got-gold" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-got-black flex flex-col items-center justify-center gap-8"
          >
            {['Core Expertise', 'Projects', 'Technical Arsenal', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setIsMenuOpen(false)}
                className="font-display text-3xl uppercase tracking-widest text-got-gold"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/got-castle/1920/1080?blur=5" 
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-got-black via-transparent to-got-black" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 border-2 border-got-gold rounded-full torch-glow">
                <Flame className="w-12 h-12 text-got-gold animate-pulse" />
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black mb-6 tracking-tighter leading-none">
              <span className="block text-white">HOUSE OF</span>
              <span className="block gold-gradient">INDUSTRIAL</span>
              <span className="block gold-gradient">ENGINEERING</span>
            </h1>
            <p className="text-xl md:text-2xl font-serif italic text-got-gold/80 mb-4 max-w-2xl mx-auto">
              "Precision in process. Excellence in execution."
            </p>
            <p className="font-display text-sm uppercase tracking-[0.4em] text-got-gold mb-10">
              Portfolio of Galeno
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#core-expertise" className="px-8 py-4 bg-got-gold text-got-black font-display font-bold uppercase tracking-widest hover:bg-white transition-colors">
                Explore Expertise
              </a>
              <a href="#contact" className="px-8 py-4 border border-got-gold text-got-gold font-display font-bold uppercase tracking-widest hover:bg-got-gold/10 transition-colors">
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-got-gold/50"
        >
          <div className="w-px h-16 bg-gradient-to-b from-got-gold to-transparent" />
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6 bg-got-stone/20">
        <div className="max-w-4xl mx-auto text-center">
          <Scroll className="w-12 h-12 text-got-gold mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl font-display text-white mb-8">The Engineer's Perspective</h2>
          <p className="text-xl font-serif leading-relaxed text-gray-400 italic">
            In the complex world of modern industry, we are the architects of efficiency. We don't just build products; we design the systems that create them. From global supply chain logistics to human-centered ergonomics, Industrial Engineering is the driving force behind operational excellence and sustainable growth.
          </p>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section id="core-expertise" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Core Expertise" 
            subtitle="Pillars of industrial engineering driving operational excellence" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REALMS.map((realm) => (
              <React.Fragment key={realm.id}>
                <RealmCard realm={realm} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-got-stone/30 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Professional Projects" 
            subtitle="Real-world implementation of Industrial Engineering principles in industrial systems" 
          />
          <div className="space-y-12">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="border border-got-gold/20 p-8 bg-got-black/50 rounded-lg shadow-xl">
                    <span className="text-got-gold font-sans text-xs font-bold tracking-widest mb-2 block uppercase opacity-60">{project.year}</span>
                    <h3 className="text-3xl font-display font-bold text-white mb-4">{project.title}</h3>
                    <h4 className="text-got-gold/70 font-sans font-medium text-sm mb-6 uppercase tracking-wider">{project.subtitle}</h4>
                    <p className="text-gray-400 leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-video bg-got-stone border border-got-gold/20 relative overflow-hidden group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 border border-got-gold rounded-full flex items-center justify-center">
                        <Map className="text-got-gold" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Arsenal Section */}
      <section id="technical-arsenal" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Technical Arsenal" 
            subtitle="Advanced tools and methodologies for operational excellence" 
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Python & R', level: 'Expert' },
              { name: 'SQL Databases', level: 'Advanced' },
              { name: 'AutoCAD', level: 'Proficient' },
              { name: 'Lingo/Lindo', level: 'Advanced' },
              { name: 'Arena Simulation', level: 'Expert' },
              { name: 'Minitab', level: 'Advanced' },
              { name: 'SAP/ERP', level: 'Intermediate' },
              { name: 'Microsoft Excel', level: 'Grandmaster' },
            ].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="text-center p-6 border border-got-gold/10 bg-got-stone/10 hover:border-got-gold/50 transition-all"
              >
                <h4 className="font-display text-white mb-2">{skill.name}</h4>
                <p className="text-xs uppercase tracking-widest text-got-gold/60">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-got-stone/20">
        <div className="max-w-3xl mx-auto">
          <div className="border border-got-gold/20 p-12 bg-got-black/80 rounded-lg shadow-2xl">
            <div className="text-center mb-12">
              <Mail className="w-12 h-12 text-got-gold mx-auto mb-6" />
              <h2 className="text-4xl font-display font-bold gold-gradient mb-4">GET IN TOUCH</h2>
              <p className="font-serif italic text-got-gold/70">Establish professional connections or request technical consultation</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-got-gold mb-2">Organization / Name</label>
                  <input type="text" className="w-full bg-got-stone/50 border border-got-gold/30 p-4 text-white focus:border-got-gold outline-none transition-colors rounded-sm" />
                </div>
                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-got-gold mb-2">Email Address</label>
                  <input type="email" className="w-full bg-got-stone/50 border border-got-gold/30 p-4 text-white focus:border-got-gold outline-none transition-colors rounded-sm" />
                </div>
              </div>
              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-got-gold mb-2">Message</label>
                <textarea rows={5} className="w-full bg-got-stone/50 border border-got-gold/30 p-4 text-white focus:border-got-gold outline-none transition-colors rounded-sm" />
              </div>
              <button className="w-full py-4 bg-got-gold text-got-black font-display font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-got-gold/10 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-6 mb-8">
            <Sword className="w-6 h-6 text-got-gold/30" />
            <Shield className="w-6 h-6 text-got-gold/30" />
            <Crown className="w-6 h-6 text-got-gold/30" />
          </div>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-got-gold/40">
            © 2026 HOUSE OF INDUSTRIAL ENGINEERING • BY GALENO • ALL RIGHTS RESERVED
          </p>
          <p className="font-serif italic text-sm text-got-gold/20 mt-4">
            "Efficiency through optimization. Excellence through design."
          </p>
        </div>
      </footer>
    </div>
  );
}
