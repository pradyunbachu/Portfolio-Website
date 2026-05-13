import Section from './Section';
import { projects } from '../data/content';

export default function Projects() {
  return (
    <Section id="projects" label="Projects">
      <div className="proj-list">
        {projects.map((p) => (
          <article className="proj-item" key={p.title}>
            <div className="proj-head">
              <h3 className="proj-title">{p.title}</h3>
              <span className="proj-date">{p.date}</span>
            </div>
            {p.description && <p className="proj-desc">{p.description}</p>}
            <div className="proj-tech">{p.tech.join(' · ')}</div>
            {p.links.length > 0 && (
              <div className="proj-links">
                {p.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
