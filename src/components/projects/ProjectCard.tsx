import { Project } from "@/data/projects";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group flex flex-col h-full animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="glass-card overflow-hidden h-full flex flex-col hover:border-lavender/50 transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="glass-card px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-md border-white/20">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {project.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {project.readTime}
            </span>
          </div>

          <h3 className="font-display font-bold text-xl text-foreground mb-3 leading-tight group-hover:text-lavender-deep transition-colors">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
            {project.shortDescription || project.description}
          </p>

          <span className="inline-flex items-center gap-2 text-sm font-semibold text-lavender-deep group-hover:gap-3 transition-all">
            Read Article <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
