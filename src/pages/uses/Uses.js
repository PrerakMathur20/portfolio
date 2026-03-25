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
          description="A list of tools, languages, and technologies I use daily to build performant, accessible UI systems and full-stack applications."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Frontend Stack</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> and{' '}
                    <Link href="https://www.typescriptlang.org/">TypeScript</Link> are my
                    primary tools for building production UI systems — from internal
                    dashboards at Walmart to open-source component libraries.
                  </ListItem>
                  <ListItem>
                    <Link href="https://nextjs.org/">Next.js</Link> is my framework of
                    choice for SSR/SSG applications. I use it for this portfolio and for
                    SEO-optimized web apps at{' '}
                    <Link href="https://zeko.io/">Zeko</Link>.
                  </ListItem>
                  <ListItem>
                    I use <Link href="https://redux.js.org/">Redux</Link> and{' '}
                    <Link href="https://axios-http.com/">Axios</Link> for state management
                    and data-fetching patterns in large-scale React applications.
                  </ListItem>
                  <ListItem>
                    <Link href="https://graphql.org/">GraphQL</Link> powers the API layer
                    for my dashboards at Walmart — providing type-safe, efficient data
                    fetching and reducing over-fetching.
                  </ListItem>
                  <ListItem>
                    For component documentation and design systems, I use{' '}
                    <Link href="https://storybook.js.org/">Storybook</Link> — including for
                    the Tokis component library.
                  </ListItem>
                  <ListItem>
                    I follow <Link href="https://www.w3.org/WAI/ARIA/apg/">WAI-ARIA</Link>{' '}
                    guidelines and <Link href="https://www.w3.org/TR/WCAG21/">WCAG</Link>{' '}
                    standards to ensure my components are accessible to all users.
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
                    as my primary editor, with Cursor for AI-assisted development and
                    refactoring.
                  </ListItem>
                  <ListItem>
                    <Link href="https://vitejs.dev/">Vite</Link> and{' '}
                    <Link href="https://webpack.js.org/">Webpack</Link> for bundling — Vite
                    for new projects and libraries (Tokis), Webpack for the enterprise apps.
                  </ListItem>
                  <ListItem>
                    <Link href="https://jestjs.io/">Jest</Link> and{' '}
                    <Link href="https://testing-library.com/">Testing Library</Link> for
                    unit and integration tests on React components.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.docker.com/">Docker</Link> for containerizing
                    applications and ensuring consistent environments across dev and
                    production.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.cloudflare.com/">Cloudflare</Link> for DNS,
                    Tunnels, and CDN — zero-trust architecture with no exposed network ports
                    on self-hosted projects.
                  </ListItem>
                  <ListItem>
                    For version control I use{' '}
                    <Link href="https://git-scm.com/">Git</Link> and{' '}
                    <Link href="https://github.com/">GitHub</Link>. Active open source
                    contributor — Internet Archive, Appwrite, CircuitVerse, and my own
                    projects.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Full Stack & Infra</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Languages</TableHeadCell>
                    <TableCell>TypeScript, JavaScript, Java</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Backend</TableHeadCell>
                    <TableCell>Node.js, Spring Boot</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Databases</TableHeadCell>
                    <TableCell>PostgreSQL, Redis, Cassandra</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Message Queue</TableHeadCell>
                    <TableCell>Apache Kafka</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Cloud</TableHeadCell>
                    <TableCell>GCP, AWS, Kubernetes</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>CI/CD</TableHeadCell>
                    <TableCell>GitHub Actions, CI/CD pipelines</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Containerization</TableHeadCell>
                    <TableCell>Docker</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitoring</TableHeadCell>
                    <TableCell>Grafana</TableCell>
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
