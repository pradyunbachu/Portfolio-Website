import Section from './Section';
import { experience } from '../data/content';

export default function Experience() {
  return (
    <Section id="experience" label="Experience">
      <div className="exp-list">
        {experience.map((item) => (
          <div className="exp-item" key={`${item.org}-${item.date}`}>
            <div className="exp-date">{item.date}</div>
            <div className="exp-body">
              <div className="exp-title">{item.title}</div>
              <div className="exp-org">
                {item.org}
                {item.location ? ` · ${item.location}` : ''}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
