import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  logoUrl?: string;
  index?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  logoUrl,
  index = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="bg-white rounded-xl shadow-lg p-8 relative border border-gray-100"
    >
      <Quote className="h-8 w-8 text-secondary-200 absolute top-6 right-6" />
      <p className="text-gray-700 mb-6 relative z-10">"{quote}"</p>
      
      <div className="flex items-center">
        {logoUrl && (
          <img 
            src={logoUrl} 
            alt={`${company} logo`} 
            className="h-10 mr-4"
          />
        )}
        <div>
          <h4 className="font-semibold text-primary-950">{author}</h4>
          <p className="text-sm text-gray-600">{role}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;