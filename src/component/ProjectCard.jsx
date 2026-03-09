
function ProjectCard({ title, description, tech, github, demo, color }) {
  return (
    <div className="group bg-gray-900 border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1">
      <div className={`h-1.5 w-full bg-gradient-to-r ${color}`} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a href={github} target="_blank" rel="noreferrer" className="flex-1 py-2 rounded-xl border border-white/20 text-gray-300 text-sm text-center hover:bg-white/10 transition-all">
            GitHub
          </a>
          <a href={demo} target="_blank" rel="noreferrer" className={`flex-1 py-2 rounded-xl bg-gradient-to-r ${color} text-white text-sm text-center font-medium`}>
            Demo →
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

