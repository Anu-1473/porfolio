import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Calendar, ExternalLink } from "lucide-react";

const Education = () => {
  const educationItems = [
    {
      degree: "B.Tech in CSE (Computer Science & Engineering)",
      institution: "Rajiv Gandhi University of Knowledge Technologies, Basar",
      period: "2020 - 2024",
      description: "Focused on core Computer Science subjects including Algorithms, DBMS, Operating Systems, Computer Networks, and Software Engineering. Built various academic projects applying web development technologies.",
    },
    {
      degree: "Pre University Course",
      institution: "Rajiv Gandhi University of Knowledge Technologies, Basar",
      period: "2018 - 2020",
      description: "Completed foundation course in Mathematics, Physics, Chemistry, and Computer Science.",
    },
  ];

  const certificationItems = [
    {
      title: "Stripe Certified Billing Developer",
      issuer: "Stripe",
      date: "April 17, 2025",
      badge: "Professional Certification",
    },
    {
      title: "Stripe Certified Professional Developer",
      issuer: "Stripe",
      date: "April 11, 2025",
      badge: "Professional Certification",
    },
    {
      title: "Stripe Certified Associate Developer",
      issuer: "Stripe",
      date: "April 6, 2025",
      badge: "Associate Certification",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education &{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My academic credentials and professional developer certifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-full bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-6">
              {educationItems.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-6 shadow-card hover:shadow-hover transition-smooth bg-gradient-card border-0 space-y-3">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="text-xl font-bold text-foreground leading-tight">
                        {edu.degree}
                      </h4>
                      <span className="flex items-center text-xs font-semibold text-muted-foreground bg-muted px-2.5 py-1 rounded-full whitespace-nowrap">
                        <Calendar className="w-3 h-3 mr-1 text-primary" />
                        {edu.period}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-primary block">
                      {edu.institution}
                    </span>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>

            <div className="space-y-6">
              {certificationItems.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-6 shadow-card hover:shadow-hover transition-smooth bg-gradient-card border-0">
                    <div className="flex justify-between items-center gap-4">
                      <div className="space-y-1">
                        <h4 className="text-lg font-bold text-foreground">
                          {cert.title}
                        </h4>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span className="font-semibold text-primary/80">{cert.issuer}</span>
                          <span>•</span>
                          <span className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1 text-primary" />
                            {cert.date}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 dark:text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-200/50 dark:border-emerald-800/30 whitespace-nowrap">
                        {cert.badge}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
