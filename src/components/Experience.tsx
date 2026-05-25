import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies?: {
    category: string;
    items: string[];
  }[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      role: "Software Engineer",
      company: "EverestEngineering",
      period: "July 2024 - Present",
      description: "Focusing on delivering high-quality, scalable, and maintainable software solutions while adhering to industry best practices. Actively participating in agile projects, applying innovative problem-solving skills, and collaborating with cross-functional teams to achieve key project goals. Committed to continuous learning, exploring emerging technologies, and refining development workflows to enhance engineering efficiency.",
    },
    {
      role: "Curious Intern",
      company: "Everest Engineering",
      period: "Feb 2024 - June 2024",
      description: "Gained hands-on experience in full-stack software development, collaborating closely with experienced team members to build and optimize real-world features. Learned to solve complex technical challenges, quickly adapt to new tools, and implement good coding practices, laying a strong technical foundation.",
      technologies: [
        {
          category: "Frontend & Design",
          items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "React Native", "Figma", "Web Accessibility"],
        },
        {
          category: "Backend & APIs",
          items: ["Node.js", "Express.js", "Ruby on Rails", "REST APIs"],
        },
        {
          category: "Databases & ORM",
          items: ["PostgreSQL", "Sequelize ORM", "MongoDB", "Mongoose ODM"],
        },
        {
          category: "DevOps & Tools",
          items: ["Git", "GitHub Actions", "Jenkins", "CI/CD", "Docker", "AWS"],
        },
        {
          category: "Practices",
          items: ["Test-Driven Development (TDD)", "Agile Development", "Clean Code"],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-16 ml-4 md:ml-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My professional journey in software engineering and development
          </p>
        </motion.div>

        <div className="relative border-l border-muted-foreground/20 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline Bullet */}
              <div className="absolute -left-[17px] top-1 bg-background border-2 border-primary w-8 h-8 rounded-full flex items-center justify-center shadow-card group-hover:bg-primary transition-colors duration-300">
                <Briefcase className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300" />
              </div>

              <Card className="p-6 md:p-8 shadow-card hover:shadow-hover transition-smooth bg-gradient-card border-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-lg font-semibold text-primary">
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex items-center text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full text-sm w-fit">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>

                {exp.technologies && (
                  <div className="space-y-4 border-t border-muted-foreground/10 pt-6">
                    <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                      Skills & Technologies Acquired:
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {exp.technologies.map((techCat, catIdx) => (
                        <div key={catIdx} className="space-y-2">
                          <h5 className="text-xs font-bold text-primary/80 uppercase">
                            {techCat.category}
                          </h5>
                          <div className="flex flex-wrap gap-1.5">
                            {techCat.items.map((item, itemIdx) => (
                              <span
                                key={itemIdx}
                                className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-muted text-foreground/80 border border-muted"
                              >
                                <CheckCircle2 className="w-2.5 h-2.5 mr-1 text-green-500" />
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
