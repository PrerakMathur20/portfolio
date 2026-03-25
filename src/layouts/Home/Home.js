import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';

import sprDesignDarkLarge from 'assets/spr-design-system-dark-large.png';
import sprDesignDarkPlaceholder from 'assets/spr-design-system-dark-placeholder.png';
import sprDesignDark from 'assets/spr-design-system-dark.png';
import sprDesignLightLarge from 'assets/spr-design-system-light-large.png';
import sprDesignLightPlaceholder from 'assets/spr-design-system-light-placeholder.png';
import sprDesignLight from 'assets/spr-design-system-light.png';
import droneBannerLarge from 'assets/drone-banner.jpg';
import droneBannerPlaceholder from 'assets/drone-banner-placeholder.jpg';
import droneBanner from 'assets/drone-banner.jpg';
import geetHubBannerLarge from 'assets/geet-hub-banner.jpg';
import geetHubBannerPlaceholder from 'assets/geet-hub-banner-placeholder.jpg';
import geetHubBanner from 'assets/geet-hub-banner.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

// Roles and skills
const disciplines = ['Frontend Engineer', 'React Developer', 'UI Architect', 'Open Source Contributor', 'Problem Solver'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Frontend Engineer + React Developer"
        description="Portfolio of Prerak Mathur — a Frontend Engineer at Walmart Global Tech specializing in React, TypeScript, and Next.js, building production UI systems and open-source component libraries."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Tokis – Open Source React Component Library"
        description="Built and published a zero-runtime, token-based React UI library on npm with 500+ weekly downloads — accessible WAI-ARIA components, CSS custom properties theming, and a tree-shakeable bundle."
        buttonText="View project"
        buttonLink="/projects/tokis"
        model={{
          type: 'laptop',
          alt: 'Tokis component library design system',
          textures: [
            {
              srcSet: [sprDesignDark, sprDesignDarkLarge],
              placeholder: sprDesignDarkPlaceholder,
            },
            {
              srcSet: [sprDesignLight, sprDesignLightLarge],
              placeholder: sprDesignLightPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Self-Hosted Cloud Streaming & Storage"
        description="Deployed a containerized streaming platform using Docker with encrypted remote access via Cloudflare Tunnels — implementing a zero-trust architecture with no exposed network ports."
        buttonText="View project"
        buttonLink="/projects/cloud-storage"
        model={{
          type: 'phone',
          alt: 'Cloud storage app on mobile',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Drone Development & Data Classification"
        description="Led a government-funded project for India's Ministry of Science and Technology, developing an open-source drone platform for agricultural ML data analysis. Patent Pending."
        buttonText="View project"
        buttonLink="/projects/drone-project"
        model={{
          type: 'laptop',
          alt: 'Drone data analysis dashboard',
          textures: [
            {
              srcSet: [droneBanner, droneBannerLarge],
              placeholder: droneBannerPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Geet-Hub: Open Source Music Platform"
        description="An open-source platform for music creators to edit, remix, and collaborate — featuring professional-grade audio editing tools, remix workflows, and a community publishing system."
        buttonText="View project"
        buttonLink="/projects/geet-hub"
        model={{
          type: 'laptop',
          alt: 'Geet-Hub music editor interface',
          textures: [
            {
              srcSet: [geetHubBanner, geetHubBannerLarge],
              placeholder: geetHubBannerPlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
