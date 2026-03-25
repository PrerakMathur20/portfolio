import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import styles from './Skills.module.css';

const ICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React', icon: `${ICON_BASE}/react/react-original.svg` },
      { name: 'TypeScript', icon: `${ICON_BASE}/typescript/typescript-original.svg` },
      { name: 'Next.js', icon: `${ICON_BASE}/nextjs/nextjs-original.svg` },
      { name: 'JavaScript', icon: `${ICON_BASE}/javascript/javascript-original.svg` },
      { name: 'HTML / CSS', icon: `${ICON_BASE}/html5/html5-original.svg` },
      { name: 'Redux', icon: `${ICON_BASE}/redux/redux-original.svg` },
      { name: 'GraphQL', icon: `${ICON_BASE}/graphql/graphql-plain.svg` },
      { name: 'Tailwind CSS', icon: `${ICON_BASE}/tailwindcss/tailwindcss-original.svg` },
      { name: 'Vite', icon: `${ICON_BASE}/vitejs/vitejs-original.svg` },
      { name: 'Webpack', icon: `${ICON_BASE}/webpack/webpack-original.svg` },
      { name: 'Jest', icon: `${ICON_BASE}/jest/jest-plain.svg` },
      { name: 'Storybook', icon: `${ICON_BASE}/storybook/storybook-original.svg` },
      { name: 'Axios', icon: `${ICON_BASE}/axios/axios-plain.svg` },
      { name: 'CSS Custom Properties', icon: `${ICON_BASE}/css3/css3-original.svg` },
    ],
  },
  {
    label: 'Backend & Infra',
    skills: [
      { name: 'Node.js', icon: `${ICON_BASE}/nodejs/nodejs-original.svg` },
      { name: 'Java', icon: `${ICON_BASE}/java/java-original.svg` },
      { name: 'Spring Boot', icon: `${ICON_BASE}/spring/spring-original.svg` },
      { name: 'Apache Kafka', icon: `${ICON_BASE}/apachekafka/apachekafka-original.svg` },
      { name: 'PostgreSQL', icon: `${ICON_BASE}/postgresql/postgresql-original.svg` },
      { name: 'Redis', icon: `${ICON_BASE}/redis/redis-original.svg` },
      { name: 'Cassandra', icon: `${ICON_BASE}/cassandra/cassandra-original.svg` },
      { name: 'Docker', icon: `${ICON_BASE}/docker/docker-original.svg` },
      { name: 'Kubernetes', icon: `${ICON_BASE}/kubernetes/kubernetes-plain.svg` },
      { name: 'GCP', icon: `${ICON_BASE}/googlecloud/googlecloud-original.svg` },
      { name: 'AWS', icon: `${ICON_BASE}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: 'Git', icon: `${ICON_BASE}/git/git-original.svg` },
    ],
  },
  {
    label: 'Concepts',
    skills: [
      { name: 'Component Architecture' },
      { name: 'SSR / SSG' },
      { name: 'Performance Optimization' },
      { name: 'Accessibility (WCAG)' },
      { name: 'WAI-ARIA' },
      { name: 'Core Web Vitals' },
      { name: 'Micro-frontends' },
      { name: 'System Design' },
      { name: 'Event-Driven Architecture' },
      { name: 'Observability' },
      { name: 'CI / CD' },
    ],
  },
];

export const Skills = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.skills}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  Skills
                </div>
              </div>
              <Heading
                className={styles.title}
                data-visible={visible}
                level={3}
                id={titleId}
              >
                What I work with
              </Heading>
            </div>
            <div className={styles.groups}>
              {skillGroups.map((group, gi) => (
                <div
                  key={group.label}
                  className={styles.group}
                  data-visible={visible}
                  style={{ '--group-index': gi }}
                >
                  <Text className={styles.groupLabel} size="s" weight="medium" as="h4">
                    {group.label}
                  </Text>
                  <ul className={styles.pills}>
                    {group.skills.map(skill => (
                      <li key={skill.name} className={styles.pill}>
                        {skill.icon && (
                          <img
                            src={skill.icon}
                            alt=""
                            aria-hidden="true"
                            className={styles.pillIcon}
                            width="16"
                            height="16"
                          />
                        )}
                        <Text size="s" as="span">
                          {skill.name}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
