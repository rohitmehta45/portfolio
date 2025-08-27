import { ExternalLink, Github } from 'lucide-react';
import Kitchen from '../assets/cloudkitchen.png';
import RealEstate from '../assets/realestate.png';


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CloudKitchen",
      description: "Frontend for a cloud kitchen platform built with React. Organized menu, interactive UI, clean design. Responsive design coming soon.",
      image: Kitchen,
      tech: ["React", "Tailwind", "React Router"],
      github: "https://github.com/Texas-CloudKitchen/CloudKitchen_frontend",
      live: "#"
    },
    {
      id: 2,
      title: "RealEstate",
      description: "Frontend for a real estate platform. Browse properties, view details, and filter searches through an intuitive UI.",
      image: RealEstate,
      tech: ["React", "React Router", "JavaScript"],
      github: "https://github.com/rohitmehta45/RealEstate-web",
      live: "#"
    },
    {
      id: 3,
      title: "Hotel Booking",
      description: "Full-stack hotel booking platform in progress. Browse hotels, view rooms, and manage bookings.",
      image: "https://via.placeholder.com/400x300/f3f4f6/6b7280?text=Hotel+Booking",
      tech: ["React", "Tailwind"],
      github: "https://github.com/rohitmehta45/Hotel-Booking-Web",
      live: "#"
    },
    {
      id: 4,
      title: "MediBox",
      description: "Web-based MediBox platform built with React. Users can browse, search, and manage medical products, and access virtual consultations through a clean and interactive interface.",
      image: "https://via.placeholder.com/400x300/f3f4f6/6b7280?text=MediBox",
      tech: ["React", "Tailwind", "Vite"],
      github: "https://github.com/rohitmehta45/rohit-portfolio",
      live: "#"
    },
    {
      id: 5,
      title: "Car Selling",
      description: "Demo e-commerce frontend for car selling built with HTML, CSS, and JavaScript. Users can view car listings, add to cart, and checkout.",
      image: "https://via.placeholder.com/400x300/f3f4f6/6b7280?text=Car+Selling",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "Movie Platform",
      description: "A React-based platform to browse, search, and watch movies. Interactive UI with clean design, showcasing movies and details dynamically.",
      image: "https://via.placeholder.com/400x300/f3f4f6/6b7280?text=Movie+Platform",
      tech: ["React", "CSS", "JavaScript"],
      github: "https://github.com/rohitmehta45/movie-platform-",
      live: "#"
    }
  ];

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/400x300/f3f4f6/6b7280?text=Project+Image";
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="brutalist-heading brutalist-heading-lg mb-16 text-center">
          SELECTED
          <br />
          <span className="brutalist-accent">PROJECTS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative brutalist-border brutalist-shadow brutalist-hover-lift bg-white overflow-hidden">
              <div className="relative overflow-hidden aspect-video bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white p-6">
                    <h3 className="brutalist-heading text-2xl mb-4">{project.title}</h3>
                    <p className="mb-6 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex justify-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brutalist-border brutalist-shadow bg-white text-black px-4 py-2 font-bold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
                      >
                        <Github size={16} /> CODE
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brutalist-accent-bg brutalist-border brutalist-shadow px-4 py-2 font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
                      >
                        <ExternalLink size={16} /> LIVE
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="brutalist-heading text-xl mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="brutalist-border px-3 py-1 bg-gray-100 text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-4 right-4 w-6 h-6 brutalist-accent-bg transform rotate-45"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
