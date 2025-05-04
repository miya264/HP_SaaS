import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2 } from 'lucide-react';

interface CompanyLogo {
  name: string;
  color: string;
}

const AnimatedLogos: React.FC = () => {
  const topLogos: CompanyLogo[] = [
    { name: "TechCorp", color: "bg-blue-500" },
    { name: "InnovateLab", color: "bg-green-500" },
    { name: "FutureWorks", color: "bg-purple-500" },
    { name: "SmartTech", color: "bg-red-500" },
    { name: "DataFlow", color: "bg-yellow-500" },
    { name: "AIVision", color: "bg-indigo-500" },
  ];

  const bottomLogos: CompanyLogo[] = [
    { name: "NextGen", color: "bg-pink-500" },
    { name: "CloudMind", color: "bg-cyan-500" },
    { name: "BrainWave", color: "bg-teal-500" },
    { name: "DigiTrust", color: "bg-orange-500" },
    { name: "CoreLogic", color: "bg-violet-500" },
    { name: "SyncTech", color: "bg-emerald-500" },
  ];

  return (
    <div className="overflow-hidden py-8">
      {/* Top row - right to left */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex mb-8"
      >
        <div className="flex space-x-8 animate-none">
          {topLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-16 rounded-lg shadow-md flex items-center justify-center bg-white border border-gray-100"
            >
              <div className="text-center">
                <div className={`w-8 h-8 ${logo.color} rounded-lg mx-auto mb-2 flex items-center justify-center`}>
                  <BarChart2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-600">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex space-x-8 animate-none">
          {topLogos.map((logo, index) => (
            <div
              key={`dup-${index}`}
              className="flex-shrink-0 w-32 h-16 rounded-lg shadow-md flex items-center justify-center bg-white border border-gray-100"
            >
              <div className="text-center">
                <div className={`w-8 h-8 ${logo.color} rounded-lg mx-auto mb-2 flex items-center justify-center`}>
                  <BarChart2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-600">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom row - left to right */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex"
      >
        <div className="flex space-x-8 animate-none">
          {bottomLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-16 rounded-lg shadow-md flex items-center justify-center bg-white border border-gray-100"
            >
              <div className="text-center">
                <div className={`w-8 h-8 ${logo.color} rounded-lg mx-auto mb-2 flex items-center justify-center`}>
                  <BarChart2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-600">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex space-x-8 animate-none">
          {bottomLogos.map((logo, index) => (
            <div
              key={`dup-${index}`}
              className="flex-shrink-0 w-32 h-16 rounded-lg shadow-md flex items-center justify-center bg-white border border-gray-100"
            >
              <div className="text-center">
                <div className={`w-8 h-8 ${logo.color} rounded-lg mx-auto mb-2 flex items-center justify-center`}>
                  <BarChart2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-600">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedLogos;