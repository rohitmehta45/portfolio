const Experience = () => {
  const experiences = [
    {
      year: "2024",
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      description: "Led development of enterprise-level web applications serving 100k+ users. Architected scalable microservices and mentored junior developers.",
      achievements: [
        "Reduced application load time by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline"
      ]
    },
    {
      year: "2022",
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      description: "Built MVP from scratch using React and Node.js. Collaborated with design team to create intuitive user interfaces and robust backend systems.",
      achievements: [
        "Developed 3 major product features",
        "Integrated payment systems",
        "Optimized database queries"
      ]
    },
    {
      year: "2020",
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      description: "Specialized in creating responsive web applications and interactive user interfaces. Worked with multiple clients across various industries.",
      achievements: [
        "Delivered 20+ client projects",
        "Improved user engagement by 60%",
        "Mastered modern React patterns"
      ]
    },
    {
      year: "2019",
      title: "Junior Developer",
      company: "CodeCraft Inc",
      description: "Started my professional journey learning best practices in web development. Contributed to various projects while building foundational skills.",
      achievements: [
        "Completed 100+ code reviews",
        "Built first production app",
        "Earned React certification"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="brutalist-heading brutalist-heading-lg mb-16 text-center">
          PROFESSIONAL
          <br />
          <span className="brutalist-accent">JOURNEY</span>
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-black"></div>

          {experiences.map((exp, index) => (
            <div 
              key={exp.year}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'md:text-right md:pr-1/2' : 'md:pl-1/2 md:ml-8'
              }`}
            >
              {/* Year Badge */}
              <div className={`absolute top-0 ${
                index % 2 === 0 
                  ? 'left-0 md:left-auto md:right-0 md:transform md:translate-x-1/2' 
                  : 'left-0 md:transform md:-translate-x-1/2'
              } w-16 h-16 brutalist-accent-bg brutalist-border brutalist-shadow flex items-center justify-center z-10`}>
                <span className="text-white font-bold text-sm">{exp.year}</span>
              </div>

              {/* Timeline Dot */}
              <div className={`absolute top-6 ${
                index % 2 === 0 
                  ? 'left-20 md:left-auto md:right-0 md:transform md:translate-x-1/2' 
                  : 'left-20 md:left-0 md:transform md:-translate-x-1/2'
              } w-4 h-4 bg-black rounded-full z-10`}></div>

              {/* Content Card */}
              <div className={`ml-24 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'
              }`}>
                <div className="brutalist-border brutalist-shadow brutalist-hover-lift bg-white p-8">
                  <h3 className="brutalist-heading text-2xl mb-2">{exp.title}</h3>
                  <h4 className="brutalist-accent font-bold text-lg mb-4">{exp.company}</h4>
                  <p className="brutalist-text mb-6">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li 
                        key={achIndex}
                        className="flex items-center gap-3 text-sm font-semibold"
                      >
                        <div className="w-2 h-2 brutalist-accent-bg"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20 text-center">
          <h3 className="brutalist-heading brutalist-heading-md mb-8">EDUCATION</h3>
          <div className="brutalist-border brutalist-shadow bg-gray-50 p-8 max-w-2xl mx-auto">
            <h4 className="brutalist-heading text-xl mb-2">Bachelor of Computer Science</h4>
            <p className="brutalist-accent font-bold mb-4">University of Technology • 2015-2019</p>
            <p className="brutalist-text">
              Graduated with honors, specializing in software engineering and web technologies. 
              Active member of the coding club and hackathon participant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

