import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { getProjectById } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      {/* Header */}
      <section className="pt-24 pb-12 gradient-peach">
        <div className="container mx-auto px-6">
          <Link 
            to="/#projects" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <div className="max-w-3xl">
            <h1 className="animate-fade-up font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <p className="animate-fade-up-delay-1 text-lg text-muted-foreground">
              {project.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Problem & Solution */}
              {(project.problem || project.solution) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.problem && (
                    <div className="pastel-card bg-peach/20 hover:shadow-card hover:translate-y-0">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                        The Problem
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.problem}
                      </p>
                    </div>
                  )}
                  {project.solution && (
                    <div className="pastel-card bg-sage/20 hover:shadow-card hover:translate-y-0">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                        The Solution
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.solution}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Architecture Diagram Placeholder */}
              {project.architectureImage && (
                <div>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    Architecture
                  </h2>
                  <div className="w-full h-64 rounded-2xl bg-lavender/20 flex items-center justify-center border-2 border-dashed border-lavender">
                    <p className="text-muted-foreground text-sm">
                      Architecture diagram placeholder
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <div className="pastel-card hover:shadow-card hover:translate-y-0">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="pastel-card hover:shadow-card hover:translate-y-0">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Links
                </h3>
                <div className="space-y-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-sage/30">
                        <ExternalLink size={16} />
                      </div>
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-lavender/30">
                        <Github size={16} />
                      </div>
                      View Source
                    </a>
                  )}
                  {project.documentationUrl && (
                    <a
                      href={project.documentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-baby-blue/30">
                        <FileText size={16} />
                      </div>
                      Documentation
                    </a>
                  )}
                  {!project.liveUrl && !project.githubUrl && !project.documentationUrl && (
                    <p className="text-sm text-muted-foreground">
                      No external links available
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
