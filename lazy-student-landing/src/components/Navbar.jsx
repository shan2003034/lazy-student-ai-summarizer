import { NAV_LINKS, GITHUB_LINK } from '../constants';
import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
          🦥 Lazy Student AI
        </div>
        
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {NAV_LINKS.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:text-green-400 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a 
          href={GITHUB_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-all"
        >
          <FaGithub className="text-lg" />
          <span className="hidden sm:block">Star on GitHub</span>
        </a>
      </div>
    </nav>
  );
}