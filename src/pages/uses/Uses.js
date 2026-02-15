import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Uses.module.css';

export const Uses = () => {
  return (
    <Fragment>
      <Meta
        title="Uses"
        description="A list of tools, frameworks, and technologies I use for development"
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A comprehensive list of tools, frameworks, languages, and technologies I use on a daily basis to build scalable software solutions."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Languages & Frameworks</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://nodejs.org/">Node.js</Link> is my go-to runtime for
                    building scalable backend services and APIs. I use it extensively at
                    Walmart Global Tech for microservices architecture.
                  </ListItem>
                  <ListItem>
                    For Java development, I work with{' '}
                    <Link href="https://spring.io/projects/spring-boot">Spring Boot</Link>{' '}
                    to build robust enterprise applications with strict authorization and
                    access governance.
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> and{' '}
                    <Link href="https://nextjs.org/">Next.js</Link> are my primary choices
                    for building modern, performant web applications with great SEO and user
                    experience.
                  </ListItem>
                  <ListItem>
                    I use <Link href="https://kafka.apache.org/">Apache Kafka</Link> for
                    building event-driven architectures and real-time data streaming
                    solutions. I've even developed a reusable Kafka utility library.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development Tools</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use{' '}
                    <Link href="https://code.visualstudio.com/">Visual Studio Code</Link>{' '}
                    as my primary code editor for most development work, with Cursor for
                    AI-assisted coding.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.docker.com/">Docker</Link> is essential for
                    containerizing applications and ensuring consistent environments across
                    development and production.
                  </ListItem>
                  <ListItem>
                    For API development and testing, I work with{' '}
                    <Link href="https://graphql.org/">GraphQL</Link> to build efficient,
                    type-safe APIs that reduce over-fetching and improve performance.
                  </ListItem>
                  <ListItem>
                    I use <Link href="https://cloud.google.com/">Google Cloud Platform</Link>{' '}
                    for deploying scalable applications and managing cloud infrastructure.
                    I've worked extensively with GCP services during my internship projects.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.cloudflare.com/">Cloudflare</Link> Argo Tunnels
                    are my choice for secure remote connectivity without exposing network
                    ports, especially for self-hosted solutions.
                  </ListItem>
                  <ListItem>
                    For version control and collaboration, I use{' '}
                    <Link href="https://git-scm.com/">Git</Link> and{' '}
                    <Link href="https://github.com/">GitHub</Link>. I'm an active open
                    source contributor with projects like InternetArchive and CircuitVerse.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Databases & Cloud</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Relational DB</TableHeadCell>
                    <TableCell>PostgreSQL, MySQL</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Query Language</TableHeadCell>
                    <TableCell>SQL, GraphQL</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Message Queue</TableHeadCell>
                    <TableCell>Apache Kafka</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Cloud Platform</TableHeadCell>
                    <TableCell>Google Cloud Platform (GCP)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Containerization</TableHeadCell>
                    <TableCell>Docker</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>API Design</TableHeadCell>
                    <TableCell>REST, GraphQL</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Version Control</TableHeadCell>
                    <TableCell>Git, GitHub</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Streaming</TableHeadCell>
                    <TableCell>Plex, Cloudflare Argo Tunnels</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
