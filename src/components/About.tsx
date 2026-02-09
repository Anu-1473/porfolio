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
            <span className="gradient-primary bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the passion for product management and
            development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 shadow-elegant gradient-card border-0">
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
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Hello! I'm Anusha, and I love building things that live on the
              internet.
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My journey in tech started during my computer science studies,
                where I discovered my passion for understanding user needs and
                translating them into meaningful digital experiences. I found
                myself naturally gravitating towards the intersection of
                technology, business, and user experience.
              </p>

              <p>
                As an aspiring product manager, I combine analytical thinking
                with creative problem-solving to build products that users love.
                My technical background in full-stack development gives me a
                unique perspective on what's feasible and helps me communicate
                effectively with engineering teams.
              </p>

              <p>
                When I'm not coding or analyzing user data, you can find me
                exploring new technologies, reading about product strategy, or
                working on side projects that solve everyday problems.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} className="pt-4">
              <Button
                size="lg"
                className="gradient-primary hover:shadow-hover transition-smooth group"
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
