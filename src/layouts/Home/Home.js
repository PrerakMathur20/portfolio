import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';
import tokisBannerPlaceholder from 'assets/tokis-banner-placeholder.jpg';
import tokisLanding from 'assets/TokisLanding.png';
import droneBannerPlaceholder from 'assets/drone-banner-placeholder.jpg';
import droneBanner from 'assets/drone-banner.jpg';
import { Button } from 'components/Button';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Experience } from 'layouts/Home/Experience';
import { Skills } from 'layouts/Home/Skills';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = [
  'Full-Stack Engineer',
  'Frontend Developer',
  'Backend Engineer',
  'Open Source Contributor',
  'Problem Solver',
];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const details = useRef();
  const experience = useRef();
  const skills = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();

  useEffect(() => {
    const sections = [
      intro,
      details,
      experience,
      skills,
      projectOne,
      projectTwo,
      projectThree,
    ];

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
        title="Full-Stack Engineer + Frontend & Backend Developer"
        description="Portfolio of Prerak Mathur — Full-Stack Engineer at Walmart Global Tech. Specializing in React, TypeScript, Node.js, Java, and distributed systems."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Experience
        sectionRef={experience}
        visible={visibleSections.includes(experience.current)}
        id="experience"
      />
      <Skills
        sectionRef={skills}
        visible={visibleSections.includes(skills.current)}
        id="skills"
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
          alt: 'Tokis component library website',
          textures: [
            {
              srcSet: [tokisLanding, tokisLanding],
              placeholder: tokisBannerPlaceholder,
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
              srcSet: [droneBanner, droneBanner],
              placeholder: droneBannerPlaceholder,
            },
          ],
        }}
      />
      <div className={styles.moreProjects}>
        <Button iconHoverShift iconEnd="arrowRight" href="/projects">
          See all projects
        </Button>
      </div>
      <Footer />
    </div>
  );
};
