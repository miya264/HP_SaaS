import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingFeature {
  title: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  ctaText: string;
  ctaLink: string;
  popular?: boolean;
  index?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  ctaText,
  ctaLink,
  popular = false,
  index = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
        popular
          ? 'border-2 border-secondary-500 shadow-xl scale-105 bg-white z-10'
          : 'border border-gray-200 shadow-lg bg-white hover:shadow-xl'
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-secondary-500 text-white text-xs font-semibold px-4 py-1 rounded-bl-lg">
            Popular
          </div>
        </div>
      )}

      <div className="p-8">
        <h3 className="text-xl font-semibold mb-2 text-primary-950">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-primary-950">{price}</span>
          {price !== 'Custom' && <span className="text-gray-500 ml-2">/month</span>}
        </div>
        
        <Link 
          to={ctaLink}
          className={`btn w-full mb-8 ${popular ? 'btn-primary' : 'btn-secondary'}`}
        >
          {ctaText}
        </Link>
        
        <h4 className="font-medium mb-4 text-gray-800">Features include:</h4>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              {feature.included ? (
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              ) : (
                <X className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
              )}
              <span className={feature.included ? 'text-gray-700' : 'text-gray-500'}>
                {feature.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default PricingCard;