
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "Switching to SaccoSaaS transformed our operations. We've seen a 40% increase in member engagement since launching the mobile portal.",
    author: "David Mwangi",
    role: "CEO",
    sacco: "Mshiriki Sacco",
    avatar: "https://ui-avatars.com/api/?name=David+M&background=ef4444&color=fff"
  },
  {
    id: '2',
    quote: "The loan approval process used to take days. Now, with the automated workflows, we can process emergency loans in under 15 minutes.",
    author: "Sarah K.",
    role: "Credit Manager",
    sacco: "Unity Development Sacco",
    avatar: "https://ui-avatars.com/api/?name=Sarah+K&background=000&color=fff"
  },
  {
    id: '3',
    quote: "Compliance reporting was a nightmare until we integrated this platform. The SASRA-ready reports save our audit team weeks of manual work.",
    author: "James Ochieng",
    role: "Head of Finance",
    sacco: "Apex Teachers Sacco",
    avatar: "https://ui-avatars.com/api/?name=James+O&background=4b5563&color=fff"
  },
  {
    id: '4',
    quote: "The direct integration with M-Pesa and banks has eliminated reconciliation errors. Our members love the transparency of real-time statements.",
    author: "Lydia Wambui",
    role: "Operations Director",
    sacco: "Boresha Women Sacco",
    avatar: "https://ui-avatars.com/api/?name=Lydia+W&background=10b981&color=fff"
  },
  {
    id: '5',
    quote: "As a small growing Sacco, scalability was our main concern. This SaaS model allows us to grow our member base without worrying about infrastructure.",
    author: "Peter Mutua",
    role: "IT Specialist",
    sacco: "Sunrise Housing Sacco",
    avatar: "https://ui-avatars.com/api/?name=Peter+M&background=3b82f6&color=fff"
  },
  {
    id: '6',
    quote: "Customer support is top-notch. Any time we have a configuration need, the Codex team is there to guide us within the hour.",
    author: "Grace Njeri",
    role: "General Manager",
    sacco: "Amani Investment Group",
    avatar: "https://ui-avatars.com/api/?name=Grace+N&background=8b5cf6&color=fff"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-24 sm:py-32" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 mb-6"
          >
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Success Stories</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6"
          >
            Trusted by the leading <br /> SACCOs across the region
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We help cooperatives of all sizes digitize their operations, increase member trust, and drive sustainable financial growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-[#FAFAFA] p-8 rounded-[2rem] border border-gray-100 hover:border-red-200 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/5 hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all duration-500">
                    <Quote size={20} className="opacity-80" />
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed font-medium italic">
                    "{t.quote}"
                  </p>
                </div>
                
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      width={48}
                      height={48}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{t.author}</h3>
                    <p className="text-xs text-gray-500 font-medium">{t.role} • {t.sacco}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-20 py-12 border-t border-gray-100 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        >
          {/* Logo Placeholders for Trust */}
          <div className="text-2xl font-black text-black whitespace-nowrap">CO-OP BANK</div>
          <div className="text-2xl font-black text-black whitespace-nowrap">ABYSSINIA</div>
          <div className="text-2xl font-black text-black whitespace-nowrap">DASHEN</div>
          <div className="text-2xl font-black text-black whitespace-nowrap">AWASH</div>
          <div className="text-2xl font-black text-black whitespace-nowrap">TELEBIRR</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
