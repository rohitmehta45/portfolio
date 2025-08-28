import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CloudKitchen",
    description:
      "Frontend for a cloud kitchen platform built with React. Organized menu, interactive UI, clean design. Responsive design coming soon.",
    image: "../assets/cloudkitchen.png",
    tech: ["React", "Tailwind", "React Router"],
    github: "https://github.com/Texas-CloudKitchen/CloudKitchen_frontend",
    live: "#",
  },
  {
    id: 2,
    title: "RealEstate",
    description:
      "Frontend for a real estate platform. Browse properties, view details, and filter searches through an intuitive UI.",
    image: "../assets/realestate.png",
    tech: ["React", "React Router", "JavaScript"],
    github: "https://github.com/rohitmehta45/RealEstate-web",
    live: "#",
  },
  {
    id: 3,
    title: "Hotel Booking",
    description:
      "Full-stack hotel booking platform in progress. Browse hotels, view rooms, and manage bookings.",
    image: "../assets/hotelbooking.png",
    tech: ["React", "Tailwind"],
    github: "https://github.com/rohitmehta45/Hotel-Booking-Web",
    live: "#",
  },
  {
    id: 4,
    title: "MediBox",
    description:
      "Web-based MediBox platform built with React. Users can browse, search, and manage medical products, and access virtual consultations.",
    image: "../assets/medibox.png",
    tech: ["React", "Tailwind", "Vite"],
    github: "https://github.com/rohitmehta45/rohit-portfolio",
    live: "#",
  },
  {
    id: 5,
    title: "Car Selling",
    description:
      "Demo e-commerce frontend for car selling built with HTML, CSS, and JavaScript. Users can view car listings, add to cart, and checkout.",
    image: "../assets/carselling.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rohitmehta45/Cars-Selling-",
    live: "#",
  },
  {
    id: 6,
    title: "Movie Platform",
    description:
      "A React-based platform to browse, search, and watch movies. Interactive UI with clean design, showcasing movies and details dynamically.",
    image: "../assets/movieplatform.png",
    tech: ["React", "CSS", "JavaScript"],
    github: "https://github.com/rohitmehta45/movie-platform-",
    live: "#",
  },
];

const Projects = () => {
  const handleImageError = (e) => {
    e.target.src =
      "https://via.placeholder.com/400x300/f3f4f6/6b7280?text=Project+Image";
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 relative font-['Orbitron'] overflow-hidden min-h-screen">
      <div className="absolute top-20 left-0 w-64 h-64 rounded-full bg-orange-500/30 blur-[120px] -z-20 animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-20 left-16 w-48 h-48 border-4 border-purple-400/40 rounded-full -z-20 animate-[float_10s_ease-in-out_infinite]"></div>
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-cyan-400/20 blur-[140px] -z-20 animate-[float_12s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-1/4 right-16 w-40 h-40 border-4 border-pink-400/40 rounded-lg -z-20 animate-[float_14s_ease-in-out_infinite]"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0e00] to-[#000000] -z-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,0,0.07)_1px,transparent_1px)] bg-[length:120px_120px] opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-orange-400 drop-shadow-[0_0_20px_rgba(255,140,0,0.9)] mb-16 text-center">
          SELECTED
          <br />
          <span className="text-cyan-400">PROJECTS</span>
        </h2>

        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-8">
            {projects.concat(projects).map((project, index) => (
              <div
                key={index}
                className="min-w-[350px] relative bg-gradient-to-br from-[#181824] via-[#1a2233] to-[#0f2027] text-gray-300 rounded-xl overflow-hidden shadow-lg flex-shrink-0 hover:scale-105 transition-transform duration-300"
              >
                <div className="relative w-full h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={handleImageError}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 bg-opacity-70 transition-all duration-300 flex items-center justify-center text-center p-6">
                    <div className="opacity-0 opacity-100 transition-opacity duration-300">
                      <h3 className="text-2xl font-bold text-orange-400 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm mb-4">{project.description}</p>
                      <div className="flex justify-center gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-black px-4 py-2 font-bold text-sm rounded hover:bg-gray-100 flex items-center gap-2"
                        >
                          <Github size={16} /> CODE
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-orange-500 text-white px-4 py-2 font-bold text-sm rounded hover:opacity-90 flex items-center gap-2"
                        >
                          <ExternalLink size={16} /> LIVE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold bg-gray-800 text-white rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
