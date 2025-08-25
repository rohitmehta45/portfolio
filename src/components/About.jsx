import { Code, Coffee, Lightbulb, Zap } from 'lucide-react';

const About = () => {
  const quirkyIcons = [
    { Icon: Code, label: "Clean Code" },
    { Icon: Coffee, label: "Caffeine Powered" },
    { Icon: Lightbulb, label: "Problem Solver" },
    { Icon: Zap, label: "Fast Execution" }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="brutalist-grid-asymmetric">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="brutalist-heading brutalist-heading-lg">
              ABOUT
              <br />
              <span className="brutalist-accent">THE DEVELOPER</span>
            </h2>
            
            <div className="space-y-6 brutalist-text">
              <p>
                I'm a passionate full-stack developer with 5+ years of experience 
                building scalable web applications and digital products. My approach 
                combines technical expertise with creative problem-solving to deliver 
                solutions that not only work flawlessly but also provide exceptional 
                user experiences.
              </p>
              
              <p>
                Specializing in React, Node.js, and modern web technologies, I've 
                helped startups and established companies transform their ideas into 
                robust digital platforms. I believe in writing clean, maintainable 
                code and staying current with the latest industry trends and best practices.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community through blogs and mentoring.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="brutalist-border brutalist-shadow px-4 py-2 bg-white font-semibold">
                React & Next.js
              </span>
              <span className="brutalist-border brutalist-shadow px-4 py-2 bg-white font-semibold">
                Node.js & Express
              </span>
              <span className="brutalist-border brutalist-shadow px-4 py-2 bg-white font-semibold">
                TypeScript
              </span>
              <span className="brutalist-border brutalist-shadow px-4 py-2 bg-white font-semibold">
                MongoDB & PostgreSQL
              </span>
            </div>
          </div>

          {/* Quirky Icons */}
          <div className="space-y-6">
            {quirkyIcons.map(({ Icon, label }, index) => (
              <div 
                key={label}
                className="brutalist-border brutalist-shadow brutalist-hover-lift bg-white p-6 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon size={48} className="mx-auto mb-4 brutalist-accent" />
                <h3 className="font-bold text-lg">{label}</h3>
              </div>
            ))}
            
            {/* Decorative Element */}
            <div className="brutalist-accent-bg brutalist-border h-20 flex items-center justify-center">
              <span className="text-white font-bold text-xl">5+ YEARS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

