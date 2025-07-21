import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {   id: 1,
        title: "Project One",
        description: "Description for project one.",
        image: "/projects/Frame 1.png",
        tags :["HTML5", "React", "JavaScript"],
        demoUrl: "https://project-one-demo.com",
        githubUrl: "https://github.com/user/project-one",
    },

    {
        id: 2,
        title: "Project Two",
        description: "Description for project one.",
        image: "/projects/Frame 2.png",
        tags :["CSS3", "React", "JavaScript"],
        demoUrl: "https://project-one-demo.com",
        githubUrl: "https://github.com/user/project-one",
    },
    {
        id: 3,
        title: "Project Three",
        description: "Description for project one.",
        image: "/projects/Frame 3.png",
        tags :["React", "JavaScript"],
        demoUrl: "https://project-one-demo.com",
        githubUrl: "https://github.com/user/project-one",
    },
    {
        id: 4,
        title: "Project Four",
        description: "Description for project one.",
        image: "/projects/Frame 4.png",
        tags :["React", "JavaScript"],
        demoUrl: "https://project-one-demo.com",
        githubUrl: "https://github.com/user/project-one",
    },
    {
        id: 5,
        title: "Project Five",
        description: "Description for project one.",
        image: "/projects/Frame 5.png",
        tags :["Tailwind CSS","React", "JavaScript"],
        demoUrl: "https://project-one-demo.com",
        githubUrl: "https://github.com/user/project-one",
    },
    {
        id: 6,
        title: "Project Six",
        description: "Description for project one.",
        image: "/projects/Frame 6.png",
        tags :["HTML5", "React", "JavaScript"],
        demoUrl: "https://project-one-demo.com",
        githubUrl: "https://github.com/user/project-one",
    },
];

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative bg-secondary/20">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured<span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of the projects I've worked on recently. each project was crafted with attention to details, performance, and user experience in mind.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card p-2 rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden"> 
<img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6"> 
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>  
                            </div>
                           <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                           <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                           <div className="flex justify-between items-center">
                               <div className="flex space-x-3">
                                   <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                       <ExternalLink  size={20}/>
                                       
                                   </a>
                                   <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                       <Github  size={20} />
                                   </a>
                               </div>
                           </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="https://github.com/Pavan-Balaraju" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
