import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  BarChart2, 
  Users, 
  Zap, 
  FileText, 
  CheckCircle,
  Calendar,
  PieChart,
  Check, 
  ArrowRight,
  Globe,
  Layers,
  Shield,
  Code
} from 'lucide-react';

const Services: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Services - InsightSync';
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section
        title={<>Our <span className="gradient-text">Services</span></>}
        subtitle="InsightSync offers a comprehensive suite of AI-powered tools to transform your organization's decision-making process."
        className="pt-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary-950">Transform Organizational Communication</h3>
            <p className="text-gray-600 mb-6">
              InsightSync captures, analyzes, and organizes the valuable information exchanged in your meetings, chats, and documents. Our AI turns this communication data into structured insights that drive informed decisions.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Real-time conversation analysis and summary',
                'Automatic action item extraction and tracking',
                'Cross-platform integration with your existing tools',
                'Team alignment visualization and monitoring'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-primary inline-flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team collaboration" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </Section>

      {/* Core Features Section */}
      <Section
        title="Core Features"
        subtitle="Explore our complete suite of AI-powered tools designed to streamline your organizational decision-making."
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <MessageSquare className="h-8 w-8" />,
              title: "Meeting Intelligence",
              description: "Automatically summarize meetings, extract action items, and organize key insights into searchable knowledge bases.",
              features: [
                "Real-time transcription and summary",
                "Sentiment analysis and consensus tracking",
                "Automatic action item assignment",
                "Meeting effectiveness scoring"
              ]
            },
            {
              icon: <BarChart2 className="h-8 w-8" />,
              title: "Decision Analytics",
              description: "Visualize decision patterns, track implementation, and measure outcomes to improve your organization's decision quality over time.",
              features: [
                "Decision tracking dashboard",
                "Implementation rate monitoring",
                "Outcome measurement tools",
                "Historical decision analysis"
              ]
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "Team Alignment",
              description: "Identify areas of agreement and misalignment to build stronger consensus and more unified execution.",
              features: [
                "Team sentiment tracking",
                "Alignment visualization",
                "Contribution analytics",
                "Misalignment alerts"
              ]
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="bg-primary-50 w-16 h-16 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary-950">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Integrations Section */}
      <Section
        title="Seamless Integrations"
        subtitle="InsightSync connects with your existing communication and productivity tools."
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { icon: <span className="text-blue-500 text-lg">Slack</span>, name: "Slack" },
            { icon: <span className="text-green-500 text-lg">Zoom</span>, name: "Zoom" },
            { icon: <span className="text-blue-600 text-lg">Google Meet</span>, name: "Google Meet" },
            { icon: <span className="text-blue-400 text-lg">Microsoft Teams</span>, name: "MS Teams" },
            { icon: <span className="text-red-500 text-lg">Google Calendar</span>, name: "Google Calendar" },
            { icon: <span className="text-blue-800 text-lg">Outlook</span>, name: "Outlook" },
            { icon: <span className="text-blue-500 text-lg">Jira</span>, name: "Jira" },
            { icon: <span className="text-teal-500 text-lg">Notion</span>, name: "Notion" },
            { icon: <span className="text-purple-600 text-lg">Asana</span>, name: "Asana" },
            { icon: <span className="text-orange-500 text-lg">Clickup</span>, name: "Clickup" },
          ].map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {integration.icon}
              <p className="mt-2 text-gray-700">{integration.name}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Don't see your tool? We're constantly adding new integrations.
          </p>
          <Link to="/contact" className="btn btn-secondary inline-flex items-center">
            Request an Integration
          </Link>
        </div>
      </Section>

      {/* Implementation Process */}
      <Section
        title="Implementation Process"
        subtitle="Getting started with InsightSync is quick and seamless."
        className="bg-gray-50"
      >
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 gap-16">
            {[
              {
                step: 1,
                title: "Initial Setup",
                description: "Connect InsightSync to your communication platforms and configure your organizational structure.",
                icon: <Layers className="h-6 w-6" />,
                align: "left"
              },
              {
                step: 2,
                title: "Team Onboarding",
                description: "We'll help your team understand how to leverage InsightSync in their daily workflows.",
                icon: <Users className="h-6 w-6" />,
                align: "right"
              },
              {
                step: 3,
                title: "Integration & Customization",
                description: "Configure dashboards, reports, and alerts to match your specific organization needs.",
                icon: <Zap className="h-6 w-6" />,
                align: "left"
              },
              {
                step: 4,
                title: "Go Live & Support",
                description: "Begin capturing insights with full support from our customer success team.",
                icon: <Globe className="h-6 w-6" />,
                align: "right"
              }
            ].map((step, index) => (
              <div key={index} className={`flex items-center ${step.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: step.align === 'left' ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="flex-1"
                >
                  <div className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 ${step.align === 'right' ? 'md:mr-16' : 'md:ml-16'}`}>
                    <h3 className="text-xl font-bold mb-3 text-primary-950">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
                
                <div className="hidden md:flex relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold z-10"
                  >
                    {step.step}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Security & Compliance */}
      <Section
        title="Enterprise-Grade Security"
        subtitle="We take data security and compliance seriously to protect your sensitive information."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary-950">Your Data, Protected</h3>
            <p className="text-gray-600 mb-6">
              InsightSync employs enterprise-grade security measures to ensure your organizational data remains secure and compliant with global regulations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {[
                { icon: <Shield className="h-5 w-5" />, title: "SOC 2 Compliance" },
                { icon: <Shield className="h-5 w-5" />, title: "GDPR Compliance" },
                { icon: <Shield className="h-5 w-5" />, title: "End-to-end Encryption" },
                { icon: <Shield className="h-5 w-5" />, title: "Role-based Access" },
                { icon: <Shield className="h-5 w-5" />, title: "Data Retention Controls" },
                { icon: <Shield className="h-5 w-5" />, title: "Regular Security Audits" }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-primary-50 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Data security" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        title=""
        className="gradient-bg text-white py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to transform your organization's decision-making?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free 10-day trial today. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-primary bg-white text-primary-950 hover:bg-gray-100">
              Start Free Trial
            </Link>
            <Link to="/contact" className="btn btn-secondary border-white text-white hover:bg-white/10">
              Schedule a Demo
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Services;