import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import cloudkitchenImg from "../assets/cloudkitchen.png";
import realestateImg from "../assets/realestate.png";
import hotelbookingImg from "../assets/hotelbooking.png";
import mediboxImg from "../assets/medibox.png";
import carsellingImg from "../assets/carselling.png";
import movieplatformImg from "../assets/movieplatform.png";
import netflixcloneImg from "../assets/image.png";
import GPTImg from "../assets/ChatGPT.webp";
import shopeaseImg from "../assets/bgImg_Auth.jpeg";

const projectsData = [
  {
    id: 1,
    title: "CloudKitchen",
    description:
      "Frontend for a cloud kitchen platform built with React. Organized menu, interactive UI, clean design.",
    image: cloudkitchenImg,
    tech: ["React", "Tailwind", "React Router"],
    github: "https://github.com/Texas-CloudKitchen/CloudKitchen_frontend",
    live: "#",
  },
  {
    id: 2,
    title: "RealEstate",
    description:
      "Frontend for a real estate platform. Browse properties and filter searches.",
    image: realestateImg,
    tech: ["React", "React Router", "JavaScript"],
    github: "https://github.com/rohitmehta45/RealEstate-web",
    live: "https://7af2dc32.real-estate-web-3tu.pages.dev/",
  },
  {
    id: 3,
    title: "Hotel Booking",
    description:
      "Hotel booking platform. Browse hotels, view rooms, and manage bookings.",
    image: hotelbookingImg,
    tech: ["React", "Tailwind"],
    github: "https://github.com/rohitmehta45/Hotel-Booking-Web",
    live: "https://hotel-booking-web.pages.dev/",
  },
  {
    id: 4,
    title: "MediBox",
    description:
      "Web-based MediBox platform to browse and manage medical products.",
    image: mediboxImg,
    tech: ["React", "Tailwind", "Vite"],
    github: "https://github.com/rohitmehta45/rohit-portfolio",
    live: "#",
  },
  {
    id: 5,
    title: "Car Selling",
    description:
      "Demo e-commerce frontend for car selling using HTML, CSS, and JS.",
    image: carsellingImg,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rohitmehta45/Cars-Selling-",
    live: "https://responsive-cars.pages.dev/",
  },
  {
    id: 6,
    title: "Movie Platform",
    description:
      "React-based platform to browse and search movies.",
    image: movieplatformImg,
    tech: ["React", "CSS", "JavaScript"],
    github: "https://github.com/rohitmehta45/movie-platform-",
    live: "#",
  },
  {
    id: 7,
    title: "Netflix Clone",
    description:
      "Netflix clone with movie browsing and search functionality.",
    image: netflixcloneImg,
    tech: ["React", "CSS", "JavaScript", "TMDB API"],
    github: "https://github.com/rohitmehta45/netflix-clone",
    live: "#",
  },
  {
    id: 8,
    title: "GPT Chat",
    description:
      "A React + Node.js app integrating OpenAI GPT API for interactive chat functionality.",
    image: GPTImg,
    tech: ["React", "Node.js", "Express", "OpenAI API"],
    github: "https://github.com/rohitmehta45/gpt",
    live: "#", 
  },
  {
    id: 9,
    title: "ShopEase",
    description:
      "Full frontend of ShopEase e-commerce app with role-based login, cart, and responsive UI.",
    image: shopeaseImg,
    tech: ["React", "Firebase Auth", "Tailwind CSS", "React Router"],
    github: "https://github.com/rohitmehta45/e-commerce-shopping.git",
    live: "https://e-commerce-shopping.pages.dev/",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const handleImageError = (e) => {
    e.target.src =
      "https://via.placeholder.com/400x300/f3f4f6/6b7280?text=Project+Image";
  };

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-16 text-center">
          SELECTED <span className="text-cyan-400">PROJECTS</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project) => (
            <div key={project.id} className="bg-[#181824] text-gray-300 rounded-xl overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                onError={handleImageError}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-orange-400 mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>

                <div className="flex gap-3 mb-4 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 text-sm font-bold rounded flex items-center gap-2"
                  >
                    <Github size={16} /> Code
                  </a>
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 text-white px-4 py-2 text-sm font-bold rounded flex items-center gap-2"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs bg-gray-800 rounded">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-orange-500 text-black font-bold rounded hover:bg-orange-400 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
