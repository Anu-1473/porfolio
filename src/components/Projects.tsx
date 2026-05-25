import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Canva Core Platform",
      description:
        "Contributing to Canva's core design platform, engineering responsive features, optimizing frontend performance, and enhancing UI components.",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
      tech: ["React", "TypeScript", "Canvas API", "CSS Modules"],
      github: "https://github.com/AnushaUppuu",
      demo: "https://canva.com",
      category: "Frontend Development",
    },
    {
      title: "SkyRoute — Flight Booking Web App",
      description:
        "Built a flight booking system with dynamic pricing, React frontend, and a Ruby on Rails RESTful API backend, integrated with Supabase PostgreSQL for transaction management.",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
      tech: ["React", "Ruby on Rails", "PostgreSQL", "Supabase", "ERB"],
      github: "https://github.com/AnushaUppuu",
      demo: "#",
      category: "Full Stack",
    },
    {
      title: "QuickChat — Chatting Application",
      description:
        "Developed a secure, real-time chat application with phone OTP registration, Socket.IO messaging, FCM push notifications, and chat deletion features.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      tech: ["React Native", "Socket.IO", "PostgreSQL", "Node.js", "Firebase", "AWS"],
      github: "https://github.com/AnushaUppuu",
      demo: "#",
      category: "Mobile App",
    },
    {
      title: "PetBuddy — Mobile Pet Care Management",
      description:
        "Built a mobile-first pet care app for tracking medical records, feeding schedules, vet appointments, local notifications, and emergency contacts.",
      image:
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&h=400&fit=crop",
      tech: ["React Native", "TypeScript", "Node.js", "Express", "MongoDB", "Mongoose"],
      github: "https://github.com/AnushaUppuu",
      demo: "#",
      category: "Mobile App",
    },
    {
      title: "FinGrow — Personal Finance Tracker",
      description:
        "Created a full-stack personal finance tool for budget tracking, income logging, target milestones alerts, and CSV statement uploads with Jest TDD tests.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "Express", "MongoDB", "CSV Import", "Jest"],
      github: "https://github.com/AnushaUppuu",
      demo: "#",
      category: "Full Stack",
    },
    {
      title: "Hanami — E-Commerce Web App",
      description:
        "Designed and developed a modern e-commerce apparel store featuring wishlisting, cart totals calculation, search filters, and product status APIs.",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop",
      tech: ["React", "React Router", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      github: "https://github.com/AnushaUppuu",
      demo: "#",
      category: "Full Stack",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A showcase of my work combining product thinking with technical
            implementation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden h-full shadow-card hover:shadow-hover transition-smooth bg-gradient-card border-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-primary"
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full group/btn"
                        >
                          <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          className="w-full bg-gradient-primary group/btn text-white"
                        >
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
