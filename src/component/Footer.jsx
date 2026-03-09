
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xl font-black text-white">Dev</span>
            <span className="text-xl font-black text-violet-400">.Portfolio</span>
            <p className="text-gray-500 text-sm mt-1">Développeur Web Full Stack</p>
          </div>

          <div className="flex gap-6">
            {["/", "/about", "/projects", "/contact"].map((path, i) => (
              <Link key={path} to={path} className="text-gray-400 hover:text-violet-400 text-sm transition-colors">
                {["Home", "About", "Projects", "Contact"][i]}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-gray-600 text-sm">
          © {currentYear} Mon Portfolio — Fait avec ❤️ en React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}

export default Footer;
