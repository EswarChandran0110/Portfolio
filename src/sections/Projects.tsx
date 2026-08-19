import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const Projects = () => {
  const projects = useSelector((state: RootState) => state.portfolio.projects);

  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        <span className="text-cyan-400">Projects</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/5 transition-all duration-300"
          >
            <div className="h-48 bg-gray-700 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-gray-900 border border-gray-600 rounded text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Live Demo →
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
