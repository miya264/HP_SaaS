import React from 'react';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Contact Us - InsightSync';
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section
        title={<>Get in <span className="gradient-text">Touch</span></>}
        subtitle="Have questions or ready to transform your organization's decision-making? We're here to help."
        className="pt-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary-950">Contact Information</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Office Location</h4>
                  <p className="text-gray-600">
                    123 AI Avenue, Tech District<br />
                    Tokyo, Japan 100-0001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone Number</h4>
                  <p className="text-gray-600">+81 3-1234-5678</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@insightsync.ai</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM JST<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-primary-950">Connect With Us</h3>
              <p className="text-gray-600 mb-6">
                Follow us on social media for the latest updates, insights, and announcements.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'linkedin', 'facebook'].map((platform, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="bg-primary-50 w-10 h-10 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-100 transition-colors duration-300"
                  >
                    <span className="sr-only">{platform}</span>
                    <div className="w-5 h-5 bg-primary-600 rounded-sm"></div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </Section>

      {/* Map Section */}
      <Section
        title=""
        className="bg-gray-50 pt-0"
      >
        <div className="rounded-xl overflow-hidden shadow-lg h-96 bg-gray-200">
          {/* Placeholder for map */}
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <p className="text-gray-500 font-medium">Interactive Map</p>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section
        title="Frequently Asked Questions"
        subtitle="Quick answers to common questions."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              question: "How quickly can we get started with InsightSync?",
              answer: "Most customers are up and running within 1-2 business days. Our team will help you with integration and onboarding to ensure a smooth start."
            },
            {
              question: "Do you offer customized demos?",
              answer: "Yes, we offer personalized demos tailored to your organization's specific needs and use cases. Contact us to schedule one."
            },
            {
              question: "Is there a minimum contract length?",
              answer: "Our Standard plan is available on both monthly and annual terms, with a discount for annual commitments. Enterprise plans typically start at 12 months."
            },
            {
              question: "How does the free trial work?",
              answer: "Our 10-day free trial gives you full access to all features. No credit card is required, and you can add up to 5 team members to explore the platform."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
            >
              <h3 className="text-lg font-semibold mb-3 text-primary-950">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section
        title=""
        className="bg-gray-50 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-950">
            Ready to transform your organization?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Start your free 10-day trial today or schedule a personalized demo with our team.
          </p>
          <div className="inline-block bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
            <span className="text-primary-950 font-medium">Your Journey to Better Decisions Starts Here</span>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Contact;