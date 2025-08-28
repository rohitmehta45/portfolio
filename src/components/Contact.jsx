import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const contactMethods = [
    {
      Icon: Mail,
      label: "EMAIL",
      value: "mehtarohit1012@gmail.com",
      href: "mailto:mehtarohit1012@gmail.com"
    },
    {
      Icon: Phone,
      label: "PHONE",
      value: "+977 9817927648",
      href: "tel:+977 9817927648"
    },
    {
      Icon: MapPin,
      label: "LOCATION",
      value: "Gaurighat, Kathmandu",
      href: "https://www.google.com/maps/place/27%C2%B042'46.5%22N+85%C2%B020'44.9%22E/@27.712903,85.3439334,17z"
    }
  ];

  const socialLinks = [
    { Icon: Github, href: "https://github.com/rohitmehta45", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/rohit-mehta-5133a8312/", label: "LinkedIn" },
    { Icon: FaWhatsapp, href: "https://wa.me/9779817927648", label: "WhatsApp" }
  ];

  const handleSend = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields before sending the message.");
      return;
    }

    window.location.href = `mailto:mehtarohit1012@gmail.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)} (${encodeURIComponent(email)})`;
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="brutalist-heading brutalist-heading-xl text-white mb-8">
            LET'S BUILD
            <br />
            <span className="brutalist-accent">SOMETHING GREAT</span>
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto mb-12 text-xl">
            Ready to turn your ideas into reality? I'm always excited to work on
            new projects and collaborate with innovative teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/Rohit Mehta (Resume).pdf"
              download
              className="brutalist-border brutalist-shadow brutalist-hover-lift brutalist-accent-bg px-12 py-6 font-bold text-xl border-white text-white text-center"
            >
              DOWNLOAD RESUME
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="brutalist-heading brutalist-heading-md text-white mb-8">
              GET IN TOUCH
            </h3>
            
            <div className="space-y-6">
              {contactMethods.map(({ Icon, label, value, href }) => (
                <a 
                  key={label}
                  href={href}
                  className="block brutalist-border brutalist-shadow brutalist-hover-lift bg-white text-black p-6 group"
                >
                  <div className="flex items-center gap-4">
                    <Icon size={32} className="brutalist-accent" />
                    <div>
                      <div className="font-bold text-sm tracking-wide mb-1">{label}</div>
                      <div className="brutalist-text text-black group-hover:brutalist-accent transition-colors">
                        {value}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="brutalist-heading brutalist-heading-md text-white mb-8">
              QUICK MESSAGE
            </h3>
            
            <form className="space-y-6" onSubmit={handleSend}>
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="YOUR NAME"
                  className="w-full brutalist-border p-4 bg-white text-black font-semibold placeholder-gray-500 focus:outline-none focus:brutalist-accent"
                  required
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="YOUR EMAIL"
                  className="w-full brutalist-border p-4 bg-white text-black font-semibold placeholder-gray-500 focus:outline-none focus:brutalist-accent"
                  required
                />
              </div>
              
              <div>
                <textarea 
                  name="message"
                  rows="5"
                  placeholder="YOUR MESSAGE"
                  className="w-full brutalist-border p-4 bg-white text-black font-semibold placeholder-gray-500 focus:outline-none focus:brutalist-accent resize-none"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full brutalist-border brutalist-shadow brutalist-hover-lift brutalist-accent-bg py-4 font-bold text-lg border-white cursor-pointer"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h4 className="brutalist-heading text-2xl text-white mb-4">ROHIT MEHTA</h4>
              <p className="text-gray-400">Frontend Developer & Digital Craftsman</p>
            </div>
            
            <div className="flex gap-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <a 
                  key={label}
                  href={href}
                  className="brutalist-border brutalist-shadow brutalist-hover-lift bg-white text-black p-4 group"
                  aria-label={label}
                >
                  <Icon size={24} className="group-hover:brutalist-accent transition-colors" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              © 2025 Rohit Mehta. Crafted with precision and passion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
