import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: "default" | "alternate";
}

export function Section({ children, id, className, variant = "default", ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-32 relative overflow-hidden",
        variant === "alternate" ? "bg-muted/50" : "bg-background",
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
