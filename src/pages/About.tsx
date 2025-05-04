import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Target, 
  Shield, 
  Users, 
  ArrowRight 
} from 'lucide-react';

const About: React.FC = () => {
  React.useEffect(() => {
    document.title = 'About Us - InsightSync';
  }, []);

  const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with AI to create solutions that genuinely transform how organizations work."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Customer Focus",
      description: "Everything we build starts with understanding the real challenges our customers face in managing organizational knowledge."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Trust & Security",
      description: "We handle sensitive organizational data with the highest standards of security and privacy protection."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "We believe that the best outcomes happen when people and AI work together, combining human judgment with computational power."
    }
  ];

  const team = [
    {
      name: "Akira Tanaka",
      role: "CEO & Co-Founder",
      bio: "Former VP of Product at a major AI firm, Akira brings 15+ years of experience in enterprise software and artificial intelligence.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Emma Chen",
      role: "CTO & Co-Founder",
      bio: "With a PhD in Machine Learning from MIT, Emma leads our engineering team in developing our proprietary AI models and technology.",
      image: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Hiroshi Yamamoto",
      role: "Chief AI Officer",
      bio: "Previously led AI research at a Fortune 500 company, Hiroshi specializes in natural language processing and conversation analysis.",
      image: "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Sarah Johnson",
      role: "VP of Customer Success",
      bio: "With over a decade in enterprise SaaS, Sarah ensures our customers achieve measurable ROI and meaningful transformation.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section
        title={<>Our <span className="gradient-text">Mission</span></>}
        subtitle="We're creating a future where human-AI collaboration transforms how organizations make decisions."
        className="pt-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary-950">
              People and AI, Working Together
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              InsightSync was founded in 2022 with a clear vision: to help organizations make better decisions by combining human expertise with artificial intelligence.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Too often, valuable insights are lost in the noise of daily communications—buried in lengthy meetings, sprawling chat threads, and isolated documents. We're changing that by creating technology that captures, organizes, and surfaces the information that matters.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team brings together expertise in artificial intelligence, natural language processing, and enterprise software to create solutions that seamlessly integrate with how organizations already work.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team collaboration" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </Section>

      {/* Our Values */}
      <Section
        title="Our Values"
        subtitle="The principles that guide everything we do."
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="bg-primary-50 w-14 h-14 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-950">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section
        title="Our Journey"
        subtitle="From idea to industry leader in AI-powered business intelligence."
      >
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-16">
            {[
              {
                year: "2022",
                title: "The Beginning",
                description: "InsightSync was founded by Akira Tanaka and Emma Chen, who saw the potential for AI to transform organizational decision-making.",
                align: "left"
              },
              {
                year: "2023",
                title: "First Product Launch",
                description: "After a year of development, we launched our first product, focusing on meeting intelligence and summary generation.",
                align: "right"
              },
              {
                year: "2024",
                title: "Series A Funding",
                description: "We secured $12M in Series A funding to expand our product capabilities and grow our team across engineering and customer success.",
                align: "left"
              },
              {
                year: "2025",
                title: "Global Expansion",
                description: "Today, we're serving hundreds of organizations worldwide, with offices in Tokyo, San Francisco, and London.",
                align: "right"
              }
            ].map((milestone, index) => (
              <div key={index} className={`flex items-center ${milestone.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: milestone.align === 'left' ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="flex-1"
                >
                  <div className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 ${milestone.align === 'right' ? 'md:mr-16' : 'md:ml-16'}`}>
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold mb-3 text-primary-950">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
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
                    {index + 1}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section
        title="Meet Our Team"
        subtitle="The passionate experts behind InsightSync."
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-primary-950">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4 text-primary-950">Join Our Team</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about AI, software development, and transforming how organizations work.
          </p>
          <Link to="/contact" className="btn btn-primary inline-flex items-center">
            View Open Positions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </Section>

      {/* Contact CTA */}
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
            Join Us in Transforming Decision Intelligence
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Have questions or want to learn more about our mission and solutions?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-primary bg-white text-primary-950 hover:bg-gray-100">
              Contact Us
            </Link>
            <Link to="/services" className="btn btn-secondary border-white text-white hover:bg-white/10">
              Explore Our Services
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default About;