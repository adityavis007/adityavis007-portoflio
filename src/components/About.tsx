
const About = () => {
  const traits = [
    { label: 'Travel', icon: '✈️' },
    { label: 'Cricket', icon: '🏏' },
    { label: 'Creative', icon: '🎨' },
    { label: 'Problem Solver', icon: '🧩' },
    { label: 'Team Player', icon: '🤝' },
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 glow-text">
            About Me
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            I'm Aditya Vishwakarma, a motivated Computer Science student born on 26/06/2004, 
            who loves exploring new skills and technologies. I enjoy creating projects, learning 
            programming, and have a strong interest in both technology and life beyond code. 
            My journey in web development is driven by curiosity and a passion for creating 
            meaningful digital experiences.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {traits.map((trait, index) => (
              <div
                key={trait.label}
                className="section-glow p-6 rounded-lg text-center hover:glow-border transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3">{trait.icon}</div>
                <h3 className="font-semibold text-foreground">{trait.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
