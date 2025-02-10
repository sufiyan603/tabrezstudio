'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Search, Code, Palette, Megaphone, Globe, ShoppingCart, BarChart, MessageSquare, ChevronRight, Smartphone, Rocket, Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Web Design & Development',
      description: 'Custom websites that convert visitors into customers'
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications'
    },
    {
      icon: <Megaphone className="h-6 w-6" />,
      title: 'Digital Marketing',
      description: 'SEO, social media, and content marketing strategies'
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: 'E-commerce Solutions',
      description: 'Online stores and marketplace integration'
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Business Analytics',
      description: 'Data-driven insights and reporting dashboards'
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: 'Brand Strategy',
      description: 'Identity design and brand development'
    }
  ];

  const projects = [
    { title: '', category: '', image: './assets/review1.png' },
    { title: '', category: '', image: './assets/review2.png' },
    { title: '', category: '', image: './assets/review3.png' },
    { title: '', category: '', image: './assets/review4.png' },
    { title: '', category: '', image: './assets/review5.png' },
    { title: '', category: '', image: './assets/review6.png' },
  ];

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return projects;

    const query = searchQuery.toLowerCase();
    return projects.filter(project =>
      project.title.toLowerCase().includes(query) ||
      project.category.toLowerCase().includes(query)
    );
  }, [projects, searchQuery]);

  const clients = [
    { name: 'TechCorp', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200' },
    { name: 'Innovate Inc', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200' },
    { name: 'Future Systems', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200' },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="container mx-auto px-0 mb-0 pb-0 py-14 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 1,
      repeatType: "loop",
      ease: "easeInOut",
    }}
    className="relative text-center"
  >
    {/* Background Image */}
    <div className="relative w-full max-w-full mx-auto">
      <img
        src="/assets/back.5.jpg"
        alt="Business Background"
        className="w-full h-full sm:h-72 md:h-80 object-cover rounded-lg shadow-lg"
      />
      {/* Overlay with Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 dark:bg-black/60 p-4 sm:p-6 rounded-lg">
        
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-yellow-500 mb-0 pb-0"
        >
          Get Your Business On Top
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="text-base sm:text-lg md:text-2xl text-white max-w-2xl mx-auto mb-8"
        >
          We create innovative digital solutions that help businesses grow and succeed in the modern world.
        </motion.p>
      </div>
    </div>
  </motion.div>
</section>


      {/* Search Section */}
      {/* <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects..."
              className="pl-10 h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-cyan-500">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-card/80 dark:bg-card/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-border/50 text-current hover:text-blue-500 animate-fade-up"
            >
              <div className="animate-fade-up bg-primary/10 dark:bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="animate-fade-up text-xl font-semibold mb-2">{service.title}</h3>
              <p className="animate-fade-up text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-cyan-500">
          Our Testimonials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg flex justify-center bg-white/10 backdrop-blur-md p-4 border border-white/20"
              >
                {/* Image Wrapper with Full Width but Limited Max Width */}
                <div className="w-full max-w-[80%] sm:max-w-[75%] md:max-w-[70%] lg:max-w-[65%] xl:max-w-[60%]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-white text-lg sm:text-xl font-semibold">{project.title}</h3>
                  <p className="text-white/80">{project.category}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-1 sm:col-span-2 md:col-span-3 text-center py-8">
              <p className="text-muted-foreground">No projects found matching your search.</p>
            </div>
          )}
        </div>
      </section>







      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-300 text-white">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-cyan-500">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-card/80 dark:bg-card/40 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-border/50 ">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-200">Name</label>
                  <Input type="text" placeholder="Your name" className="focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent text-white border border-white/40 rounded-lg p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-200">Email</label>
                  <Input type="email" placeholder="your@email.com" className="focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent text-white border border-white/40 rounded-lg p-2" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-200">Message</label>
                <textarea
                  className="focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-transparent text-white border border-white/40 rounded-lg p-2 w-full h-40"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 text-white">
                Send Message
                <MessageSquare className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Contact Details and Social Media */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-card/80 dark:bg-card/40 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-border/50 transform hover:scale-[1.02] transition-transform ">
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-pink-600 to-yellow-400 text-transparent bg-clip-text">Contact Information</h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3"
                >
                  <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 dark:from-blue-600/20 dark:to-cyan-600/20 rounded-full p-2">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-200">Email</p>
                    <a href="mailto:contact@tabrez.studio" className="text-foreground hover:text-blue-600 transition-colors">
                      imtabrez5@gmail.com<br />
                    </a>
                    <a href="mailto:contact@tabrez.studio" className="text-foreground hover:text-blue-600 transition-colors">
                      sufiyanrazapathan51800@gmail.com
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3"
                >
                  <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 dark:from-blue-600/20 dark:to-cyan-600/20 rounded-full p-2">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-200">Phone</p>
                    <a href="tel:+1234567890" className="text-foreground hover:text-blue-600 transition-colors">
                      Tabrez: +91 8008821571<br />
                    </a>
                    <a href="tel:+1234567890" className="text-foreground hover:text-blue-600 transition-colors">
                      sufiyan: +91 9834426839
                    </a>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 dark:from-green-500/20 dark:to-green-600/20 rounded-full p-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-green-600"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-200">WhatsApp</p>
                    <a
                      href="https://wa.me/+918008821571"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-green-600 transition-colors flex items-center space-x-1"
                    >
                      <span>+91 8008821571</span>
                      <ExternalLink className="h-4 w-4 opacity-50" />
                    </a>
                  </div>

                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3"
                >
                  <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 dark:from-blue-600/20 dark:to-cyan-600/20 rounded-full p-2">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-200">Address</p>
                    <p className="text-foreground">HIGHTECH CITY Hyderabad, Telangana 500032</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-card/80 dark:bg-card/40 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-border/50 transform ">
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-yellow-500 to-pink-500 text-transparent bg-clip-text">Follow Us</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/mohammed-tabrez-156a3a19a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4dbRDZAhRPeCEOA%2Fba80Ww%3D%3D' },
                  { icon: Twitter, name: 'Twitter', url: 'https://twitter.com' },
                  { icon: Facebook, name: 'Facebook', url: 'https://facebook.com' },
                  { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/tabrez.studio?igsh=bHczYjhyMHA3aDAy' }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    whileHover={{ scale: 1.05, x: 5 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-foreground hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-primary/5"
                  >
                    <social.icon className="h-5 w-5 text-white" />
                    <span>{social.name}</span>
                    <ExternalLink className="h-4 w-4 opacity-50" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}