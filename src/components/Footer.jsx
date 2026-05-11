import { Icon } from "@iconify/react";

const socialLinks = [
  { href: "https://www.instagram.com/dazeefacreative/", label: "Instagram" },
  { href: "https://github.com/dazeefacreative", label: "GitHub" },
  { href: "https://behance.net/dazeefacreative", label: "Behance" },
  { href: "https://www.linkedin.com/in/dazeefacreative/", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-800" aria-label="Site footer">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 mb-6">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="text-2xl font-black"
            aria-label="Dazeefa Creative, back to top"
          >
            Dazeefa<span className="text-primary">.</span>
          </a>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-xs opacity-50 hover:opacity-100 transition-opacity duration-300 group"
            aria-label="Back to top of page"
          >
            Back to top
            <Icon
              icon="tabler:arrow-up"
              className="group-hover:-translate-y-1 transition-transform duration-300"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-sm opacity-40">
            © {new Date().getFullYear()} Dazeefa Creative. All rights reserved.
          </span>
          <nav className="flex gap-5" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-50 hover:opacity-100 transition-opacity duration-300"
                aria-label={`${link.label} profile`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
