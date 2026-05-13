import { Fragment } from 'react';
import Section from './Section';
import { about, skills } from '../data/content';

export default function About() {
  return (
    <Section id="about" label="About">
      <p className="about-body">{about.paragraph}</p>
      <dl className="skills-list">
        {skills.map(({ label, items }) => (
          <Fragment key={label}>
            <dt className="skills-label">{label}</dt>
            <dd className="skills-items">{items.join(', ')}</dd>
          </Fragment>
        ))}
      </dl>
    </Section>
  );
}
