import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const Hero = () => {
  const { name, title, email, phone, socialLinks, resumeUrl, image, bio, location } = useSelector(
    (state: RootState) => state.portfolio.personalInfo,
  );

  return (
    <SectionWrapper id="hero" fullHeight className="flex items-center justify-center">
      <div className="w-full max-w-4xl">
        {/* Profile picture + Name/Title/Bio side by side */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-48 h-48 md:w-72 md:h-72 shrink-0 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-400/20"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-2"
            >
              {name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xl md:text-2xl text-cyan-400 mb-4"
            >
              {title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed"
            >
              {bio}
            </motion.p>
          </div>
        </div>

        {/* Email, Phone, Location in a row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-6 mb-6 text-gray-400 text-sm sm:text-base"
        >
          <a href={`mailto:${email}`} className="hover:text-cyan-400 transition-colors">
            ✉️ {email}
          </a>
          <a href={`tel:${phone}`} className="hover:text-cyan-400 transition-colors">
            📱 {phone}
          </a>
          <span>📍 {location}</span>
        </motion.div>

        {/* Social links + Resume button in same row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8"
        >
          <div className="flex gap-4">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm border border-gray-700 rounded-full text-gray-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-md hover:shadow-cyan-400/10 transition-all duration-200"
              >
                🐙 GitHub
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm border border-gray-700 rounded-full text-gray-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-md hover:shadow-cyan-400/10 transition-all duration-200"
              >
                💼 LinkedIn
              </a>
            )}
            {socialLinks.leetcode && (
              <a
                href={socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm border border-gray-700 rounded-full text-gray-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-md hover:shadow-cyan-400/10 transition-all duration-200"
              >
                🧩 LeetCode
              </a>
            )}
          </div>
          <a
            href={resumeUrl}
            download
            className="inline-block px-6 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors duration-200 shadow-lg shadow-cyan-400/20"
          >
            📄 Download Resume
          </a>
        </motion.div>

        {/* Scroll down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-center"
        >
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="animate-bounce text-gray-400 hover:text-white transition-colors"
          >
            ↓ Scroll Down
          </button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
