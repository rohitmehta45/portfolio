import { ExternalLink, Github } from 'lucide-react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.png';
import workspace from '../assets/workspace.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-COMMERCE PLATFORM",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
      image: project1,
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      size: "large"
    },
    {
      id: 2,
      title: "TASK MANAGEMENT APP",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: project2,
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "#",
      live: "#",
      size: "medium"
    },
    {
      id: 3,
      title: "DEVELOPER PORTFOLIO",
      description: "Modern portfolio website showcasing brutalist design principles with smooth animations and responsive layout.",
      image: workspace,
      tech: ["React", "Tailwind", "Framer Motion"],
      github: "#",
      live: "#",
      size: "small"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="brutalist-heading brutalist-heading-lg mb-16 text-center">
          SELECTED
          <br />
          <span className="brutalist-accent">PROJECTS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative brutalist-border brutalist-shadow brutalist-hover-lift bg-white overflow-hidden ${
                project.size === 'large' ? 'md:col-span-2' : 
                project.size === 'medium' ? 'lg:row-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white p-6">
                    <h3 className="brutalist-heading text-2xl mb-4">{project.title}</h3>
                    <p className="mb-6 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex justify-center gap-4">
                      <a 
                        href={project.github}
                        className="brutalist-border brutalist-shadow bg-white text-black px-4 py-2 font-bold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
                      >
                        <Github size={16} />
                        CODE
                      </a>
                      <a 
                        href={project.live}
                        className="brutalist-accent-bg brutalist-border brutalist-shadow px-4 py-2 font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        LIVE
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="brutalist-heading text-xl mb-3">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="brutalist-border px-3 py-1 bg-gray-100 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-6 h-6 brutalist-accent-bg transform rotate-45"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="brutalist-border brutalist-shadow brutalist-hover-lift brutalist-accent-bg px-12 py-4 font-bold text-lg">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

