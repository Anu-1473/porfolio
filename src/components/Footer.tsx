import { motion } from "framer-motion";
import { Heart, Linkedin, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/anusha",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/anusha",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/anusha",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:anusha@example.com",
    },
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 gradient-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Anusha</h3>
            <p className="text-white/80">
              Aspiring Product Manager & Developer
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-smooth"
              >
                <social.icon className="w-5 h-5 text-white" />
              </motion.a>
            ))}
          </div>

          <div className="border-t border-white/20 pt-8">
            <p className="text-white/60 text-sm flex items-center justify-center gap-2">
              © {currentYear} Anusha. Made with{" "}
              <Heart className="w-4 h-4 text-red-400 fill-current" /> and lots
              of coffee
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
