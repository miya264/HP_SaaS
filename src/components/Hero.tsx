import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Play } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary?: {
    text: string;
    link: string;
  };
  ctaSecondary?: {
    text: string;
    link: string;
  };
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  ctaPrimary = { text: 'Get Started', link: '/contact' },
  ctaSecondary = { text: 'Watch Demo', link: '#' }
}) => {
  return (
    <div className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-primary-950 opacity-90"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary-950 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <svg 
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
          >
            <defs>
              <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="rgba(26, 184, 255, 0.15)" />
                <stop offset="100%" stopColor="rgba(15, 26, 60, 0)" />
              </radialGradient>
            </defs>
            <circle cx="80" cy="20" r="50" fill="url(#grad1)" />
          </svg>

          <svg 
            className="absolute bottom-0 right-0 w-full h-full"
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
          >
            <defs>
              <radialGradient id="grad2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="rgba(20, 184, 166, 0.15)" />
                <stop offset="100%" stopColor="rgba(15, 26, 60, 0)" />
              </radialGradient>
            </defs>
            <circle cx="10" cy="90" r="60" fill="url(#grad2)" />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={ctaPrimary.link} className="btn btn-primary">
                  <FileText className="w-5 h-5 mr-2" />
                  {ctaPrimary.text}
                </Link>
                <Link to={ctaSecondary.link} className="btn btn-secondary group">
                  <div className="bg-secondary-500 rounded-full p-1 mr-2 group-hover:bg-secondary-600 transition-colors">
                    <Play className="w-3 h-3 text-white" fill="white" />
                  </div>
                  {ctaSecondary.text}
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="rounded-lg shadow-2xl overflow-hidden bg-white p-2">
              <img 
                src="https://images.pexels.com/photos/7963572/pexels-photo-7963572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="InsightSync Dashboard" 
                className="rounded-lg w-full h-auto" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-950/50 via-transparent to-transparent rounded-lg"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 bg-white rounded-lg shadow-xl p-4 border border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Meeting Insights</span>
              </div>
              <div className="mt-2 text-xs">
                <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-2/3"></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 border border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
                <span className="text-sm font-medium">Decision Rate</span>
              </div>
              <div className="mt-1 font-bold text-xl">+43%</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;