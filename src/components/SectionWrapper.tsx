import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setActiveSection } from '@/store/slices/portfolioSlice';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  fullHeight?: boolean;
}

const SectionWrapper = ({ children, id, className = '', fullHeight = false }: SectionWrapperProps) => {
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  if (inView) {
    dispatch(setActiveSection(id));
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${fullHeight ? 'min-h-screen' : ''} px-4 sm:px-6 py-12 pt-20 md:px-20 lg:px-32 scroll-mt-20 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
