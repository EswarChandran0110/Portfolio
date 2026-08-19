import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const Experience = () => {
  const experiences = useSelector(
    (state: RootState) => state.portfolio.experiences,
  );

  return (
    <SectionWrapper id="experience">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        Professional <span className="text-cyan-400">Experience</span>
      </h2>
      <div className="relative max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gray-700" />

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 top-2 w-3 h-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-md shadow-cyan-400/30" />

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-400/30 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-gray-400">{exp.duration}</span>
                </div>
                <p className="text-cyan-400 mb-4">{exp.company}</p>
                <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={`${exp.id}-desc-${i}`} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-gray-900 border border-gray-600 rounded-full text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
