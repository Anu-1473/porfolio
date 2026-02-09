import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail, Linkedin, Github, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/anusha",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/anusha",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/anusha",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:anusha@example.com",
      color: "hover:text-red-500",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and
            interesting projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Let's work together
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're looking for a product manager who can bridge the
                gap between business goals and technical implementation, or a
                developer who understands user needs, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                Feel free to reach out through the form or connect with me on
                social media:
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`p-3 rounded-full bg-background shadow-card hover:shadow-hover transition-smooth ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-lg gradient-primary text-white">
                <h4 className="font-semibold mb-2">Quick Response</h4>
                <p className="text-white/90 text-sm">
                  I typically respond within 24 hours. For urgent matters, feel
                  free to reach out on LinkedIn.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 shadow-elegant gradient-card border-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    required
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gradient-primary hover:shadow-hover transition-smooth group"
                  >
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
