
const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', level: 90, icon: '🌐' },
    { name: 'CSS', level: 85, icon: '🎨' },
    { name: 'Java', level: 75, icon: '☕' },
    { name: 'C Language', level: 70, icon: '💻' },
    { name: 'DBMS', level: 65, icon: '🗄️' },
  ];

  const softSkills = [
    { name: 'Creativity', icon: '💡' },
    { name: 'Problem Solving', icon: '🧩' },
    { name: 'Teamwork', icon: '👥' },
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 glow-text">
            Skills
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-primary">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="section-glow p-6 rounded-lg hover:glow-border transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-primary font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-primary">Soft Skills</h3>
              <div className="grid gap-6">
                {softSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="section-glow p-8 rounded-lg text-center hover:glow-border transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${(index + technicalSkills.length) * 0.1}s` }}
                  >
                    <div className="text-4xl mb-4">{skill.icon}</div>
                    <h4 className="text-xl font-semibold">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
