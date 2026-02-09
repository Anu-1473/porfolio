import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Analytics Dashboard",
      description:
        "A comprehensive analytics platform for e-commerce businesses to track KPIs, user behavior, and sales performance with real-time data visualization.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["React", "TypeScript", "Chart.js", "Node.js", "PostgreSQL"],
      github: "#",
      demo: "#",
      category: "Product Management",
    },
    {
      title: "Task Management Mobile App",
      description:
        "A cross-platform mobile application for team collaboration and project management with real-time synchronization and intuitive UI.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["React Native", "Firebase", "Redux", "TypeScript"],
      github: "#",
      demo: "#",
      category: "Development",
    },
    {
      title: "AI-Powered Recipe Finder",
      description:
        "Smart recipe recommendation system using machine learning to suggest personalized recipes based on dietary preferences and available ingredients.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      tech: ["Python", "Machine Learning", "React", "FastAPI", "MongoDB"],
      github: "#",
      demo: "#",
      category: "AI/ML",
    },
    {
      title: "Financial Planning Tool",
      description:
        "Personal finance management platform with budget tracking, investment portfolio analysis, and financial goal setting capabilities.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Express.js", "MySQL", "Chart.js", "Stripe API"],
      github: "#",
      demo: "#",
      category: "FinTech",
    },
    {
      title: "Learning Management System",
      description:
        "Educational platform for online courses with interactive content, progress tracking, and community features for students and instructors.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
      github: "#",
      demo: "#",
      category: "EdTech",
    },
    {
      title: "Social Media Analytics",
      description:
        "Comprehensive social media management tool with content scheduling, engagement analytics, and competitor analysis features.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      tech: ["React", "Python", "Django", "PostgreSQL", "Redis"],
      github: "#",
      demo: "#",
      category: "Marketing",
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
              <Card className="overflow-hidden h-full shadow-card hover:shadow-hover transition-smooth gradient-card border-0">
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
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 group/btn"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 gradient-primary group/btn"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Demo
                    </Button>
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
