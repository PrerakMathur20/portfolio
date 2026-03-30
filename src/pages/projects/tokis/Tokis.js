import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Tokis.module.css';

import tokisBackgroundPlaceholder from 'assets/spr-background-placeholder.jpg';
import tokisBackground from 'assets/spr-background.jpg';
import tokisBackgroundLarge from 'assets/spr-background-large.jpg';

const title = 'Tokis – Open Source React Component Library';
const description =
  'A zero-runtime, token-based React UI library published on npm with 500+ weekly downloads — built with accessible WAI-ARIA components, CSS custom properties theming, and a tree-shakeable bundle.';
const roles = [
  'React & TypeScript',
  'Component Architecture',
  'Accessibility (WAI-ARIA)',
  'Design Systems',
  'Open Source',
];

export const Tokis = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.tokis}>
        <ProjectBackground
          src={tokisBackground}
          srcSet={`${tokisBackground.src} 1280w, ${tokisBackgroundLarge.src} 2560w`}
          placeholder={tokisBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.npmjs.com/package/@tokis/tokis"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Overview</ProjectSectionHeading>
              <ProjectSectionText>
                Tokis is an open-source React component library I built and published to npm
                in 2026. It has grown to 500+ weekly downloads and is designed for teams
                that want a scalable, token-driven design system without the runtime overhead
                of CSS-in-JS.
              </ProjectSectionText>
              <ProjectSectionText>
                The library is fully written in TypeScript with complete type definitions,
                documented via Storybook, and targets production-grade design system adoption.
                Every component follows WAI-ARIA authoring practices to ensure accessibility
                out of the box.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Design Philosophy</ProjectSectionHeading>
              <ProjectSectionText>
                The core principle behind Tokis is zero-runtime theming. Instead of
                injecting styles at runtime like many CSS-in-JS libraries, Tokis uses CSS
                custom properties (design tokens) for theming — meaning there is no
                JavaScript overhead for theme switching and no SSR hydration issues.
              </ProjectSectionText>
              <ProjectSectionText>
                Components are designed with a composable API, allowing developers to build
                complex UI patterns from simple, well-defined primitives. The tree-shakeable
                bundle ensures that only used components end up in the final build.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Key Features</ProjectSectionHeading>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Accessibility First</ProjectSectionHeading>
                <ProjectSectionText>
                  Every component implements the relevant WAI-ARIA design pattern — keyboard
                  navigation, focus management, ARIA roles, states, and properties are all
                  handled out of the box. No extra configuration needed to meet WCAG 2.1 AA.
                </ProjectSectionText>
              </div>
              <div>
                <ProjectSectionHeading level={4}>CSS Custom Properties Theming</ProjectSectionHeading>
                <ProjectSectionText>
                  Themes are expressed entirely through CSS custom properties. Switching
                  themes has zero JavaScript cost, works with SSR without flicker, and makes
                  it trivial to integrate with any existing design token system.
                </ProjectSectionText>
              </div>
            </ProjectSectionColumns>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Full TypeScript Support</ProjectSectionHeading>
                <ProjectSectionText>
                  Every component ships with comprehensive TypeScript definitions. Prop types
                  are designed to be strict yet ergonomic — providing excellent IDE
                  autocomplete and catching errors at compile time rather than runtime.
                </ProjectSectionText>
              </div>
              <div>
                <ProjectSectionHeading level={4}>Tree-Shakeable Bundle</ProjectSectionHeading>
                <ProjectSectionText>
                  The library is bundled with Vite in library mode, producing ES module
                  output that modern bundlers can tree-shake. Import only what you use —
                  unused components add zero bytes to your production build.
                </ProjectSectionText>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Technical Implementation</ProjectSectionHeading>
              <ProjectSectionText>
                The build pipeline uses Vite in library mode to output both ESM and CJS
                formats, with TypeScript compilation handled by tsc. Storybook is used for
                interactive component documentation and visual regression testing during
                development.
              </ProjectSectionText>
              <ProjectSectionText>
                The CSS custom properties token system is structured as a flat namespace of
                semantic tokens (e.g. <code>--color-surface</code>,{' '}
                <code>--color-on-surface</code>) that map to primitive tokens at the theme
                level. This pattern makes it easy to support multiple themes without
                duplicating component styles.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Since publishing, Tokis has grown to 500+ weekly downloads on npm and has
                been adopted by several teams looking for a lightweight, accessible
                alternative to heavier component frameworks. The Storybook documentation
                site makes it easy for new adopters to explore components and understand
                their API.
              </ProjectSectionText>
              <ProjectSectionText>
                Building Tokis deepened my understanding of component API design, CSS
                architecture at scale, accessibility patterns, and the open-source publishing
                workflow — from semantic versioning and changelogs to npm distribution and
                community issue triage.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
