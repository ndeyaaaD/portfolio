import { useEffect, useState } from "react";

function About() {
  const [count, setCount] = useState(0);

  const skills = [
    { name: "React", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Node.js", level: 70 },
    { name: "Git / GitHub", level: 75 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < 5) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 pt-28 pb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          À propos de{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">moi</span>
        </h1>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl">
          Passionné par le développement web, je conçois des interfaces modernes et des applications performantes.
        </p>

        <div className="grid grid-cols-3 gap-6 mb-16">
          {[
            { label: "Projets réalisés", value: count + "+" },
            { label: "Années d'expérience", value: "2+" },
            { label: "Technologies", value: "10+" },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-900 border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-violet-400 mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Mes compétences</h2>
        <div className="grid gap-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <span className="text-violet-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;