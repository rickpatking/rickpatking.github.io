import { personalInfo } from '../data/projects';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a]">
      <div className="px-6 sm:px-12 lg:px-20 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#555555]">
            {new Date().getFullYear()} {personalInfo.name}
          </p>
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#555555] hover:text-white transition-colors uppercase tracking-widest"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#555555] hover:text-white transition-colors uppercase tracking-widest"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-xs text-[#555555] hover:text-white transition-colors uppercase tracking-widest"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
