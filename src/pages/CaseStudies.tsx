import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Clock,
  TrendingUp,
  Users,
  Zap,
  ChevronRight
} from 'lucide-react';

const CaseStudies: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Case Studies - InsightSync';
  }, []);

  const caseStudies = [
    {
      company: 'TechNova Inc.',
      industry: 'Software Development',
      challenge: 'Meeting overload with distributed teams across 5 time zones led to communication gaps and slow decisions.',
      solution: 'Implemented InsightSync to automate meeting summaries and visualize consensus across teams.',
      results: [
        { metric: 'Meeting time', value: '-40%' },
        { metric: 'Decision speed', value: '+65%' },
        { metric: 'Team alignment', value: '+87%' }
      ],
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: {
        text: "InsightSync transformed how our global team operates. We've cut meeting time by 40% while making better-informed decisions faster.",
        author: "Keiko Tanaka",
        role: "CTO"
      }
    },
    {
      company: 'Finance Forward',
      industry: 'Financial Services',
      challenge: 'Compliance requirements meant detailed documentation of all decisions, creating administrative burden.',
      solution: 'Used InsightSync to automatically document meeting outcomes and decision trails.',
      results: [
        { metric: 'Documentation time', value: '-65%' },
        { metric: 'Compliance confidence', value: '+92%' },
        { metric: 'Audit preparation', value: '-50%' }
      ],
      image: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: {
        text: "The automated documentation has been a game-changer for our compliance team. We now have complete confidence in our decision trails.",
        author: "David Chen",
        role: "Compliance Officer"
      }
    },
    {
      company: 'Healthcare Innovations',
      industry: 'Healthcare',
      challenge: 'Critical patient care decisions needed to be tracked across shifts and departments.',
      solution: 'Deployed InsightSync to create a continuous knowledge base of patient care decisions.',
      results: [
        { metric: 'Handoff accuracy', value: '+78%' },
        { metric: 'Care coordination', value: '+54%' },
        { metric: 'Documentation time', value: '-35%' }
      ],
      image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: {
        text: "The improved handoff accuracy means our patients receive more consistent care across shifts. It's been transformative.",
        author: "Sarah Johnson",
        role: "Clinical Director"
      }
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section
        title={<>Client <span className="gradient-text">Success Stories</span></>}
        subtitle="See how organizations are transforming their decision-making processes with InsightSync."
        className="pt-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { number: '150+', label: 'Happy Clients' },
            { number: '40%', label: 'Average Meeting Time Reduction' },
            { number: '87%', label: 'Improved Team Alignment' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center"
            >
              <p className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Case Studies */}
      {caseStudies.map((study, index) => (
        <Section
          key={index}
          title=""
          className={index % 2 === 1 ? 'bg-gray-50' : ''}
        >
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {study.industry}
              </div>
              <h2 className="text-3xl font-bold mb-4 text-primary-950">{study.company}</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-primary-950">Challenge</h3>
                <p className="text-gray-600">{study.challenge}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-primary-950">Solution</h3>
                <p className="text-gray-600">{study.solution}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-primary-950">Results</h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.map((result, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <p className="text-2xl font-bold text-primary-600">{result.value}</p>
                      <p className="text-sm text-gray-600">{result.metric}</p>
                    </div>
                  ))}
                </div>
                <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-700 mb-6">
                  "{study.quote.text}"
                  <footer className="mt-2 text-gray-600 not-italic">
                    <span className="font-medium">{study.quote.author}</span>, {study.quote.role}
                  </footer>
                </blockquote>
              </div>
              
              <Link to="/contact" className="text-primary-600 font-semibold inline-flex items-center hover:text-primary-700">
                Learn how we can help your organization
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
              className={`order-first ${index % 2 === 1 ? 'lg:order-last' : 'lg:order-first'}`}
            >
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={study.image} 
                  alt={`${study.company} case study`} 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </Section>
      ))}

      {/* Results Grid */}
      <Section
        title="Measurable Results Across Industries"
        subtitle="InsightSync delivers concrete improvements in how organizations make decisions."
        className="bg-primary-950 text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
            className="bg-primary-900 rounded-xl p-6 border border-primary-800"
          >
            <div className="bg-primary-700/50 w-12 h-12 rounded-full flex items-center justify-center text-secondary-400 mb-4">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Time Savings</h3>
            <p className="text-gray-300 mb-4">
              Organizations reduce meeting time by 35-50% through automated summaries and focused discussions.
            </p>
            <p className="text-2xl font-bold text-secondary-400">40%</p>
            <p className="text-sm text-gray-400">Average reduction in meeting hours</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="bg-primary-900 rounded-xl p-6 border border-primary-800"
          >
            <div className="bg-primary-700/50 w-12 h-12 rounded-full flex items-center justify-center text-secondary-400 mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Decision Speed</h3>
            <p className="text-gray-300 mb-4">
              Teams make decisions 3-5x faster with improved information organization and alignment.
            </p>
            <p className="text-2xl font-bold text-secondary-400">3.7x</p>
            <p className="text-sm text-gray-400">Average increase in decision velocity</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="bg-primary-900 rounded-xl p-6 border border-primary-800"
          >
            <div className="bg-primary-700/50 w-12 h-12 rounded-full flex items-center justify-center text-secondary-400 mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Team Alignment</h3>
            <p className="text-gray-300 mb-4">
              Visualizing consensus and capturing decisions leads to significantly improved alignment.
            </p>
            <p className="text-2xl font-bold text-secondary-400">87%</p>
            <p className="text-sm text-gray-400">Average improvement in team alignment scores</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: '-100px' }}
            className="bg-primary-900 rounded-xl p-6 border border-primary-800"
          >
            <div className="bg-primary-700/50 w-12 h-12 rounded-full flex items-center justify-center text-secondary-400 mb-4">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">ROI</h3>
            <p className="text-gray-300 mb-4">
              The combination of time savings and improved decision quality delivers rapid ROI.
            </p>
            <p className="text-2xl font-bold text-secondary-400">258%</p>
            <p className="text-sm text-gray-400">Average one-year return on investment</p>
          </motion.div>
        </div>
      </Section>

      {/* Logos Section */}
      <Section
        title="Trusted by Industry Leaders"
        subtitle="Join the organizations already transforming their decision-making with InsightSync."
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70">
          {Array.from({ length: 12 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true, margin: '-100px' }}
              className="flex items-center justify-center p-4"
            >
              <div className="h-12 w-full bg-gray-300 rounded"></div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
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
            Ready to become our next success story?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join the organizations already transforming their decision-making with InsightSync.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-primary inline-flex items-center">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="btn btn-secondary inline-flex items-center">
              Schedule Demo
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default CaseStudies;