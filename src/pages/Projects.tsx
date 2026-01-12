import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { MouseTrail } from "@/components/ui/MouseTrail";
import { Sparkles } from "lucide-react";

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    // Extract unique categories
    const categories = ["All", ...Array.from(new Set(projects.flatMap((p) => p.category.split(" / "))))];

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category.includes(activeCategory));

    return (
        <Layout>
            <MouseTrail />
            <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-background">
                {/* Background Elements */}
                <div className="absolute inset-0 -z-10 bg-background">
                    <div className="absolute top-20 right-0 w-96 h-96 bg-lavender/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-baby-blue/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
                    <Sparkles className="absolute top-40 left-[10%] text-lavender animate-pulse w-6 h-6 opacity-40" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                            <span className="text-gradient">All Projects</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            A complete collection of my work, ranging from cloud architecture to web development.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20 glass-card">
                            <p className="text-muted-foreground text-lg">No projects found in this category.</p>
                            <button
                                onClick={() => setActiveCategory("All")}
                                className="mt-4 text-lavender-deep font-semibold hover:underline"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Projects;
