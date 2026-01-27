import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, GraduationCap, Users, Trophy, BookOpen, Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-students.png";
import aboutImage from "@/assets/about-class.png";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Home() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Inquiry Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    form.reset();
  }

  const courses = [
    {
      title: "Mathematics Mastery",
      level: "Grade 9-12",
      description: "Advanced calculus, algebra, and geometry coaching designed for competitive exams.",
      icon: "∫dx",
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Physics Fundamentals",
      level: "Grade 10-12",
      description: "Comprehensive coverage of mechanics, thermodynamics, and electromagnetism.",
      icon: "E=mc²",
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "Chemistry Lab",
      level: "Grade 10-12",
      description: "Organic, inorganic, and physical chemistry with practical application focus.",
      icon: "⚗️",
      color: "bg-teal-100 text-teal-700",
    },
    {
      title: "English Literature",
      level: "All Grades",
      description: "Critical analysis, creative writing, and advanced grammar workshops.",
      icon: "Aa",
      color: "bg-rose-100 text-rose-700",
    },
    {
      title: "Biology & Life Sciences",
      level: "Grade 9-12",
      description: "In-depth study of anatomy, genetics, and ecology for medical aspirants.",
      icon: "🧬",
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Computer Science",
      level: "Grade 8-12",
      description: "Programming logic, algorithms, and web development basics.",
      icon: "</>",
      color: "bg-orange-100 text-orange-700",
    },
  ];

  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <Badge className="bg-accent text-primary-foreground hover:bg-accent/90 mb-4 px-4 py-1 text-sm uppercase tracking-wide">
              Admissions Open for 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">
              Unlock Your <span className="text-accent italic">Academic Potential</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Experience personalized coaching that transforms ambitious students into academic achievers. Join the academy where excellence is a habit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-accent text-primary-foreground hover:bg-accent/90 text-lg px-8 h-14">
                Explore Courses
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 h-14">
                Meet Our Faculty
              </Button>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* About Section */}
      <Section id="about">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              More Than Just a Classroom
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Excellence Academy, we believe that every student has a unique learning style. Our methodology moves beyond rote memorization to foster critical thinking and deep understanding.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Personalized mentorship programs",
                "Small batch sizes (max 15 students)",
                "Regular progress tracking & feedback",
                "State-of-the-art learning resources"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span className="font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6">
              <Button variant="outline" className="gap-2">
                Read Our Story <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-2xl rotate-3 -z-10" />
            <img 
              src={aboutImage} 
              alt="Classroom" 
              className="rounded-xl shadow-2xl w-full object-cover aspect-4/3"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border border-border max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-primary">98%</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Success Rate</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Of our students secure admission in their dream universities.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, count: "5000+", label: "Students Mentored" },
              { icon: GraduationCap, count: "1200+", label: "University Admissions" },
              { icon: BookOpen, count: "50+", label: "Expert Faculty" },
              { icon: Trophy, count: "15", label: "Years of Excellence" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <stat.icon className="h-8 w-8 mx-auto text-accent mb-4" />
                <div className="text-4xl font-bold font-heading">{stat.count}</div>
                <div className="text-white/70 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <Section id="courses" variant="alternate">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Curated Courses for Success
          </h2>
          <p className="text-muted-foreground">
            Whether you're preparing for board exams or competitive entrance tests, we have a specialized program for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold mb-4", course.color)}>
                    {course.icon}
                  </div>
                  <Badge variant="outline" className="mb-3">{course.level}</Badge>
                  <h3 className="text-xl font-bold mb-2 text-primary">{course.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {course.description}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary font-semibold group">
                    View Syllabus <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <div className="max-w-5xl mx-auto bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
          <div className="grid md:grid-cols-2">
            <div className="bg-primary p-8 md:p-12 text-primary-foreground flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-heading font-bold mb-4">Start Your Journey</h2>
                <p className="text-white/80 mb-8">
                  Fill out the form to schedule a free counseling session or get detailed course brochures.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Call Us</h4>
                      <p className="text-white/70">+1 (555) 123-4567</p>
                      <p className="text-xs text-white/50">Mon-Sat, 9am - 6pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Email Us</h4>
                      <p className="text-white/70">admissions@excellence.edu</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative circles */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="p-8 md:p-12 bg-white">
              <form 
                action="https://docs.google.com/forms/d/e/1FAIpQLSeMXgWFuIaG58hPiho0HFPOsNHeBzBM7JPQufLXU0doFdqJ7w/formResponse" 
                method="POST"
                target="_blank"
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">Full Name</label>
                  <input 
                    name="entry.123456789"
                    required
                    placeholder="John Doe" 
                    className="flex h-10 w-full rounded-md border border-input bg-muted/30 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Email</label>
                    <input 
                      name="entry.234567890"
                      type="email"
                      required
                      placeholder="john@example.com" 
                      className="flex h-10 w-full rounded-md border border-input bg-muted/30 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Phone</label>
                    <input 
                      name="entry.345678901"
                      required
                      placeholder="(555) 000-0000" 
                      className="flex h-10 w-full rounded-md border border-input bg-muted/30 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">Message</label>
                  <textarea 
                    name="entry.456789012"
                    required
                    placeholder="Tell us about your learning goals..." 
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-muted/30 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none" 
                  />
                </div>

                <Button type="submit" className="w-full h-12 text-lg bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
