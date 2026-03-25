import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { useState } from 'react';
import styles from './Experience.module.css';

const experiences = [
  {
    company: 'Walmart Global Tech',
    role: 'Software Development Engineer II',
    period: 'July 2024 – Present',
    location: 'Bengaluru, India',
    bullets: [
      'Built an internal analytics dashboard (React, TypeScript, GraphQL) with Redux state management and lazy-loaded modules — reducing on-call reliance by 40% and cutting initial bundle load time by ~35%.',
      'Designed reusable React component library and data-fetching patterns adopted across internal tooling, enforcing consistent UI contracts and accelerating feature delivery.',
      'Automated data re-ingestion and audit workflows on GCP via Java and Kafka, eliminating 10–12 DevOps hrs/week and reducing manual operations by 75%.',
      "Contributed to Walmart\u2019s catalog aggregation backend \u2014 reactive Kafka + Cassandra services with 35% peak surge reduction monitored via Grafana.",
    ],
  },
  {
    company: 'Walmart Global Tech',
    role: 'Software Development Engineer Intern',
    period: 'May 2023 – June 2024',
    location: 'Bengaluru, India',
    bullets: [
      'Built a returns lifecycle tracking dashboard (React, GraphQL, Axios) with real-time order status UI and Redux state management, cutting ticket resolution time by ~30%.',
      "Built dependency management tooling and secure CI/CD identity key generation for Walmart\u2019s internal platform, improving access governance and security.",
      'Architected a Java Spring Boot gateway filter enforcing authorization policies for sensitive internal APIs, preventing unauthorized downstream access.',
    ],
  },
  {
    company: 'Zeko (formerly Qricle)',
    role: 'Frontend Development Intern',
    period: 'January 2023 – March 2023',
    location: 'Remote',
    bullets: [
      'Developed SEO-optimized web apps and admin dashboard with Next.js SSR, building responsive, accessible UI components and improving Core Web Vitals across devices.',
    ],
  },
  {
    company: 'Indian Institute of Information Technology, Lucknow',
    role: 'B.Tech in Information Technology',
    period: '2020 – 2024',
    location: 'Lucknow, India',
    bullets: ['CGPA: 8.6 / 10'],
    isEducation: true,
  },
];

export const Experience = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = index => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <Section
      className={styles.experience}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.tag} aria-hidden>
              <Divider
                notchWidth="64px"
                notchHeight="8px"
                collapsed={!visible}
                collapseDelay={1000}
              />
              <div className={styles.tagText} data-visible={visible}>
                Experience
              </div>
            </div>
            <div className={styles.timeline}>
              <Heading
                className={styles.title}
                data-visible={visible}
                level={3}
                id={titleId}
              >
                Where I&apos;ve worked
              </Heading>
              {experiences.map((exp, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={styles.item}
                    data-visible={visible}
                    data-education={!!exp.isEducation}
                    style={{ '--item-index': index }}
                  >
                    <button
                      className={styles.itemToggle}
                      onClick={() => toggleItem(index)}
                      aria-expanded={isOpen}
                      aria-controls={`exp-bullets-${index}`}
                    >
                      <div className={styles.itemHeader}>
                        <div className={styles.itemMeta}>
                          <Text className={styles.itemCompany} weight="medium" as="span">
                            {exp.company}
                          </Text>
                          <Text className={styles.itemPeriod} size="s" as="span">
                            {exp.period}
                          </Text>
                        </div>
                        <Text className={styles.itemRole} size="l" as="p">
                          {exp.role}
                        </Text>
                        <Text className={styles.itemLocation} size="s" as="p">
                          {exp.location}
                        </Text>
                      </div>
                      <span className={styles.itemChevron} data-open={isOpen} aria-hidden="true">
                        ›
                      </span>
                    </button>
                    <ul
                      id={`exp-bullets-${index}`}
                      className={styles.bullets}
                      data-open={isOpen}
                    >
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className={styles.bullet}>
                          <Text size="s" as="span">
                            {bullet}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
