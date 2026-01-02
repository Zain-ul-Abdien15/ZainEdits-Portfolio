import React, { useState, useEffect } from 'react';
import { Play, Users, Video, Mail, Phone, Instagram, Menu, X, Star, ChevronRight, Sparkles, Camera, Film, Zap, Award } from 'lucide-react';

export default function VideoPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(null);
  const [countersStarted, setCountersStarted] = useState(false);
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Trigger counters when stats section is in view
      const statsSection = document.getElementById('stats-section');
      if (statsSection && !countersStarted) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setCountersStarted(true);
          animateCounter(0, 150, setProjectsCount, 2000);
          animateCounter(0, 50, setClientsCount, 2000);
          animateCounter(0, 1.5, setExperienceCount, 2000, true);
        }
      }
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const animateCounter = (start, end, setter, duration, isDecimal = false) => {
      const startTime = Date.now();
      const step = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = start + (end - start) * easeOutQuart;
        setter(isDecimal ? current.toFixed(1) : Math.floor(current));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [countersStarted]);

  const projects = [
    {
      id: 1,
      title: 'Wedding Makeup Look',
      category: 'Brand Reels',
      client: 'Lush Look',
      color: 'from-pink-500 to-rose-500',
      videoUrl: 'https://drive.google.com/file/d/1EX3QOyUkqEA8yOSm28aJB-3oh4k09kcL/preview',
      type: 'embed'
    },
    {
      id: 2,
      title: 'Cloud Bedding FB Ad',
      category: 'Brand Reels',
      client: 'Cloud Bedding',
      color: 'from-blue-500 to-cyan-500',
      videoUrl: 'https://drive.google.com/file/d/1Lw6WbHqSwHTKjVsWapLK-slsZEhy6F4Q/preview',
      type: 'embed'
    },
    {
      id: 3,
      title: 'Creative Souls Marketing Ad',
      category: 'Brand Reels',
      client: 'Creative Souls',
      color: 'from-purple-500 to-pink-500',
      videoUrl: 'https://drive.google.com/file/d/1JXg3LndyZgKSTIzj6ZBANoiDNzvzvovM/preview',
      type: 'embed'
    },
    {
      id: 4,
      title: 'Traditional Vs Sustainable Aviation Feul',
      category: 'Brand Reels',
      client: 'Captain Ahmed From Emirates',
      color: 'from-orange-500 to-red-500',
      videoUrl: 'https://drive.google.com/file/d/10uncnGUq5TpNhgn5kdfUlE4yRlnkQSsU/preview',
      type: 'embed'
    },
    {
      id: 5,
      title: 'African Raw Nature',
      category: 'Brand Reels',
      client: 'Safari World',
      color: 'from-green-500 to-emerald-500',
      videoUrl: 'https://drive.google.com/file/d/1U1Gv_hJrfxgpb_tnf8yBMOgzv68P6WUJ/preview',
      type: 'embed'
    },
    {
      id: 6,
      title: 'Net Worth Levels in USA',
      category: 'Finance & Investment',
      client: 'Mr Phill',
      color: 'from-yellow-500 to-orange-500',
      videoUrl: 'https://www.youtube.com/embed/FGyiEYdeozE',
      type: 'youtube'
    },
    {
      id: 7,
      title: 'Egypt, Cultural Hub',
      category: 'Documentary',
      client: 'Ahmed Ali',
      color: 'from-blue-500 to-cyan-500',
      videoUrl: 'https://drive.google.com/file/d/1LnWtJ0TtvWv2Q55ULAbwaoZGxfWdd5UL/preview',
      type: 'embed'
    },
    {
      id: 9,
      title: 'TikTok Quiz Video',
      category: 'Social Media',
      client: 'Creative Souls',
      color: 'from-pink-500 to-red-500',
      videoUrl: 'https://www.tiktok.com/@quizup778/video/7528483894685961502',
      type: 'tiktok'
    },
    {
      id: 10,
      title: 'Best Protien Icecream',
      category: 'Fitness',
      client: 'Mr Joe',
      color: 'from-green-500 to-emerald-500',
      videoUrl: 'https://drive.google.com/file/d/1LxPZVam2dBPkljQvkEtQMCTN12GG8tK-/preview',
      type: 'embeDd'
    },
    {
     id: 11,
      title: 'Unique Bitcoin Case Study In Australian History',
      category: 'Talking Head',
      client: 'Mr Steve',
      color: 'from-indigo-500 to-purple-500',
      videoUrl: 'https://drive.google.com/file/d/15J2DUQr42m8uNfyCyZeytCDP80NVoNuF/preview',
      type: 'embeDd'
    },

    {
     id: 12,
      title: 'Where to invest in 2026 in Australia?',
      category: 'Talking Head',
      client: 'Mr Kumar',
      color: 'from-indigo-500 to-purple-500',
      videoUrl: 'https://drive.google.com/file/d/1TTPa6TO_7pNRqnfqzmjS83eN-hDi7hXU/preview',
      type: 'embeDd'
    },

    {
     id: 13,
      title: 'What is Vagus Nerve Stimulation?',
      category: 'Talking Head',
      client: 'Doctor Hunnah',
      color: 'from-indigo-500 to-purple-500',
      videoUrl: 'https://drive.google.com/file/d/1D7yOOtHh230opKYVDk7IJ4EWR4MIllv1/preview',
      type: 'embeDd'
    },

  ];

  const categories = ['All', 'Brand Reels', 'Documentary', 'Fitness', 'Finance & Investment', 'Social Media' , 'Talking Head'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const stats = [
    { icon: Video, label: 'Projects Completed', value: '150+', count: projectsCount, color: 'text-red-500' },
    { icon: Users, label: 'Happy Clients', value: '50+', count: clientsCount, color: 'text-blue-500' },
    { icon: Star, label: 'Years Experience', value: '1.5+', count: experienceCount, color: 'text-purple-500' }
  ];

  const floatingIcons = [
    { Icon: Camera, delay: 0, duration: 20 },
    { Icon: Film, delay: 5, duration: 25 },
    { Icon: Video, delay: 10, duration: 22 },
    { Icon: Sparkles, delay: 15, duration: 18 }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Custom Cursor with Shadow */}
      <div
        className="hidden md:block fixed w-8 h-8 rounded-full pointer-events-none z-50 transition-all duration-200 ease-out"
        style={{
          left: mousePosition.x + 'px',
          top: mousePosition.y + 'px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, rgba(239, 68, 68, 0.2) 50%, transparent 100%)',
          boxShadow: '0 0 20px rgba(239, 68, 68, 0.6), 0 0 40px rgba(239, 68, 68, 0.4), 0 0 60px rgba(239, 68, 68, 0.2)',
        }}
      >
        <div className="w-2 h-2 bg-red-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Floating Background Icons */}
      {floatingIcons.map(({ Icon, delay, duration }, i) => (
        <div
          key={i}
          className="fixed opacity-5 pointer-events-none hidden lg:block"
          style={{
            left: (20 + i * 20) + '%',
            top: '50%',
            animation: `float ${duration}s ease-in-out infinite`,
            animationDelay: `${delay}s`
          }}
        >
          <Icon className="w-32 h-32" />
        </div>
      ))}

      {/* Additional Animated Icons for Hero Section */}
      <div className="fixed top-1/4 left-1/4 opacity-10 pointer-events-none hidden lg:block animate-spin-slow">
        <Sparkles className="w-24 h-24 text-yellow-400" />
      </div>
      <div className="fixed top-1/3 right-1/4 opacity-10 pointer-events-none hidden lg:block animate-pulse">
        <Star className="w-20 h-20 text-purple-400" />
      </div>
      <div className="fixed bottom-1/4 left-1/3 opacity-10 pointer-events-none hidden lg:block" style={{ animation: 'float 15s ease-in-out infinite' }}>
        <Camera className="w-28 h-28 text-red-400" />
      </div>
      <div className="fixed top-1/2 right-1/3 opacity-10 pointer-events-none hidden lg:block" style={{ animation: 'float 18s ease-in-out infinite', animationDelay: '3s' }}>
        <Film className="w-26 h-26 text-blue-400" />
      </div>
      <div className="fixed bottom-1/3 right-1/4 opacity-10 pointer-events-none hidden lg:block animate-pulse" style={{ animationDelay: '2s' }}>
        <Play className="w-16 h-16 text-pink-400" />
      </div>
      <div className="fixed top-2/3 left-1/4 opacity-10 pointer-events-none hidden lg:block animate-spin-slow" style={{ animationDelay: '4s' }}>
        <Zap className="w-18 h-18 text-cyan-400" />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-100px) rotate(180deg); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px currentColor, 0 0 10px currentColor; }
          50% { box-shadow: 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor; }
        }
        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 10px currentColor, 0 0 20px currentColor; }
          50% { text-shadow: 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor; }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInRotate {
          from { opacity: 0; transform: translateY(30px) rotate(-5deg); }
          to { opacity: 1; transform: translateY(0) rotate(0deg); }
        }
        @keyframes float-up {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-20px); opacity: 0; }
        }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out forwards; }
        .animate-slide-in-up { animation: slideInUp 0.6s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.6s ease-out forwards; }
        .animate-pulse { animation: pulse 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        .animate-shimmer { 
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        .animate-bounce-slow { animation: bounce 3s ease-in-out infinite; }
        .animate-wiggle { animation: wiggle 1s ease-in-out; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-text-glow { animation: textGlow 2s ease-in-out infinite; }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradientShift 5s ease infinite;
        }
        .animate-fade-in-scale { animation: fadeInScale 0.8s ease-out forwards; }
        .animate-slide-in-rotate { animation: slideInRotate 0.6s ease-out forwards; }
        
        * {
          scroll-behavior: smooth;
        }
        
        .group:hover .group-hover\:animate-wiggle {
          animation: wiggle 0.5s ease-in-out;
        }
        
        .hover-lift {
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
        }
        
        .text-shadow-glow {
          text-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
        }
        
        .button-3d {
          position: relative;
          transform-style: preserve-3d;
        }
        .button-3d:hover {
          transform: translateY(-2px);
        }
        .button-3d::before {
          content: '';
          position: absolute;
          inset: 0;
          background: inherit;
          border-radius: inherit;
          transform: translateZ(-10px);
          filter: brightness(0.8);
        }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl z-50 border-b border-gray-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 animate-slide-in-left">
              <div className="relative">
                <Video className="w-10 h-10 text-red-500 animate-pulse" />
                <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Zain Edits
              </span>
            </div>
            
            <div className="hidden md:flex gap-8 animate-slide-in-right">
              <a href="#home" className="relative group transition-all duration-300 hover:text-red-500">
                <span className="relative z-10">Home</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#portfolio" className="relative group transition-all duration-300 hover:text-red-500">
                <span className="relative z-10">Portfolio</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="relative group transition-all duration-300 hover:text-red-500">
                <span className="relative z-10">About</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="relative group transition-all duration-300 hover:text-red-500">
                <span className="relative z-10">Contact</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            <button 
              className="md:hidden transform transition-all duration-300 hover:scale-110 hover:rotate-180"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800 animate-slide-in-up">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-lg hover:text-red-500 transition-colors" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#portfolio" className="block text-lg hover:text-red-500 transition-colors" onClick={() => setMenuOpen(false)}>Portfolio</a>
              <a href="#about" className="block text-lg hover:text-red-500 transition-colors" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#contact" className="block text-lg hover:text-red-500 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-red-500/20 border border-red-500/50 rounded-full text-red-400 animate-slide-in-up backdrop-blur-sm">
            <Zap className="w-4 h-4 animate-pulse" />
            <span className="font-semibold">Professional Video Editor</span>
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold mb-8 animate-scale-in">
            <span className="inline-block bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-transparent animate-gradient-shift text-shadow-glow">
              Crafting Visual
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-shift text-shadow-glow" style={{ animationDelay: '0.2s' }}>
              Stories
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in">
            Transforming raw footage into <span className="text-red-500 font-semibold">cinematic masterpieces</span>. 
            Specializing in brand reels, documentaries, fitness, finance, and social media content.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center animate-slide-in-up">
            <a href="#portfolio" className="group relative px-10 py-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full font-bold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50 overflow-hidden animate-shimmer button-3d hover-lift">
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 animate-shimmer"></span>
              <span className="relative z-10 flex items-center gap-2">
                View Portfolio <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-all duration-300 group-hover:animate-bounce-slow" />
              </span>
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow"></span>
            </a>
            <a href="#contact" className="group px-10 py-4 border-2 border-gray-700 hover:border-red-500 rounded-full font-bold text-lg transition-all duration-500 hover:scale-110 hover:bg-red-500/10 backdrop-blur-sm relative overflow-hidden button-3d hover-lift">
              <span className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 group-hover:animate-shimmer"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700"></span>
              <span className="relative z-10">Get in Touch</span>
            </a>
          </div>

          <div className="absolute top-20 left-10 animate-spin-slow hidden lg:block">
            <Camera className="w-16 h-16 text-red-500/30" />
          </div>
          <div className="absolute bottom-20 right-10 animate-spin-slow hidden lg:block">
            <Film className="w-20 h-20 text-purple-500/30" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl border border-gray-700 hover:border-red-500/50 transition-all duration-700 hover:scale-110 hover:-translate-y-3 backdrop-blur-sm animate-slide-in-up cursor-pointer overflow-hidden hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-purple-500/0 group-hover:from-red-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-700"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer"></div>
                <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4 group-hover:scale-125 transition-transform duration-500 group-hover:animate-bounce-slow`} />
                <div className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent relative group-hover:scale-110 transition-transform duration-500">
                  {countersStarted ? (
                    <>
                      {index === 2 ? stat.count : Math.floor(stat.count)}+
                    </>
                  ) : '0+'}
                </div>
                <div className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-shift">
              Featured Work
            </h2>
            <p className="text-xl text-gray-400 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>A showcase of my best projects</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-16 animate-slide-in-up">
            {categories.map((category, idx) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 md:px-8 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 button-3d hover-lift relative overflow-hidden ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/50 scale-110 animate-shimmer'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700 border border-gray-700 hover:border-red-500/50'
                }`}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <span className="relative z-10">{category}</span>
                {selectedCategory === category && (
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 opacity-50 animate-pulse"></span>
                )}
                <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedVideo(project)}
                className="group relative bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500/50 transition-all duration-700 hover:scale-105 hover:-translate-y-3 backdrop-blur-sm animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`}></div>
                
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-2xl`}>
                      <Play className="w-12 h-12 ml-2 text-white transition-all duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/50"></div>
                  
                  {hoveredProject === project.id && (
                    <>
                      <Sparkles className="absolute top-10 left-10 w-8 h-8 text-yellow-400 animate-pulse animate-bounce-slow" />
                      <Sparkles className="absolute bottom-10 right-10 w-6 h-6 text-pink-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <Film className="absolute top-10 right-10 w-8 h-8 text-blue-400 animate-pulse animate-spin-slow" />
                      <Camera className="absolute bottom-10 left-10 w-6 h-6 text-green-400 animate-pulse animate-bounce-slow" style={{ animationDelay: '0.4s' }} />
                    </>
                  )}
                </div>
                
                <div className="p-6 relative">
                  <div className={`text-sm font-semibold mb-2 bg-gradient-to-r ${project.color} bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105`}>
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-all duration-500 group-hover:translate-x-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm transition-all duration-300 group-hover:text-gray-300">Client: {project.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-red-500 hover:bg-red-600 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90 z-50"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div 
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden animate-scale-in shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg">
              <h3 className="text-white font-bold text-lg">{selectedVideo.title}</h3>
              <p className="text-gray-400 text-sm">{selectedVideo.client}</p>
            </div>
            
            {selectedVideo.type === 'tiktok' ? (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                <div className="text-center">
                  <p className="text-white text-xl mb-4">TikTok videos must be viewed on TikTok</p>
                  <a 
                    href={selectedVideo.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full font-bold text-white hover:scale-110 transition-all duration-300"
                  >
                    Open in TikTok <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ) : (
              <iframe
                src={selectedVideo.videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent animate-slide-in-up animate-gradient-shift">
            About Me
          </h2>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed animate-fade-in">
            I'm a passionate video editor with over 1.5 years of experience in creating compelling visual narratives. 
            My journey began with a dream to tell stories that matter through powerful video content.
          </p>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed animate-fade-in">
            I specialize in Adobe Premiere Pro, After Effects, Filmora, and CapCut. 
            Whether it's a brand reel, documentary, fitness video, or social media content, I bring creativity and technical expertise to every project.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:scale-105 animate-scale-in hover-lift button-3d group">
              <Award className="w-8 h-8 text-red-500 flex-shrink-0 group-hover:animate-bounce-slow" />
              <span className="text-gray-300 font-medium text-center group-hover:text-white transition-colors duration-300">Certified Video Editor</span>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:scale-105 animate-scale-in hover-lift button-3d group" style={{ animationDelay: '0.1s' }}>
              <Sparkles className="w-8 h-8 text-red-500 flex-shrink-0 group-hover:animate-spin-slow" />
              <span className="text-gray-300 font-medium text-center group-hover:text-white transition-colors duration-300">Color Grading Expert</span>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:scale-105 animate-scale-in hover-lift button-3d group" style={{ animationDelay: '0.2s' }}>
              <Zap className="w-8 h-8 text-red-500 flex-shrink-0 group-hover:animate-pulse" />
              <span className="text-gray-300 font-medium text-center group-hover:text-white transition-colors duration-300">Motion Graphics Designer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-slide-in-up animate-gradient-shift">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 mb-16 animate-fade-in">
            Have a project in mind? Let's bring your vision to life!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <a href="mailto:zsyed8117@gmail.com" className="group p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-700 hover:scale-110 hover:-translate-y-3 backdrop-blur-sm animate-scale-in cursor-pointer hover-lift button-3d relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-red-500/20 transition-all duration-700"></div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center group-hover:scale-125 transition-all duration-500 group-hover:rotate-12 group-hover:shadow-2xl group-hover:shadow-red-500/50 animate-glow">
                <Mail className="w-8 h-8 text-white group-hover:animate-bounce-slow" />
              </div>
              <div className="font-bold text-lg mb-2 group-hover:text-red-400 transition-colors duration-300 relative z-10">Email</div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                zsyed8117@gmail.com
              </div>
            </a>
            
            <a href="tel:+923058947929" className="group p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-700 hover:scale-110 hover:-translate-y-3 backdrop-blur-sm animate-scale-in cursor-pointer hover-lift button-3d relative overflow-hidden" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-blue-500/20 transition-all duration-700"></div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-125 transition-all duration-500 group-hover:rotate-12 group-hover:shadow-2xl group-hover:shadow-blue-500/50 animate-glow">
                <Phone className="w-8 h-8 text-white group-hover:animate-wiggle" />
              </div>
              <div className="font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors duration-300 relative z-10">Phone</div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                +92 305 8947929
              </div>
            </a>
            
            <a href="https://www.instagram.com/zain26582?igsh=M3JrcTZ5MDRpYTBh" target="_blank" rel="noopener noreferrer" className="group p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-700 hover:scale-110 hover:-translate-y-3 backdrop-blur-sm animate-scale-in cursor-pointer hover-lift button-3d relative overflow-hidden" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-purple-500/20 transition-all duration-700"></div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-125 transition-all duration-500 group-hover:rotate-12 group-hover:shadow-2xl group-hover:shadow-purple-500/50 animate-glow">
                <Instagram className="w-8 h-8 text-white group-hover:animate-bounce-slow" />
              </div>
              <div className="font-bold text-lg mb-2 group-hover:text-purple-400 transition-colors duration-300 relative z-10">Instagram</div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                @zain26582
              </div>
            </a>
          </div>

          <div className="relative p-12 bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 border-2 border-red-500/30 rounded-3xl backdrop-blur-sm animate-scale-in overflow-hidden group hover:scale-105 transition-all duration-700 cursor-pointer button-3d hover-lift">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-purple-500/5 animate-pulse"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-5 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000"></div>
            <h3 className="text-3xl font-bold mb-3 relative z-10 group-hover:scale-105 transition-transform duration-500 animate-text-glow">Ready to start your project?</h3>
            <p className="text-gray-400 mb-8 relative z-10 group-hover:text-gray-300 transition-colors duration-300">Book a free consultation call today!</p>
            <a href="https://wa.me/923058947929" target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center gap-3 px-12 py-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full font-bold text-lg transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50 relative z-10 animate-shimmer button-3d">
              <span className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 rounded-full transition-opacity duration-500"></span>
              <span className="relative z-10">Schedule a Call</span>
              <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-all duration-500 group-hover/btn:animate-bounce-slow relative z-10" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Video className="w-6 h-6 text-red-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
              Zain Edits
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Transforming visions into cinematic reality
          </p>
          <p className="text-gray-500 text-xs">
            &copy; 2024 Zain Edits. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
