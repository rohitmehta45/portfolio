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
                I’m an aspiring Frontend Developer and a Computer Science student at Texas International College. 
                I’m building strong skills in HTML, CSS, JavaScript, React, and modern web technologies while creating projects that focus on responsive design and user-friendly experiences.
              </p>

              <p>
                Alongside frontend development, I’ve also worked with Java Swing for desktop applications and XAMPP for local server/database management. I use Git & GitHub to manage my 
                projects and collaborate effectively.
              </p>
              
              <p>
                Passionate about clean code and continuous learning, I’m eager to contribute to real-world 
                projects, grow as a developer, and collaborate with teams that value innovation and creativity.
              </p>
              
             
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="brutalist-border brutalist-shadow px-4 py-2 bg-white font-semibold">
                React.js
              </span>
              <span className="brutalist-border brutalist-shadow px-4 py-2 bg-white font-semibold">
                Java Swing
              </span>
              <span className="brutalist-border brutalist-shadow px-4 py-2 bg-white font-semibold">
                HTML, CSS, JS
              </span>
              <span className="brutalist-border brutalist-shadow px-4 py-2 bg-white font-semibold">
                Xampp
              </span>
              <span className="brutalist-border brutalist-shadow px-4 py-2 bg-white font-semibold">
                Git and GitHub
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
                    {/* Decorative Element removed */}
                  </div>
          </div>
        </div>
    </section>
  );
};

export default About;

