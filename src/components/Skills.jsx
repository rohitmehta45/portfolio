import { useEffect, useState } from "react";

const Skills = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.body.classList.contains("dark"));
  }, []);

  const skillCategories = [
    {
      title: "FRONTEND",
      skills: ["React", "HTML", "CSS", "JavaScript", "Tailwind", "Framer Motion"],
      color: isDark ? "bg-gray-900 text-white" : "bg-white text-black"
    },
    {
      title: "BACKEND",
      skills: ["JAVA"],
      color: isDark ? "bg-gray-800 text-white" : "bg-yellow-100 text-black"
    },
    {
      title: "DATABASE",
      skills: ["MySql", "Xampp"],
      color: isDark ? "bg-gray-900 text-white" : "bg-white text-black"
    },
    {
      title: "TOOLS",
      skills: ["Git & GitHub", "Figma"],
      color: isDark ? "bg-gray-900 text-white" : "bg-white text-black"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-['Orbitron'] px-4 md:px-8 lg:px-16">
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-orange-500/30 blur-[180px] -z-20 animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-20 right-1/4 w-[30rem] h-[30rem] border-4 border-orange-500/40 rounded-full -z-20 animate-[rotate_90s_linear_infinite]"></div>
      <div className="absolute top-1/3 left-1/3 w-44 h-44 border-4 border-purple-400/40 rounded-lg -z-20 animate-[float_12s_ease-in-out_infinite]"></div>
      <div className="absolute top-1/4 right-1/4 w-28 h-28 rounded-full border-4 border-cyan-400/40 -z-20 animate-[float_10s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border-4 border-pink-400/40 rounded-lg -z-20 animate-[float_14s_ease-in-out_infinite]"></div>
      <div className="absolute top-1/2 left-2/3 w-28 h-28 border-4 border-yellow-400/40 rounded-lg -z-20 animate-[float_15s_ease-in-out_infinite]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0e00] to-[#000000] -z-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,0,0.07)_1px,transparent_1px)] bg-[length:120px_120px] opacity-20 -z-10"></div>

      <div className="w-full flex flex-col items-center gap-12 relative z-10 max-w-7xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-orange-400 drop-shadow-[0_0_20px_rgba(255,140,0,0.9)] mb-16 text-center">
          TECHNICAL
          <br />
          <span className="text-cyan-400">EXPERTISE</span>
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`relative brutalist-border brutalist-shadow brutalist-hover-lift p-8 ${category.color} transform transition-all duration-300 hover:rotate-1`}
              style={{ transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 0.5}deg)` }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-orange-400">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="font-semibold text-sm tracking-wide">
                    {skill}
                  </li>
                ))}
              </ul>
              <div className="absolute top-2 right-2 w-4 h-4 bg-current opacity-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
