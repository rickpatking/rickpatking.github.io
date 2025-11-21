import { personalInfo } from '../data/projects';

export default function Footer() {
  return (
    <footer className="bg-[#0d2438] border-t border-[#2a5470]">
      <div className="px-6 sm:px-12 lg:px-20 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#6b9ab8]">
            {new Date().getFullYear()} {personalInfo.name}
          </p>
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#6b9ab8] hover:text-[#e85d3b] transition-colors uppercase tracking-[0.2em] font-bold"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#6b9ab8] hover:text-[#e85d3b] transition-colors uppercase tracking-[0.2em] font-bold"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-xs text-[#6b9ab8] hover:text-[#e85d3b] transition-colors uppercase tracking-[0.2em] font-bold"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
