import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools",
  ai: "AI Tools",
  other: "Other",
};

const Skills = () => {
  const skills = useSelector((state: RootState) => state.portfolio.skills);

  const grouped = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>,
  );

  return (
    <SectionWrapper id="skills">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        Technical <span className="text-cyan-400">Expertise</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-gray-200 mb-4">
              {categoryLabels[category] || category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
                >
                  <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
