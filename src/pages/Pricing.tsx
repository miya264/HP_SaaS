import React from 'react';
import Section from '../components/Section';
import PricingCard from '../components/PricingCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Pricing - InsightSync';
  }, []);

  const pricingPlans = [
    {
      title: "Free Trial",
      price: "Free",
      description: "Try InsightSync for 10 days with all features included.",
      features: [
        { title: "Automatic meeting summaries", included: true },
        { title: "Key point extraction", included: true },
        { title: "Action item tracking", included: true },
        { title: "Basic integrations (Slack, Zoom)", included: true },
        { title: "Basic analytics dashboard", included: true },
        { title: "10-day limit", included: true },
        { title: "5 users maximum", included: true },
        { title: "Email support", included: true },
        { title: "Advanced team analytics", included: false },
        { title: "Custom integrations", included: false },
        { title: "Priority support", included: false }
      ],
      ctaText: "Start Free Trial",
      ctaLink: "/contact",
      popular: false
    },
    {
      title: "Standard",
      price: "¥9,800",
      description: "Perfect for small to medium-sized teams.",
      features: [
        { title: "Automatic meeting summaries", included: true },
        { title: "Key point extraction", included: true },
        { title: "Action item tracking", included: true },
        { title: "All integrations (Slack, Zoom, Teams, etc.)", included: true },
        { title: "Full analytics dashboard", included: true },
        { title: "Unlimited usage", included: true },
        { title: "Up to 25 users", included: true },
        { title: "Email & chat support", included: true },
        { title: "Advanced team analytics", included: true },
        { title: "Custom integrations", included: false },
        { title: "Priority support", included: false }
      ],
      ctaText: "Get Started",
      ctaLink: "/contact",
      popular: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For organizations with advanced needs and larger teams.",
      features: [
        { title: "Automatic meeting summaries", included: true },
        { title: "Key point extraction", included: true },
        { title: "Action item tracking", included: true },
        { title: "All integrations + priority for new ones", included: true },
        { title: "Full analytics dashboard", included: true },
        { title: "Unlimited usage", included: true },
        { title: "Unlimited users", included: true },
        { title: "24/7 priority support", included: true },
        { title: "Advanced team analytics", included: true },
        { title: "Custom integrations", included: true },
        { title: "Dedicated customer success manager", included: true }
      ],
      ctaText: "Contact Sales",
      ctaLink: "/contact",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "How does the free trial work?",
      answer: "Our free trial gives you full access to all InsightSync features for 10 days, with no credit card required. You can add up to 5 team members to explore how the platform works with your existing workflows."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. We offer monthly and annual billing options, with a discount for annual commitments. If you cancel, you'll retain access until the end of your current billing period."
    },
    {
      question: "How is pricing calculated?",
      answer: "Our Standard plan is priced at ¥9,800 per month for up to 25 users. For Enterprise customers with larger teams or specialized needs, we provide custom pricing based on your organization's size and requirements."
    },
    {
      question: "Do you offer discounts for nonprofits or educational institutions?",
      answer: "Yes, we offer special pricing for qualified nonprofit organizations and educational institutions. Please contact our sales team to learn more about our nonprofit and education programs."
    },
    {
      question: "What kind of support is included?",
      answer: "All plans include email support. Standard plans add chat support, while Enterprise plans include 24/7 priority support and a dedicated customer success manager to ensure you get the most out of InsightSync."
    },
    {
      question: "Can I change plans later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades will apply at the start of your next billing cycle."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section
        title={<>Simple, Transparent <span className="gradient-text">Pricing</span></>}
        subtitle="Choose the plan that's right for your organization. No hidden fees or surprises."
        className="pt-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              ctaText={plan.ctaText}
              ctaLink={plan.ctaLink}
              popular={plan.popular}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Need a custom solution? <Link to="/contact" className="text-primary-600 hover:text-primary-700 font-medium">Contact our sales team</Link>
          </p>
        </div>
      </Section>

      {/* Feature Comparison */}
      <Section
        title="Compare Features"
        subtitle="See which plan is right for your organization."
        className="bg-gray-50"
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary-50">
                <th className="text-left px-4 py-3 text-primary-950 font-semibold border-b border-gray-200">Feature</th>
                <th className="text-center px-4 py-3 text-primary-950 font-semibold border-b border-gray-200">Free Trial</th>
                <th className="text-center px-4 py-3 text-primary-950 font-semibold border-b border-gray-200 bg-primary-100">Standard</th>
                <th className="text-center px-4 py-3 text-primary-950 font-semibold border-b border-gray-200">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Meeting summaries",
                "Action item tracking",
                "Decision extraction",
                "Basic integrations",
                "Advanced integrations",
                "Custom integrations",
                "Basic analytics",
                "Advanced analytics",
                "User limit",
                "Usage limit",
                "Email support",
                "Chat support",
                "Priority support",
                "Dedicated success manager",
                "Custom branding",
                "SSO & advanced security"
              ].map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 border-b border-gray-200 font-medium">{feature}</td>
                  <td className="text-center px-4 py-3 border-b border-gray-200">
                    {["Meeting summaries", "Action item tracking", "Decision extraction", "Basic integrations", "Basic analytics", "Email support"].includes(feature) ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : feature === "User limit" ? (
                      <span>5 users</span>
                    ) : feature === "Usage limit" ? (
                      <span>10 days</span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="text-center px-4 py-3 border-b border-gray-200 bg-primary-50">
                    {["Meeting summaries", "Action item tracking", "Decision extraction", "Basic integrations", "Advanced integrations", "Basic analytics", "Advanced analytics", "Email support", "Chat support"].includes(feature) ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : feature === "User limit" ? (
                      <span>25 users</span>
                    ) : feature === "Usage limit" ? (
                      <span>Unlimited</span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="text-center px-4 py-3 border-b border-gray-200">
                    {feature === "User limit" ? (
                      <span>Unlimited</span>
                    ) : feature === "Usage limit" ? (
                      <span>Unlimited</span>
                    ) : (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* FAQs */}
      <Section
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about InsightSync's pricing and plans."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary-950">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Have more questions? We're here to help.
          </p>
          <Link to="/contact" className="btn btn-primary inline-flex items-center">
            Contact Support
          </Link>
        </div>
      </Section>

      {/* Testimonial */}
      <Section
        title=""
        className="gradient-bg text-white py-20"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-8 text-secondary-300">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-12 h-12 mx-auto"
            >
              <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
            </svg>
          </div>
          <p className="text-2xl text-white mb-8 leading-relaxed">
            "InsightSync paid for itself in the first month. Our leadership team now spends 40% less time in meetings, and our decision quality has improved dramatically."
          </p>
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-primary-700 mr-4"></div>
            <div className="text-left">
              <p className="font-semibold text-white">Akiko Yamamoto</p>
              <p className="text-gray-300">COO, Global Innovations</p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section
        title=""
        className="bg-white py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-950">
            Ready to transform your team's decision-making?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Start your free 10-day trial today. No credit card required.
          </p>
          <Link to="/contact" className="btn btn-primary inline-flex items-center">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </Section>
    </div>
  );
};

export default Pricing;