import { motion } from "motion/react";
import { Flower2 } from "lucide-react";

export function Footer() {
  const footerLinks = {
    Classes: ["Beginner Yoga", "Advanced Flow", "Prenatal Yoga", "Restorative Yoga"],
    Studio: ["About Us", "Our Instructors", "Schedule", "Gallery"],
    Resources: ["Blog", "Wellness Tips", "FAQs", "Contact"],
  };

  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Flower2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl" style={{ fontWeight: 300 }}>
                The Yoga Studio
              </span>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              A sanctuary for your mind, body, and spirit. Find your balance and nurture your
              wellness journey with us.
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="mb-4" style={{ fontWeight: 500 }}>
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-background/10 text-center"
        >
          <p className="text-sm text-background/70">
            © 2026 The Yoga Studio. All rights reserved. Peace, balance, and wellness.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
