import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';

const Contact = () => {
  const { email, phone, socialLinks } = useSelector(
    (state: RootState) => state.portfolio.personalInfo
  );

  const socialCards = [
    socialLinks.github ? {
      name: 'GitHub',
      url: socialLinks.github,
      icon: '🐙',
      description: 'Check out my code & open source work',
    } : null,
    socialLinks.linkedin ? {
      name: 'LinkedIn',
      url: socialLinks.linkedin,
      icon: '💼',
      description: 'Let\'s connect professionally',
    } : null,
    socialLinks.leetcode ? {
      name: 'LeetCode',
      url: socialLinks.leetcode,
      icon: '🧩',
      description: 'See my problem-solving journey',
    } : null,
  ].filter((card): card is { name: string; url: string; icon: string; description: string } => card !== null);

  return (
    <SectionWrapper id="contact">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Social cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {socialCards.map((card, index) => (
            <motion.a
              key={card.name}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6, borderColor: 'rgba(6, 182, 212, 0.5)' }}
              className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center group cursor-pointer"
            >
              <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform duration-200">{card.icon}</span>
              <p className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors">{card.name}</p>
              <p className="text-gray-400 text-sm">{card.description}</p>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${email}`}
              className="px-8 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors duration-200 shadow-lg shadow-cyan-400/20"
            >
              ✉️ Drop me an email
            </a>
            <a
              href={`tel:${phone}`}
              className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-colors duration-200"
            >
              📱 Give me a call
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Usually respond within 24 hours
          </p>
        </motion.div>

        {/* Creative thanks note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400 text-base italic mb-2">
            "Thanks for scrolling this far — you're already my kind of person."
          </p>
          <p className="text-gray-500 text-sm">
            Crafted with ☕, curiosity & a little bit of{' '}
            <span className="text-cyan-400">React magic</span> by{' '}
            <span className="text-white font-medium">Eswar M</span>
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
