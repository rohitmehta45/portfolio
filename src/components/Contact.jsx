import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      Icon: Mail,
      label: "EMAIL",
      value: "rohit.mehta@email.com",
      href: "mailto:rohit.mehta@email.com"
    },
    {
      Icon: Phone,
      label: "PHONE",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      Icon: MapPin,
      label: "LOCATION",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    { Icon: Github, href: "#", label: "GitHub" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-20">
          <h2 className="brutalist-heading brutalist-heading-xl text-white mb-8">
            LET'S BUILD
            <br />
            <span className="brutalist-accent">SOMETHING GREAT</span>
          </h2>
          
          <p className="brutalist-text text-gray-300 max-w-2xl mx-auto mb-12 text-xl">
            Ready to turn your ideas into reality? I'm always excited to work on 
            new projects and collaborate with innovative teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="brutalist-border brutalist-shadow brutalist-hover-lift bg-white text-black px-12 py-6 font-bold text-xl">
              START A PROJECT
            </button>
            <button className="brutalist-border brutalist-shadow brutalist-hover-lift brutalist-accent-bg px-12 py-6 font-bold text-xl border-white">
              DOWNLOAD RESUME
            </button>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Methods */}
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

          {/* Quick Form */}
          <div>
            <h3 className="brutalist-heading brutalist-heading-md text-white mb-8">
              QUICK MESSAGE
            </h3>
            
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="YOUR NAME"
                  className="w-full brutalist-border p-4 bg-white text-black font-semibold placeholder-gray-500 focus:outline-none focus:brutalist-accent"
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  placeholder="YOUR EMAIL"
                  className="w-full brutalist-border p-4 bg-white text-black font-semibold placeholder-gray-500 focus:outline-none focus:brutalist-accent"
                />
              </div>
              
              <div>
                <textarea 
                  rows="5"
                  placeholder="YOUR MESSAGE"
                  className="w-full brutalist-border p-4 bg-white text-black font-semibold placeholder-gray-500 focus:outline-none focus:brutalist-accent resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full brutalist-border brutalist-shadow brutalist-hover-lift brutalist-accent-bg py-4 font-bold text-lg border-white"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

        {/* Social Links & Footer */}
        <div className="mt-20 pt-12 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h4 className="brutalist-heading text-2xl text-white mb-4">ROHIT MEHTA</h4>
              <p className="text-gray-400">Full-Stack Developer & Digital Craftsman</p>
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
              © 2024 Rohit Mehta. Crafted with precision and passion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

