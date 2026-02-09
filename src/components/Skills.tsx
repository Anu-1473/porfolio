import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Database,
  Palette,
  BarChart,
  Users,
  Target,
  Lightbulb,
  GitBranch,
  Globe,
  Smartphone,
  Brain,
  TrendingUp,
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Technical Skills",
      items: [
        { name: "React & TypeScript", icon: Code2, level: "Advanced" },
        { name: "Node.js & Python", icon: Database, level: "Intermediate" },
        { name: "SQL & Analytics", icon: BarChart, level: "Advanced" },
        { name: "UI/UX Design", icon: Palette, level: "Intermediate" },
      ],
    },
    {
      category: "Product Management",
      items: [
        { name: "Product Strategy", icon: Target, level: "Advanced" },
        { name: "User Research", icon: Users, level: "Advanced" },
        { name: "Data Analysis", icon: TrendingUp, level: "Advanced" },
        { name: "Innovation", icon: Lightbulb, level: "Intermediate" },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git & GitHub", icon: GitBranch, level: "Advanced" },
        { name: "Web Technologies", icon: Globe, level: "Advanced" },
        { name: "Mobile Development", icon: Smartphone, level: "Beginner" },
        { name: "Product Analytics", icon: Brain, level: "Intermediate" },
      ],
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-green-500";
      case "Intermediate":
        return "bg-yellow-500";
      case "Beginner":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case "Advanced":
        return "w-5/6";
      case "Intermediate":
        return "w-3/5";
      case "Beginner":
        return "w-1/3";
      default:
        return "w-1/2";
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A blend of technical expertise and product management capabilities
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skills.map((category, categoryIndex) => (
            <motion.div key={category.category} variants={itemVariants}>
              <Card className="p-6 h-full shadow-card hover:shadow-hover transition-smooth gradient-card border-0">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  {category.category}
                </h3>

                <div className="space-y-6">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1 + skillIndex * 0.1,
                      }}
                      whileHover={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg gradient-primary">
                            <skill.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}
                        </span>
                      </div>

                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "var(--target-width)" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className={`h-2 rounded-full ${getLevelColor(
                            skill.level
                          )} ${getLevelWidth(skill.level)}`}
                          style={
                            {
                              "--target-width":
                                getLevelWidth(skill.level)
                                  .replace("w-", "")
                                  .replace("/", "") + "%",
                            } as any
                          }
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
