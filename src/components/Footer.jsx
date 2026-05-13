import { contact } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span>© {year} Pradyun Bachu</span>
      <span className="footer-links">
        {contact.links.map((link) => {
          const external = link.url.startsWith('http') || link.url.startsWith('/');
          return (
            <a
              key={link.label}
              href={link.url}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
            >
              {link.label.toLowerCase()}
            </a>
          );
        })}
      </span>
    </footer>
  );
}
