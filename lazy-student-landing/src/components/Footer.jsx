import { GITHUB_LINK } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800 text-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-2">
        <p>© 2026 Lazy Student AI. An open-source project.</p>
        <p className="text-sm">
          Built for <span className="text-green-400 font-bold">Hacktoberfest</span>. 
          <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 ml-2 underline decoration-gray-600 underline-offset-4">
            Contribute Here
          </a>
        </p>
      </div>
    </footer>
  );
}