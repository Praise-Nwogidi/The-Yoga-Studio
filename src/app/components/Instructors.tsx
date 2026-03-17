import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Instructors() {
  const instructors = [
    {
      name: "Sarah Mitchell",
      specialty: "Vinyasa & Meditation",
      image:
        "https://images.unsplash.com/photo-1676720372525-612a79029e9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaW5zdHJ1Y3RvciUyMGZlbWFsZXxlbnwxfHx8fDE3NzM3ODEzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "With over 10 years of experience, Sarah brings a gentle yet powerful approach to yoga, helping students find their inner strength.",
    },
    {
      name: "Michael Chen",
      specialty: "Hatha & Restorative",
      image:
        "https://images.unsplash.com/photo-1758599880425-7862af0a4b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaW5zdHJ1Y3RvciUyMG1hbGUlMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NzM3ODEzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Michael's calming presence and deep knowledge of yoga philosophy create a transformative experience for all levels.",
    },
    {
      name: "Emma Rodriguez",
      specialty: "Prenatal & Postnatal",
      image:
        "https://images.unsplash.com/photo-1561742139-4b0210a1894d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVuYXRhbCUyMHlvZ2ElMjB3b21hbnxlbnwxfHx8fDE3NzM3ODEzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Emma specializes in supporting mothers through their pregnancy journey with safe, nurturing yoga practices.",
    },
  ];

  return (
    <section id="instructors" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-foreground" style={{ fontWeight: 300 }}>
            Meet Our Instructors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our certified yoga teachers are passionate about guiding you on your wellness journey
            with expertise and care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow border-border/50">
                <div className="aspect-[3/4] overflow-hidden">
                  <ImageWithFallback
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-1">{instructor.name}</h3>
                  <p className="text-sm text-primary mb-3">{instructor.specialty}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{instructor.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
