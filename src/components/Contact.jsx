import Section from './Section';
import { contact } from '../data/content';

export default function Contact() {
  return (
    <Section id="contact" label="Contact">
      <p className="contact-prompt">{contact.prompt}</p>
      <div className="contact-list">
        {contact.links.map((link) => (
          <Row key={link.label} link={link} />
        ))}
      </div>
    </Section>
  );
}

function Row({ link }) {
  const external = link.url.startsWith('http') || link.url.startsWith('/');
  return (
    <>
      <div className="contact-label">{link.label}</div>
      <a
        href={link.url}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {link.value} ↗
      </a>
    </>
  );
}
