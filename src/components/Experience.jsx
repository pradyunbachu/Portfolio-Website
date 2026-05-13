import Section from './Section';
import { experience } from '../data/content';

export default function Experience() {
  return (
    <Section id="experience" label="Experience">
      <div className="exp-list">
        {experience.map((item, i) => {
          const side = i % 2 === 0 ? 'left' : 'right';
          return (
            <div
              className="exp-item"
              data-side={side}
              key={`${item.org}-${item.date}`}
            >
              <span className="exp-dot" aria-hidden="true" />
              <div className="exp-body">
                <div className="exp-date">{item.date}</div>
                <div className="exp-title">{item.title}</div>
                <div className="exp-org">
                  {item.org}
                  {item.location ? ` · ${item.location}` : ''}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
