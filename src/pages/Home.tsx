import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Sparkles, Code, Palette, Lightbulb, Heart, Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { useToast } from "@/hooks/use-toast";

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "TailwindCSS", "Next.js"] },
  { category: "Backend", items: ["Python", "Flask", "Node.js", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "Docker", "Figma", "VS Code"] },
  { category: "Soft Skills", items: ["Problem Solving", "Communication", "Teamwork", "Adaptability"] },
];

const values = [
  {
    icon: Code,
    title: "Clean Code",
    description: "I believe in writing code that's easy to read, maintain, and scale.",
    color: "bg-lavender/30",
  },
  {
    icon: Palette,
    title: "Thoughtful Design",
    description: "Every pixel matters. I craft interfaces that are both beautiful and functional.",
    color: "bg-sage/30",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "Technology evolves, and so do I. I'm always exploring new tools and techniques.",
    color: "bg-baby-blue/30",
  },
  {
    icon: Heart,
    title: "User First",
    description: "The best solutions come from truly understanding user needs.",
    color: "bg-peach/30",
  },
];

const Home = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section id="home" className="gradient-hero min-h-[80vh] flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lavender/50 text-sm font-medium text-foreground mb-6">
                <Sparkles size={14} />
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="animate-fade-up-delay-1 font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              I craft digital
              <br />
              <span className="text-lavender-deep">experiences</span>
            </h1>
            
            <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
              A passionate developer focused on creating beautiful, functional, 
              and user-centered digital experiences.
            </p>
            
            <div className="animate-fade-up-delay-3 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-foreground/20 text-foreground font-medium hover:bg-foreground/5 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-full max-w-md mx-auto aspect-square rounded-3xl bg-lavender/30 flex items-center justify-center animate-float">
                <span className="font-display text-6xl font-bold text-lavender-deep/50">
                  👋
                </span>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                About Me
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a full-stack developer with a passion for creating beautiful, 
                  functional applications. My journey in tech started with curiosity 
                  about how things work, and it has evolved into a career focused on 
                  solving real problems.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new coffee shops, 
                  reading about design systems, or contributing to open-source projects. 
                  I believe in the power of technology to make life better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-cream/50">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            What I Value
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="pastel-card text-center">
                <div className={`w-14 h-14 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <value.icon size={24} className="text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skillGroup, index) => {
              const colors = ["bg-lavender/20", "bg-sage/20", "bg-baby-blue/20", "bg-peach/20"];
              return (
                <div key={skillGroup.category} className={`pastel-card ${colors[index % 4]} hover:shadow-card hover:translate-y-0`}>
                  <h3 className="font-display font-semibold text-foreground mb-4">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-sm text-muted-foreground">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-sage/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Projects
            </h2>
            <p className="text-muted-foreground">
              A collection of projects I've worked on
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No projects yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-peach/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Get in Touch
            </h2>
            <p className="text-muted-foreground">
              Have a project in mind or just want to say hello?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-8">
                  Whether you're looking to collaborate on a project, have a question, 
                  or just want to chat about technology and design, I'm always happy to connect.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-lavender/20 hover:bg-lavender/30 transition-colors"
                >
                  <div className="p-3 rounded-xl bg-lavender/50">
                    <Mail size={20} className="text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">hello@example.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-sage/20">
                  <div className="p-3 rounded-xl bg-sage/50">
                    <MapPin size={20} className="text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-display font-semibold text-foreground mb-4">
                  Find me online
                </h4>
                <div className="flex gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-lavender/30 hover:bg-lavender/50 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} className="text-foreground" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-baby-blue/30 hover:bg-baby-blue/50 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} className="text-foreground" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="pastel-card hover:shadow-card hover:translate-y-0">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-lavender-deep/50 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-lavender-deep/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-lavender-deep/50 transition-all resize-none"
                    placeholder="Tell me about your project or just say hi..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
                >
                  <Send size={18} />
                  Send Message
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
