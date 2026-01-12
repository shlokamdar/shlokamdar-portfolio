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
            <h2 className="text-2xl font-bold mb-4">Article not found</h2>
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
      <div className="min-h-screen bg-background relative overflow-hidden pb-24">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lavender/10 via-background to-background"></div>

        {/* Hero Section */}
        <div className="container mx-auto px-6 max-w-4xl pt-24 md:pt-32">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>

          <header className="mb-12 animate-fade-up">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
              <span className="px-3 py-1 rounded-full bg-lavender/10 text-lavender-deep font-semibold tracking-wide uppercase">
                {project.category}
              </span>
              <span className="text-muted-foreground flex items-center gap-1">
                <Calendar size={14} />
                {project.date}
              </span>
              <span className="text-muted-foreground flex items-center gap-1">
                <Clock size={14} />
                {project.readTime}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-[1.15] tracking-tight">
              {project.title}
            </h1>

            <div className="flex items-center gap-4 border-b border-border pb-8">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-peach to-lavender flex items-center justify-center text-foreground font-bold shadow-sm">
                SK
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{project.author || "Shloka Kamdar"}</p>
                <p className="text-xs text-muted-foreground">Cloud Engineer & Full Stack Dev</p>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-16 shadow-lg bg-muted/30 animate-fade-up-delay-1 border border-border/50">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain p-4 md:p-8"
            />
          </div>

          {/* Main Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none animate-fade-up-delay-2 prose-headings:font-display prose-headings:font-bold prose-p:text-muted-foreground prose-p:leading-8 prose-li:text-muted-foreground">

            {/* Introduction / Description */}
            <div className="text-xl md:text-2xl leading-relaxed font-medium text-foreground/90 mb-12 font-display">
              {project.description}
            </div>

            {/* Problem Section */}
            {project.problem && (
              <div className="my-12 pl-6 border-l-4 border-orange-400/50 bg-orange-50/5 dark:bg-orange-900/10 p-6 rounded-r-xl">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground mt-0">
                  <Zap className="text-orange-400 w-6 h-6" /> The Challenge
                </h2>
                <p className="m-0">{project.problem}</p>
              </div>
            )}

            {/* Architecture Image (if distinct) */}
            {project.architectureImage && project.architectureImage !== project.image && (
              <figure className="my-12 text-center">
                <div className="rounded-xl overflow-hidden border border-border shadow-md bg-white/50 dark:bg-black/20">
                  <img
                    src={project.architectureImage}
                    alt={`${project.title} Architecture`}
                    className="w-full h-auto max-h-[500px] object-contain mx-auto"
                  />
                </div>
                <figcaption className="text-sm text-muted-foreground mt-3 italic">System Architecture Diagram</figcaption>
              </figure>
            )}

            {/* Solution Section */}
            {project.solution && (
              <div className="my-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-foreground">
                  <Lightbulb className="text-yellow-400 w-8 h-8" /> The Solution
                </h2>
                <p>{project.solution}</p>
              </div>
            )}

            {/* Technologies */}
            <div className="mt-16 pt-8 border-t border-border">
              <h3 className="text-lg font-bold uppercase tracking-wider text-muted-foreground mb-6 flex items-center gap-2">
                <Code size={18} /> Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3 not-prose">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground font-medium text-sm border border-border/50 hover:bg-secondary transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Action Footer */}
          <div className="mt-20 p-8 rounded-3xl bg-muted/30 border border-border text-center">
            <h3 className="font-display text-2xl font-bold mb-6">Interested in this project?</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-bold hover:scale-105 transition-transform"
                >
                  <Github size={20} />
                  View Source on GitHub
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 rounded-full bg-white border border-border text-foreground font-bold hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <ExternalLink size={20} />
                  View Live Demo
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
