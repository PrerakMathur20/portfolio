import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import styles from './ProjectsIndex.module.css';

const projects = [
  {
    title: 'Tokis – Open Source React Component Library',
    description:
      'A zero-runtime, token-based React UI library published on npm with 500+ weekly downloads — accessible WAI-ARIA components, CSS custom properties theming, and a tree-shakeable bundle.',
    tags: ['React', 'TypeScript', 'Open Source', 'Accessibility'],
    link: '/projects/tokis',
    year: '2026',
  },
  {
    title: 'Self-Hosted Cloud Streaming & Storage',
    description:
      'Containerized streaming platform using Docker with encrypted remote access via Cloudflare Tunnels — zero-trust architecture with no exposed network ports.',
    tags: ['Docker', 'Cloudflare', 'DevOps', 'Security'],
    link: '/projects/cloud-storage',
    year: '2025',
  },
  {
    title: 'Drone Development & Data Classification',
    description:
      'Government-funded open-source quadcopter for agricultural ML data analysis. Led hardware engineering, firmware, and MobileNetV2-based classification pipeline. Patent Pending.',
    tags: ['Hardware', 'Machine Learning', 'Python', 'Raspberry Pi'],
    link: '/projects/drone-project',
    year: '2022–2023',
  },
  {
    title: 'Geet-Hub: Open Source Music Platform',
    description:
      'Open-source platform for music creators to edit, remix, and collaborate — professional-grade audio editing tools, remix workflows, and community publishing.',
    tags: ['React', 'Node.js', 'Audio API', 'Open Source'],
    link: '/projects/geet-hub',
    year: '2022',
  },
  {
    title: 'Faculty Recruitment Portal – IIIT Lucknow',
    description:
      'Comprehensive web-based recruitment management system for IIIT Lucknow, streamlining the faculty hiring process with automated workflows and real-time tracking.',
    tags: ['Full-Stack', 'React', 'Node.js', 'PostgreSQL'],
    link: '/projects/faculty-portal',
    year: '2022',
  },
];

export const ProjectsIndex = () => (
  <article className={styles.page}>
    <Meta
      title="Projects"
      description="All projects by Prerak Mathur — open-source libraries, full-stack apps, DevOps platforms, and government-funded research."
    />
    <Section className={styles.content}>
      <Transition in>
        {visible => (
          <>
            <header className={styles.header}>
              <Heading level={5} as="h1" className={styles.heading}>
                <DecoderText text="All Projects" start={visible} />
              </Heading>
              <Divider />
            </header>
            <div className={styles.grid}>
              {projects.map((project, index) => (
                <div
                  key={project.link}
                  className={styles.card}
                  data-visible={visible}
                  style={{ '--card-index': index }}
                >
                  <div className={styles.cardHeader}>
                    <Text className={styles.cardYear} size="s">
                      {project.year}
                    </Text>
                    <Heading level={4} as="h2" className={styles.cardTitle}>
                      {project.title}
                    </Heading>
                  </div>
                  <Text as="p" size="s" className={styles.cardDescription}>
                    {project.description}
                  </Text>
                  <div className={styles.cardFooter}>
                    <ul className={styles.tags}>
                      {project.tags.map(tag => (
                        <li key={tag} className={styles.tag}>
                          <Text size="s" as="span">{tag}</Text>
                        </li>
                      ))}
                    </ul>
                    <Button iconHoverShift iconEnd="arrowRight" href={project.link}>
                      View project
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </Transition>
    </Section>
    <Footer />
  </article>
);
