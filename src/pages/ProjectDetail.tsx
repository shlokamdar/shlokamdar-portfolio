import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Calendar, Clock, User, Tag, Zap, Code, Lightbulb, ArrowRight } from "lucide-react";
import { getProjectById } from "@/data/projects";
import Layout from "@/components/layout/Layout";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  // Handle both number and string IDs by ensuring we check properly
  const project = id ? getProjectById(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Project not found</h2>
            <Link to="/" className="text-primary hover:underline">
              Return Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 bg-background/50">
          <div className="absolute top-0 right-0 w-96 h-96 bg-lavender/20 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-baby-blue/20 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="container mx-auto px-6 max-w-4xl">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          {/* Article Header */}
          <header className="mb-12 text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium text-foreground mb-6">
              <Tag size={14} />
              {project.category}
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-peach/50 flex items-center justify-center text-foreground font-bold">
                  SK
                </div>
                <span>{project.author || "Shloka Kamdar"}</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-border"></span>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {project.date || "Recently"}
              </div>
              <span className="w-1 h-1 rounded-full bg-border"></span>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                {project.readTime || "5 min read"}
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-3xl overflow-hidden mb-16 shadow-2xl ring-1 ring-white/10 animate-fade-up-delay-1">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Body */}
          <article className="prose prose-lg dark:prose-invert max-w-none animate-fade-up-delay-2">
            {/* Overview - styled as lead paragraph */}
            <div className="glass-card p-8 mb-12 border-l-4 border-lavender">
              <p className="text-xl leading-relaxed text-foreground font-medium m-0">
                {project.description}
              </p>
            </div>

            {/* Problem & Solution */}
            {project.problem && (
              <div className="mb-12">
                <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-3">
                  <Zap className="text-orange-400" /> The Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="mb-12">
                <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-3">
                  <Lightbulb className="text-yellow-400" /> The Solution
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}

            {/* Tech Stack */}
            <div className="my-12">
              <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
                <Code className="text-baby-blue" /> Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-secondary/30 text-secondary-foreground font-medium text-sm border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Action Footer */}
          <div className="mt-16 pt-8 border-t border-border flex flex-wrap gap-4 justify-center">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-bold hover:opacity-90 transition-opacity"
              >
                <Github size={20} />
                View Source Code
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-bold hover:bg-secondary/80 transition-colors"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
