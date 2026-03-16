import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Estate Navigator",
    description:
      "Full-stack real estate platform with property listings, advanced search filters, secure authentication, and real-time chat functionality.",
    image: "/projects/project1.png",
    tags: ["MERN", "MongoDB", "Express", "React", "Node.js", "Socket.IO"],
    demoUrl: "https://mern-real-estate-3k49.onrender.com",
    githubUrl: "https://github.com/shreyasConnect/mern-real-estate",
  },

  {
    id: 2,
    title: "CineBinge",
    description:
      "Modern movie explorer built using React and the OMDb API. Users can search movies, like and save favorites with local storage, and view detailed movie information including cast, ratings, and plot.",
    image: "/projects/project2.png",
    tags: ["React", "JavaScript", "OMDb API", "CSS"],
    demoUrl: "https://cinebinge.onrender.com/",
    githubUrl: "https://github.com/shreyasConnect/cinebinge",
  },

  {
    id: 3,
    title: "API Guardian",
    description:
      "Automated API testing framework built with TypeScript, Jest, and Supertest to validate REST API endpoints, response schemas, and error handling scenarios.",
    image: "/projects/project3.png",
    tags: ["TypeScript", "Node.js", "Jest", "Supertest"],
    demoUrl: "#",
    githubUrl: "https://github.com/shreyasConnect/API-Guardian",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing my experience in full-stack
          development, API testing, and building scalable web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >

              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">

                    {project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>

                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/shreyasConnect"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};