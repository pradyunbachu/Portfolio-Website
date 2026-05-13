import Section from './Section';
import { about, skills } from '../data/content';

export default function About() {
  return (
    <Section id="about" label="About">
      <p className="about-body">{about.paragraph}</p>
      <div className="about-skills">
        <span className="about-skills-label">Skills</span>
        {skills.join(', ')}
      </div>
    </Section>
  );
}
