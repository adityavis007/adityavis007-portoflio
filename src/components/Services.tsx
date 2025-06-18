
const Services = () => {
  const services = [
    {
      icon: '🎨',
      title: 'Web Design',
      description: 'Creating modern, responsive and visually appealing websites with clean and aesthetic design principles.',
    },
    {
      icon: '💻',
      title: 'Frontend Development',
      description: 'Building interactive and responsive web applications using modern technologies and best practices.',
    },
    {
      icon: '🔧',
      title: 'Problem Solving',
      description: 'Analyzing complex problems and developing efficient solutions through logical thinking and creativity.',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 glow-text">
            Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="section-glow p-8 rounded-lg text-center hover:glow-border transition-all duration-300 transform hover:scale-105 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-5xl mb-6 group-hover:animate-bounce">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-primary">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="section-glow p-8 rounded-lg max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Approach</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "I create responsive and modern websites with clean code and aesthetic design. 
                My focus is on delivering quality work that combines functionality with beautiful design, 
                ensuring every project meets both user needs and modern web standards."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
