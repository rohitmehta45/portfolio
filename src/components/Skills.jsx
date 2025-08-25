const Skills = () => {
  const skillCategories = [
    {
      title: "FRONTEND",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "bg-white"
    },
    {
      title: "BACKEND", 
      skills: ["Node.js", "Express", "Python", "Django", "REST APIs"],
      color: "brutalist-accent-bg"
    },
    {
      title: "DATABASE",
      skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "Supabase"],
      color: "bg-black text-white"
    },
    {
      title: "TOOLS",
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma"],
      color: "bg-white"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="brutalist-heading brutalist-heading-lg mb-16 text-center">
          TECHNICAL
          <br />
          <span className="brutalist-accent">EXPERTISE</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`brutalist-border brutalist-shadow brutalist-hover-lift p-8 ${category.color} transform transition-all duration-300 hover:rotate-1`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 0.5}deg)`
              }}
            >
              <h3 className="brutalist-heading brutalist-heading-md mb-6">
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skill}
                    className="font-semibold text-sm tracking-wide"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>

              {/* Decorative corner */}
              <div className="absolute top-2 right-2 w-4 h-4 bg-current opacity-20"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="brutalist-heading brutalist-heading-lg brutalist-accent">50+</div>
            <p className="brutalist-text font-semibold">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="brutalist-heading brutalist-heading-lg brutalist-accent">5+</div>
            <p className="brutalist-text font-semibold">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="brutalist-heading brutalist-heading-lg brutalist-accent">100%</div>
            <p className="brutalist-text font-semibold">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

