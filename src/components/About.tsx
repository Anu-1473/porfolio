import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the developer behind the code and passion for building impactful solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 shadow-elegant bg-gradient-card border-0">
              <img
                src={profilePhoto}
                alt="Anusha"
                className="w-full h-96 object-cover rounded-lg shadow-card"
              />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-center"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Hello! I'm Anusha, a dedicated Software Developer who loves building things that live on the internet.
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a motivated and enthusiastic developer who enjoys building user-friendly interfaces and writing clean, maintainable code. My engineering journey has allowed me to design and develop full-stack applications with robust frontends, highly responsive backend APIs, and structured database systems.
              </p>

              <p>
                I thrive in collaborative team environments and appreciate good engineering practices like Test-Driven Development (TDD), agile methodologies, and clean code. I am quick to learn and always eager to take on new technical challenges to expand my stack.
              </p>

              <p>
                In my free time, I love reading stories, biographies, and technical books. I also enjoy growing plants and spending time in nature, which keeps me grounded and inspired.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} className="pt-4 flex justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-hover transition-smooth group text-white"
              >
                Know More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
