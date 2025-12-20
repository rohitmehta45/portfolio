import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.body.classList.contains('dark'));
  }, []);

  const contactMethods = [
    { Icon: Mail, label: "EMAIL", value: "mehtarohit1012@gmail.com", href: "mailto:mehtarohit1012@gmail.com" },
    { Icon: Phone, label: "PHONE", value: "+977 9817927648", href: "tel:+9779817927648" },
    { Icon: MapPin, label: "LOCATION", value: "Gaurighat, Kathmandu", href: "https://www.google.com/maps/place/27%C2%B042'46.5%22N+85%C2%B020'44.9%22E/@27.712903,85.3439334,17z" }
  ];

  const socialLinks = [
    { Icon: Github, href: "https://github.com/rohitmehta45", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/rohit-mehta-5133a8312/", label: "LinkedIn" },
    { Icon: FaWhatsapp, href: "https://wa.me/9779817927648", label: "WhatsApp" }
  ];

  const handleSend = (e) => {
    e.preventDefault();
    const serviceID = "singhhit8033";              
    const templateID = "template_6a9vjw9";         
    const publicKey = "krX5n4IV2X2ALoaWs";         
    emailjs.sendForm(serviceID, templateID, e.target, publicKey)
      .then(() => {
        alert("✅ Message sent successfully!");
        e.target.reset();
      })
      .catch((err) => {
        console.error("❌ Failed to send message:", err);
        alert("Something went wrong. Please try again.");
      });
  };

  const floatColors = [
    'border-orange-400 shadow-[0_0_40px_rgba(255,165,0,0.5)]',
    'border-purple-400 shadow-[0_0_40px_rgba(128,0,128,0.5)]',
    'border-cyan-400 shadow-[0_0_40px_rgba(0,255,255,0.5)]',
    'border-pink-400 shadow-[0_0_40px_rgba(255,105,180,0.5)]',
    'border-yellow-400 shadow-[0_0_40px_rgba(255,255,0,0.5)]'
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-8 lg:px-16 relative font-['Orbitron'] overflow-hidden min-h-screen">
      
      
      <div className={`absolute top-12 left-0 w-40 sm:w-64 h-40 sm:h-64 rounded-full blur-[100px] border-4 -z-20 animate-[float_6s_ease-in-out_infinite] ${floatColors[0]}`}></div>
      <div className={`absolute bottom-12 left-8 w-32 sm:w-48 h-32 sm:h-48 rounded-full border-4 -z-20 animate-[float_10s_ease-in-out_infinite] ${floatColors[1]}`}></div>
      <div className={`absolute top-1/4 right-0 w-56 sm:w-72 h-56 sm:h-72 rounded-full blur-[120px] border-4 -z-20 animate-[float_12s_ease-in-out_infinite] ${floatColors[2]}`}></div>
      <div className={`absolute bottom-1/4 right-8 w-32 sm:w-40 h-32 sm:h-40 rounded-lg border-4 -z-20 animate-[float_14s_ease-in-out_infinite] ${floatColors[3]}`}></div>
      <div className={`absolute top-1/3 left-1/3 w-20 sm:w-28 h-20 sm:h-28 rounded-full border-4 -z-20 animate-[float_15s_ease-in-out_infinite] ${floatColors[4]}`}></div>

     
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0e00] to-[#000000] -z-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,0,0.07)_1px,transparent_1px)] bg-[length:100px_100px] sm:bg-[length:120px_120px] opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-white">
        
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="brutalist-heading brutalist-heading-xl mb-6 sm:mb-8">
            LET'S BUILD
            <br />
            <span className="text-5xl sm:text-8xl brutalist-accent drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] sm:drop-shadow-[0_0_15px_rgba(0,255,255,0.7)]">SOMETHING GREAT</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 sm:mb-12 text-base sm:text-xl">
            Ready to turn your ideas into reality? I'm always excited to work on
            new projects and collaborate with innovative teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a href="/Rohit Mehta (Resume).pdf" download className="brutalist-border brutalist-shadow brutalist-hover-lift !bg-orange-500 px-8 sm:px-12 py-4 sm:py-6 font-bold text-base sm:text-xl border-white text-white text-center">
              DOWNLOAD RESUME
            </a>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16">
          <div>
            <h3 className="brutalist-heading brutalist-heading-md mb-6 sm:mb-8">GET IN TOUCH</h3>
            <div className="space-y-4 sm:space-y-6">
              {contactMethods.map(({ Icon, label, value, href }) => (
                <a key={label} href={href} className="block brutalist-border brutalist-shadow brutalist-hover-lift bg-white text-black p-4 sm:p-6 group">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Icon size={24} sm={32} className="brutalist-accent" style={{ filter: 'drop-shadow(0 0 6px #459d9aff) drop-shadow(0 0 12px #00fff7)' }} />
                    <div>
                      <div className="font-bold text-xs sm:text-sm tracking-wide mb-1">{label}</div>
                      <div className="brutalist-text text-black group-hover:brutalist-accent transition-colors text-sm sm:text-base">{value}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          
          <div>
            <h3 className="brutalist-heading brutalist-heading-md mb-6 sm:mb-8 !text-blue-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] sm:drop-shadow-[0_0_15px_rgba(0,255,255,0.7)]">
              QUICK MESSAGE
            </h3>
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSend}>
              <input type="text" name="name" placeholder="YOUR NAME" className="w-full brutalist-border p-3 sm:p-4 bg-white text-black font-semibold placeholder-gray-500 focus:outline-none focus:brutalist-accent text-sm sm:text-base" required />
              <input type="email" name="email" placeholder="YOUR EMAIL" className="w-full brutalist-border p-3 sm:p-4 bg-white text-black font-semibold placeholder-gray-500 focus:outline-none focus:brutalist-accent text-sm sm:text-base" required />
              <textarea name="message" rows="4" placeholder="YOUR MESSAGE" className="w-full brutalist-border p-3 sm:p-4 bg-white text-black font-semibold placeholder-gray-500 focus:outline-none focus:brutalist-accent resize-none text-sm sm:text-base" required></textarea>
              <button type="submit"
                className="w-full brutalist-border brutalist-shadow brutalist-hover-lift py-3 sm:py-4 font-bold text-base sm:text-lg border-white cursor-pointer !bg-orange-400 text-white hover:opacity-90">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 sm:mt-20 pt-8 sm:pt-12 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8">
            <div className="text-center sm:text-left">
              <h4 className="heading text-lg sm:text-2xl mb-2 sm:mb-4 !text-blue-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.3)] sm:drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">ROHIT MEHTA</h4>
              <p className="text-orange-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.2)] sm:drop-shadow-[0_0_15px_rgba(0,255,255,0.2)] text-sm sm:text-base">Frontend Developer & Digital Craftsman</p>
            </div>
            <div className="flex gap-4 sm:gap-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <a key={label} href={href} className="brutalist-border brutalist-shadow brutalist-hover-lift bg-white text-black p-3 sm:p-4 group drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] sm:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" aria-label={label}>
                  <Icon size={20} sm={24} className="group-hover:brutalist-accent transition-colors" />
                </a>
              ))}
            </div>
          </div>
          <div className="text-center mt-8 sm:mt-12 pt-4 sm:pt-8 border-t border-gray-700">
            <p className="text-gray-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] sm:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] text-sm sm:text-base">© 2025 Rohit Mehta. Crafted with precision and passion.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
