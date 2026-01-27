import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-border py-2 shadow-sm"
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:scale-105 transition-transform">
            <BookOpen className="h-6 w-6" />
          </div>
          <span className={cn(
            "font-heading font-bold text-xl tracking-tight transition-colors",
             scrolled ? "text-primary" : "text-white"
          )}>
            Excellence Academy
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["Home", "About", "Courses", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={cn(
                "text-sm font-medium hover:text-accent transition-colors",
                scrolled ? "text-foreground" : "text-white/90 hover:text-white"
              )}
            >
              {item}
            </button>
          ))}
          <Button 
            variant={scrolled ? "default" : "secondary"}
            onClick={() => scrollToSection("contact")}
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </nav>
  );
}
