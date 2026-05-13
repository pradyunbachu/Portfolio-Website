import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <nav className="nav" data-scrolled={scrolled || undefined}>
      <div className="nav-inner">
        <div className="nav-links">
          {LINKS.map((link, i) => (
            <span key={link.id} className="nav-sep">
              <a href={`#${link.id}`} onClick={(e) => scrollTo(e, link.id)}>
                {link.label}
              </a>
              {i < LINKS.length - 1 && <span aria-hidden>·</span>}
            </span>
          ))}
        </div>
        <button
          className="nav-toggle"
          aria-label="Toggle theme"
          onClick={onToggleTheme}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </div>
    </nav>
  );
}
