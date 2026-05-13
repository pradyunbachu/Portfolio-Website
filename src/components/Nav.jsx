import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'contact', label: 'contact' },
];

export default function Nav({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 64;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <nav className="nav" data-scrolled={scrolled || undefined}>
      <div className="nav-inner">
        <div className="nav-links">
          {LINKS.map((link, i) => (
            <span key={link.id} style={{ display: 'inline-flex', gap: 14 }}>
              <a onClick={() => scrollTo(link.id)}>{link.label}</a>
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
