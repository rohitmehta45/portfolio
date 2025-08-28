import { Code, Coffee, Lightbulb, Zap } from "lucide-react";

const About = () => {
  const quirkyIcons = [
    { Icon: Code, label: "Clean Code" },
    { Icon: Coffee, label: "Caffeine Powered" },
    { Icon: Lightbulb, label: "Problem Solver" },
    { Icon: Zap, label: "Fast Execution" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-['Orbitron'] px-4 md:px-8 lg:px-16 py-12">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0e00] to-[#000000] -z-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,0,0.07)_1px,transparent_1px)] bg-[length:120px_120px] opacity-20 -z-20"></div>

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-start gap-12 relative z-10">
        {/* Left: About Text */}
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-orange-400 drop-shadow-[0_0_20px_rgba(255,140,0,0.9)]">
            ABOUT
            <br />
            <span className="text-cyan-400">THE DEVELOPER</span>
          </h2>

          <div className="space-y-4 md:space-y-6 text-gray-400 text-base md:text-lg">
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

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-2 bg-white font-semibold rounded-md shadow text-sm md:text-base">React.js</span>
            <span className="px-3 py-2 bg-white font-semibold rounded-md shadow text-sm md:text-base">Git & GitHub</span>
            <span className="px-3 py-2 bg-white font-semibold rounded-md shadow text-sm md:text-base">Java Swing</span>
            <span className="px-3 py-2 bg-white font-semibold rounded-md shadow text-sm md:text-base">HTML, CSS, JS</span>
            <span className="px-3 py-2 bg-white font-semibold rounded-md shadow text-sm md:text-base">Xampp</span>
          </div>
        </div>

        {/* Right: Icon marquee */}
        <div className="flex-1 overflow-hidden w-full relative mt-8 md:mt-12 h-[420px] md:h-[590px]">
          <div className="flex flex-col animate-marquee-vertical w-[280px] md:w-[420px] mx-auto">
            {quirkyIcons.concat(quirkyIcons).map(({ Icon, label }, index) => (
              <div 
                key={label + '-' + index}
                className="bg-white p-6 md:p-8 text-center rounded-xl shadow-lg mb-6 md:mb-8 flex flex-col items-center justify-center"
                style={{ minHeight: "140px", md: "180px" }}
              >
                <Icon size={48} className="text-orange-400 mb-3 md:mb-4" />
                <h3 className="font-bold text-lg md:text-xl">{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating shapes */}
      <div className="absolute top-0 left-10 w-56 h-56 md:w-72 md:h-72 rounded-full bg-orange-500/30 blur-[120px] -z-10 animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-10 right-16 md:right-20 w-60 h-60 md:w-[28rem] md:h-[28rem] border-4 border-orange-500/40 rounded-full -z-10 animate-[rotate_90s_linear_infinite]"></div>
      <div className="absolute top-1/3 left-1/4 w-36 h-36 md:w-44 md:h-44 border-4 border-purple-400/40 rounded-lg -z-10 animate-[float_12s_ease-in-out_infinite]"></div>
      <div className="absolute top-1/4 right-1/3 w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-cyan-400/40 -z-10 animate-[float_10s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-1/3 left-1/4 w-20 h-20 md:w-24 md:h-24 border-4 border-pink-400/40 rounded-lg -z-10 animate-[float_14s_ease-in-out_infinite]"></div>
    </section>
  );
};

export default About;
