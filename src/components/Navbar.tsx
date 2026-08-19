import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useSelector(
    (state: RootState) => state.portfolio.activeSection,
  );

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-11 h-11 cursor-pointer group"
          onClick={() => {
            const el = document.getElementById('hero');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {/* Spinning border ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-2 border-transparent"
            style={{
              borderImage: 'linear-gradient(135deg, #e2e8f0, #94a3b8, #f8fafc, #64748b, #e2e8f0) 1',
              borderRadius: '50%',
              background: 'linear-gradient(#030712, #030712) padding-box, linear-gradient(135deg, #e2e8f0, #94a3b8, #f8fafc, #64748b, #e2e8f0) border-box',
              border: '2px solid transparent',
            }}
          />
          {/* Inner circle with letter */}
          <div className="absolute inset-0.5 rounded-full bg-gray-900 flex items-center justify-center">
            <motion.span
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="text-lg font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #e2e8f0, #94a3b8, #f8fafc, #64748b, #e2e8f0)',
                backgroundSize: '200% 100%',
              }}
            >
              E
            </motion.span>
          </div>
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-cyan-400/30" />
        </motion.div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`text-sm transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-cyan-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-gray-800"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className={`text-sm transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'text-cyan-400'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
