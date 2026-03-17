import { motion } from "motion/react";
import { Heart, Users, Sparkles } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Heart,
      title: "Mindful Practice",
      description: "Experience the transformative power of mindfulness and intentional movement.",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from certified yoga teachers with years of experience and passion.",
    },
    {
      icon: Sparkles,
      title: "Holistic Wellness",
      description: "Nurture your body, mind, and spirit through our comprehensive programs.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-foreground" style={{ fontWeight: 300 }}>
            Welcome to Our Sanctuary
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At The Yoga Studio, we believe in creating a peaceful space where you can reconnect
            with yourself, find balance, and cultivate inner wellness. Our studio is a sanctuary
            designed for your journey towards holistic health and mindfulness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
