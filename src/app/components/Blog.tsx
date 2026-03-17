import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";

export function Blog() {
  const posts = [
    {
      title: "5 Breathing Techniques for Stress Relief",
      excerpt:
        "Discover powerful pranayama practices that can help calm your mind and reduce anxiety in just minutes a day.",
      category: "Breathwork",
      date: "March 10, 2026",
    },
    {
      title: "The Benefits of Morning Yoga Practice",
      excerpt:
        "Learn how starting your day with yoga can transform your energy, focus, and overall well-being.",
      category: "Wellness",
      date: "March 8, 2026",
    },
    {
      title: "Mindfulness Meditation for Beginners",
      excerpt:
        "A gentle introduction to meditation practices that can help you cultivate presence and inner peace.",
      category: "Meditation",
      date: "March 5, 2026",
    },
  ];

  return (
    <section id="blog" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-foreground" style={{ fontWeight: 300 }}>
            Wellness Tips & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our latest articles on yoga, mindfulness, and holistic wellness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-border/50 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
