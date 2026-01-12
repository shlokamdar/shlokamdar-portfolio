import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Sparkles, Code, Palette, Lightbulb, Heart, Mail, MapPin, Send, Github, Linkedin, Star, Cloud, Moon, Zap, Coffee, Music, ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { personalData } from "@/data/config";
import { useToast } from "@/hooks/use-toast";

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "TailwindCSS", "Next.js"] },
  { category: "Backend", items: ["Python", "Flask", "Node.js", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "Docker", "Figma", "VS Code"] },
  { category: "Soft Skills", items: ["Problem Solving", "Communication", "Teamwork", "Adaptability"] },
];

const values = [
  {
    icon: Sparkles,
    title: "Clarity over complexity",
    description: "I believe simple, well-structured solutions are better than over-engineered ones.",
    color: "bg-lavender/30",
  },
  {
    icon: Code,
    title: "Ownership",
    description: "If something breaks, I take responsibility for fixing it and understanding the root cause.",
    color: "bg-sage/30",
  },
  {
    icon: Lightbulb,
    title: "Continuous learning",
    description: "I’m always improving my skills by building, experimenting, and staying curious.",
    color: "bg-baby-blue/30",
  },
  {
    icon: Zap,
    title: "Reliability",
    description: "I value systems that are secure, predictable, and production-ready.",
    color: "bg-peach/30",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "I’m honest about what I know, what I don’t, and I put quality and correctness first.",
    color: "bg-lavender/30",
  },
];

import { MouseTrail } from "@/components/ui/MouseTrail";

const Home = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  // Handle scroll to section when navigating from another page
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      setTimeout(() => {
        const element = document.querySelector(state.scrollTo!);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      // Clear the state
      window.history.replaceState({}, document.title);
    } else if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/shlokamdar@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      <MouseTrail />
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 -z-10 bg-background">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-lavender rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-baby-blue rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-peach rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute inset-0 bg-background/50 backdrop-blur-[100px]"></div>

          {/* Whimsical Stars */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <Sparkles className="absolute top-20 left-[10%] text-lavender animate-pulse w-6 h-6 opacity-60" style={{ animationDuration: '3s' }} />
            <Sparkles className="absolute top-40 right-[15%] text-baby-blue animate-pulse w-4 h-4 opacity-50" style={{ animationDuration: '4s', animationDelay: '1s' }} />
            <Star className="absolute bottom-32 left-[20%] text-peach animate-bounce w-5 h-5 opacity-40" style={{ animationDuration: '5s', animationDelay: '0.5s' }} />
            <Star className="absolute top-1/3 left-1/2 text-white animate-pulse w-3 h-3 opacity-30" style={{ animationDuration: '2s' }} />
            <Star className="absolute bottom-1/4 right-[25%] text-sage animate-bounce w-4 h-4 opacity-40" style={{ animationDuration: '6s', animationDelay: '2s' }} />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">


            <h1 className="animate-fade-up-delay-1 font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-8 tracking-tight">
              I'm {personalData.name},
              <br />
              <span className="text-gradient">Unknown Limits</span>
            </h1>

            <p className="animate-fade-up-delay-2 text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              Creating digital experiences that matter. From secure cloud architectures to pixel-perfect web applications, I build solutions that are as robust as they are beautiful.
            </p>

            <div className="animate-fade-up-delay-3 flex flex-wrap gap-6">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg hover:pr-10 transition-all duration-300 w-full sm:w-auto"
              >
                View Projects
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-border bg-white/5 backdrop-blur-sm text-foreground font-medium hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background relative overflow-hidden">
        {/* Whimsical Background */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <Cloud className="absolute top-20 right-[10%] text-lavender w-12 h-12 animate-bounce" style={{ animationDuration: '6s' }} />
          <Moon className="absolute bottom-40 left-[5%] text-baby-blue w-8 h-8 animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute top-1/2 left-1/3 w-2 h-2 rounded-full bg-peach animate-ping" style={{ animationDuration: '3s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Bio & Intro */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-4xl md:text-4xl font-bold text-center lg:text-left mb-8">
                  <span className="text-gradient">About Me</span>
                </h2>
                <div className="glass-card p-6 md:p-8">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {personalData.bio}
                  </p>

                  <div
                    className="mt-6 group relative inline-flex items-center gap-4 px-6 py-4 rounded-3xl bg-white/40 border border-lavender/30 shadow-sm hover:shadow-md hover:bg-white/60 hover:scale-[1.02] transition-all duration-300 cursor-pointer backdrop-blur-sm w-fit"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span className="text-4xl animate-wave origin-bottom-right inline-block group-hover:rotate-12 transition-transform filter drop-shadow-sm">👋</span>
                    <div className="flex flex-col">
                      <span className="font-handwriting text-2xl font-bold bg-gradient-to-r from-lavender-deep to-primary bg-clip-text text-transparent">
                        Come say hi!
                      </span>
                      <span className="text-xs font-medium text-muted-foreground group-hover:text-lavender-deep transition-colors">
                        Always happy to chat & collaborate
                      </span>
                    </div>
                    <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 animate-pulse" />
                  </div>
                </div>
              </div>


            </div>

            {/* Experience */}
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <span className="p-2 rounded-lg bg-baby-blue/30 text-foreground">
                  <Code size={24} />
                </span>
                Experience
              </h3>
              <div className="space-y-6 relative pl-6 border-l-2 border-white/10 ml-3">
                {personalData.experience.map((exp, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <span className="absolute -left-[31px] top-6 w-4 h-4 rounded-full bg-background border-2 border-lavender ring-4 ring-background"></span>

                    <div className="glass-card p-6 group hover:border-baby-blue/50 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <h4 className="font-bold text-foreground text-xl">{exp.role}</h4>
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-white/5 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-lavender-deep font-medium mb-4 flex items-center gap-2">
                        {exp.company}
                        <span className="w-1 h-1 rounded-full bg-border"></span>
                        <span className="text-muted-foreground text-sm font-normal">{exp.location}</span>
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {exp.description}
                      </p>

                      {/* Work URL Button */}
                      {(exp as any).work_url && (
                        <div className="mt-4">
                          <a
                            href={(exp as any).work_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-semibold text-lavender-deep bg-lavender/10 px-3 py-2 rounded-lg hover:bg-lavender/20 transition-colors"
                          >
                            <ExternalLink size={14} />
                            View Work
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Whimsical Background */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <Heart className="absolute top-10 left-[20%] text-peach w-6 h-6 animate-pulse" style={{ animationDuration: '3s' }} />
          <Music className="absolute bottom-20 right-[20%] text-sage w-8 h-8 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        </div>

        <div className="absolute inset-0 bg-secondary/10 -z-10 clip-path-slant"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="text-gradient">Core Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card text-center group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-white/10 backdrop-blur-md group-hover:bg-white/20 transition-colors shadow-inner`}>
                  <value.icon size={28} className="text-foreground group-hover:text-lavender-deep transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Whimsical Background */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <Zap className="absolute top-20 left-[15%] text-baby-blue w-10 h-10 animate-pulse" style={{ animationDuration: '2s' }} />
          <Code className="absolute bottom-20 right-[10%] text-lavender w-8 h-8 animate-bounce" style={{ animationDuration: '4s' }} />
          <Coffee className="absolute top-1/3 right-1/4 text-peach w-6 h-6 animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(personalData.skills).map(([category, items], index) => {
              return (
                <div
                  key={category}
                  className="glass-card hover:bg-white/15 dark:hover:bg-white/10 transition-colors"
                >
                  <h3 className="font-display font-semibold text-xl text-foreground mb-6 capitalize flex items-center gap-2">
                    <span className="w-2 h-8 rounded-full bg-gradient-to-b from-lavender to-baby-blue"></span>
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="tech-pill text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-sage/20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div className="text-center md:text-left">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Featured Projects
              </h2>
              <p className="text-muted-foreground">
                A selection of my recent work in cloud and development
              </p>
            </div>

            <Link
              to="/projects"
              className="hidden md:inline-flex items-center gap-2 text-lavender-deep font-semibold hover:gap-3 transition-all"
            >
              View All Projects <ArrowRight size={20} />
            </Link>
          </div>


          {/* Category Filter */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            {["All", ...Array.from(new Set(projects.flatMap((p) => p.category.split(" / "))))].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                  ? "bg-foreground text-background scale-105"
                  : "bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground border border-white/10"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative">
            {/* Horizontal Scroll Container */}
            <div className="flex overflow-x-auto gap-6 pb-8 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory">
              {projects
                .filter((project) => activeCategory === "All" || project.category.includes(activeCategory))
                .slice(0, 4)
                .map((project, index) => (
                  <div key={project.id} className="min-w-[300px] md:min-w-[350px] snap-center">
                    <ProjectCard project={project} index={index} />
                  </div>
                ))}

              {/* View More Card */}
              <div className="min-w-[200px] md:min-w-[250px] snap-center flex items-center justify-center">
                <Link
                  to="/projects"
                  className="group flex flex-col items-center gap-4 text-center p-8 rounded-3xl border-2 border-dashed border-white/20 hover:border-lavender hover:bg-white/5 transition-all duration-300 w-full h-[400px] justify-center"
                >
                  <div className="p-4 rounded-full bg-lavender/10 text-lavender-deep group-hover:scale-110 transition-transform">
                    <ArrowRight size={32} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-1">View All</h3>
                    <p className="text-muted-foreground text-sm">See {projects.length} projects</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Mobile View All Button */}
            <div className="mt-8 text-center md:hidden">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-lavender-deep font-semibold"
              >
                View All Projects <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Whimsical Background */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <Send className="absolute top-20 right-[20%] text-lavender w-8 h-8 animate-bounce" style={{ animationDuration: '4s' }} />
          <Mail className="absolute bottom-32 left-[10%] text-baby-blue w-10 h-10 animate-pulse" style={{ animationDuration: '3s' }} />
        </div>

        <div className="absolute inset-0 bg-lavender/5 -z-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-lg">
              Have a project in mind or just want to say hello?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            {/* Contact Info */}
            <div className="space-y-8 lg:sticky lg:top-24">
              <div className="glass-card p-8 bg-gradient-to-br from-white/10 to-transparent">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you're looking to collaborate on a project, have a question,
                  or just want to chat about technology and design, I'm always happy to connect.
                </p>

                <div className="space-y-6">
                  <a
                    href={personalData.socials.email}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                      <Mail size={20} className="text-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                      <p className="font-medium text-foreground group-hover:text-lavender-deep transition-colors">
                        {personalData.socials.email.replace('mailto:', '')}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
                      <MapPin size={20} className="text-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                      <p className="font-medium text-foreground">{personalData.location}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-sm font-medium text-foreground mb-4">Find me online</p>
                  <div className="flex gap-4">
                    <a
                      href={personalData.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:scale-110 transition-all"
                      aria-label="GitHub"
                    >
                      <Github size={20} className="text-foreground" />
                    </a>
                    <a
                      href={personalData.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:scale-110 transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} className="text-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:bg-white/10 focus:border-lavender/50 transition-all backdrop-blur-sm text-base"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:bg-white/10 focus:border-lavender/50 transition-all backdrop-blur-sm text-base"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground ml-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:bg-white/10 focus:border-lavender/50 transition-all backdrop-blur-sm resize-none text-base"
                    placeholder="Tell me about your project or just say hi..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-foreground text-background font-bold text-lg hover:bg-foreground/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
