import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Flower2, Sunrise, Baby, Sparkles } from "lucide-react";

export function Classes() {
  const classes = [
    {
      icon: Sunrise,
      title: "Yoga for Beginners",
      level: "Beginner",
      description:
        "Perfect for those new to yoga. Learn foundational poses, breathing techniques, and mindfulness practices in a supportive environment.",
      duration: "60 min",
      color: "bg-emerald-50",
    },
    {
      icon: Flower2,
      title: "Advanced Yoga & Meditation",
      level: "Advanced",
      description:
        "Deepen your practice with challenging asanas, advanced breathing techniques, and extended meditation sessions.",
      duration: "90 min",
      color: "bg-blue-50",
    },
    {
      icon: Baby,
      title: "Prenatal Yoga",
      level: "All Levels",
      description:
        "Gentle yoga designed for expecting mothers. Focus on strength, flexibility, and relaxation during pregnancy.",
      duration: "60 min",
      color: "bg-pink-50",
    },
    {
      icon: Sparkles,
      title: "Restorative Yoga",
      level: "All Levels",
      description:
        "Deeply relaxing practice using props to support the body. Perfect for stress relief and deep restoration.",
      duration: "75 min",
      color: "bg-purple-50",
    },
  ];

  return (
    <section id="classes" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-foreground" style={{ fontWeight: 300 }}>
            Classes & Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect class for your journey, from beginner-friendly sessions to
            advanced practices and specialty workshops.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {classes.map((classItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-border/50">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 ${classItem.color} rounded-full flex items-center justify-center`}>
                      <classItem.icon className="w-7 h-7 text-primary" />
                    </div>
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                      {classItem.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{classItem.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {classItem.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{classItem.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
