
const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A modern, responsive website built using HTML, CSS, and JavaScript to showcase my profile and skills. Features dark theme, smooth animations, and mobile-first design.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      status: 'Completed',
      image: '🌐',
    },
    {
      title: 'Coming Soon...',
      description: 'More exciting projects are in development. Stay tuned for updates on my latest work and experiments in web development.',
      technologies: ['React', 'TypeScript', 'Node.js'],
      status: 'In Planning',
      image: '🚀',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 glow-text">
            My Work
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="section-glow rounded-lg overflow-hidden hover:glow-border transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                  <span className="text-6xl">{project.image}</span>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <button 
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-2 px-4 rounded-lg font-medium transition-colors glow-button"
                      onClick={() => window.open('https://adityavis007-portoflio.lovable.app/', '_blank')}
                    >
                      View Project
                    </button>
                    <button className="flex-1 border border-primary text-primary hover:bg-primary hover:text-primary-foreground py-2 px-4 rounded-lg font-medium transition-colors">
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
