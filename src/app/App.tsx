import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Classes } from "./components/Classes";
import { Instructors } from "./components/Instructors";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Schedule } from "./components/Schedule";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Newsletter signup (placeholder)
    const handleNewsletterSignup = (e: Event) => {
      const form = e.target as HTMLFormElement;
      if (form.id === "newsletter-form") {
        e.preventDefault();
        console.log("Newsletter signup placeholder");
      }
    };

    document.addEventListener("submit", handleNewsletterSignup);
    return () => {
      document.removeEventListener("submit", handleNewsletterSignup);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Classes />
        <Instructors />
        <Gallery />
        <Testimonials />
        <Schedule />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
