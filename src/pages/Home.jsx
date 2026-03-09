import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [visible, setVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Développeuse Web Full Stack";

  useEffect(() => {
    setVisible(true);
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6 pt-20">
      <div className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <p className="text-violet-400 font-medium mb-4 tracking-widest uppercase text-sm">
          Bienvenue sur mon portfolio
        </p>
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          Bonjour, je suis{" Ndeye Anna Diouf,une developpeuse web passionnée"}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            
          </span>
        </h1>
        <h2 className="text-xl text-gray-400 mb-8 h-8">
          {typedText}<span className="animate-pulse">|</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Je crée des applications web modernes et performantes avec React et Tailwind CSS.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/projects" className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full text-white font-bold hover:opacity-90 transition-all">
            Voir mes projets →
          </Link>
          <Link to="/contact" className="px-8 py-4 border border-white/20 rounded-full text-white hover:bg-white/10 transition-all">
            Me contacter
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;