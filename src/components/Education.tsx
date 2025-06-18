
const Education = () => {
  const educationData = [
    {
      period: '2023 - 2026',
      title: 'Diploma in Computer Science & Engineering',
      status: 'Ongoing',
      description: 'Currently pursuing comprehensive studies in computer science fundamentals and practical applications.',
    },
    {
      period: '2023',
      title: 'Intermediate Education',
      status: 'Completed',
      description: 'Successfully completed intermediate education with focus on science and mathematics.',
    },
    {
      period: '2021',
      title: 'High School',
      status: 'Completed',
      description: 'Completed high school education with strong academic performance.',
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 glow-text">
            Education
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            {educationData.map((edu, index) => (
              <div key={index} className="relative flex items-start mb-12">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background animate-pulse-glow"></div>
                
                {/* Content */}
                <div className="ml-20 section-glow p-6 rounded-lg w-full hover:glow-border transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground">{edu.title}</h3>
                    <div className="flex items-center space-x-4">
                      <span className="text-primary font-medium">{edu.period}</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'Ongoing' 
                          ? 'bg-primary/20 text-primary border border-primary/30' 
                          : 'bg-green-500/20 text-green-400 border border-green-500/30'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
