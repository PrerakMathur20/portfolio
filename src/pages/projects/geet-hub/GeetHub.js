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
import styles from './GeetHub.module.css';

// Placeholder imports - replace these with your actual project screenshots
import geetHubBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import geetHubBackground from 'assets/slice-background.jpg';
import geetHubBackgroundLarge from 'assets/slice-background-large.jpg';

const title = 'Geet-Hub: Open Source Music Platform';
const description =
  'An open-source platform for music creators to edit, remix, and publish their songs with collaborative features. Built with modern web technologies and a focus on creator empowerment.';
const roles = [
  'Full-Stack Development',
  'UI/UX Design',
  'Audio Processing',
  'Community Building',
];

export const GeetHub = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.geetHub}>
        <ProjectBackground
          src={geetHubBackground}
          srcSet={`${geetHubBackground.src} 1280w, ${geetHubBackgroundLarge.src} 2560w`}
          placeholder={geetHubBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project Vision</ProjectSectionHeading>
              <ProjectSectionText>
                Geet-Hub is an open-source platform designed to democratize music creation
                and collaboration. The platform allows musicians, producers, and hobbyists
                to edit their songs, apply effects, remix tracks, and publish their work
                to a community of music enthusiasts.
              </ProjectSectionText>
              <ProjectSectionText>
                Built on the principles of open-source software, Geet-Hub aims to provide
                professional-grade music editing tools without the barrier of expensive
                proprietary software, fostering a community where creativity and
                collaboration thrive.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Core Features</ProjectSectionHeading>
              <ProjectSectionText>
                The platform combines powerful audio processing capabilities with an
                intuitive user interface, making advanced music editing accessible to
                creators of all skill levels.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Audio Editing Suite</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Multi-track audio editing and mixing</li>
                  <li>Real-time waveform visualization</li>
                  <li>Trim, cut, and splice audio with precision</li>
                  <li>Fade in/out and crossfade effects</li>
                  <li>Speed and pitch adjustment</li>
                  <li>Noise reduction and audio enhancement</li>
                </ul>
              </div>
              <div>
                <ProjectSectionHeading level={4}>Effects & Filters</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Reverb, delay, and echo effects</li>
                  <li>EQ (equalizer) with frequency control</li>
                  <li>Compression and normalization</li>
                  <li>Distortion and modulation effects</li>
                  <li>Custom effect chains</li>
                  <li>Real-time effect preview</li>
                </ul>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Collaborative Platform</ProjectSectionHeading>
              <ProjectSectionText>
                One of Geet-Hub&apos;s unique features is its emphasis on collaboration and
                community. Musicians can work together on projects, share their work, and
                learn from each other&apos;s creative processes.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Social Features</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Public and private project sharing</li>
                  <li>Collaborative editing with version control</li>
                  <li>Comment and feedback system</li>
                  <li>User profiles and portfolios</li>
                  <li>Follow creators and discover new music</li>
                  <li>Community challenges and showcases</li>
                </ul>
              </div>
              <div>
                <ProjectSectionHeading level={4}>Publishing & Distribution</ProjectSectionHeading>
                <ProjectSectionText>
                  Export finished tracks in multiple formats (MP3, WAV, FLAC, OGG) with
                  customizable quality settings. Publish directly to the Geet-Hub community
                  or download for distribution to other platforms.
                </ProjectSectionText>
                <ProjectSectionText>
                  Built-in metadata editor for adding track information, album art, and
                  licensing details.
                </ProjectSectionText>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Technical Architecture</ProjectSectionHeading>
              <ProjectSectionText>
                Geet-Hub is built using modern web technologies to deliver a responsive,
                performant experience across devices. The architecture is designed for
                scalability and maintainability, with a focus on clean code and best
                practices.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Frontend Technologies</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>React for UI component architecture</li>
                  <li>Web Audio API for audio processing</li>
                  <li>Wavesurfer.js for waveform visualization</li>
                  <li>Redux for state management</li>
                  <li>Tailwind CSS for responsive design</li>
                  <li>Progressive Web App (PWA) support</li>
                </ul>
              </div>
              <div>
                <ProjectSectionHeading level={4}>Backend Infrastructure</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Node.js with Express framework</li>
                  <li>PostgreSQL for relational data</li>
                  <li>MongoDB for project metadata</li>
                  <li>AWS S3 for audio file storage</li>
                  <li>Redis for caching and sessions</li>
                  <li>WebSocket for real-time collaboration</li>
                </ul>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Audio Processing Engine</ProjectSectionHeading>
              <ProjectSectionText>
                The heart of Geet-Hub is its custom-built audio processing engine that
                leverages the Web Audio API for client-side processing, reducing server
                load and enabling real-time effect previews.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Performance Optimization</ProjectSectionHeading>
                <ProjectSectionText>
                  Implemented Web Workers for background audio processing, ensuring the UI
                  remains responsive during intensive operations. Audio chunks are
                  processed in parallel when possible, significantly improving rendering
                  times for complex projects.
                </ProjectSectionText>
                <ProjectSectionText>
                  Lazy loading of audio effects and dynamic import of processing modules
                  keeps the initial bundle size minimal while providing access to advanced
                  features on demand.
                </ProjectSectionText>
              </div>
              <div>
                <ProjectSectionHeading level={4}>Format Support</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Import: MP3, WAV, OGG, FLAC, M4A</li>
                  <li>Export: MP3 (multiple bitrates), WAV, FLAC, OGG</li>
                  <li>Lossless audio support for professional workflows</li>
                  <li>Automatic sample rate conversion</li>
                  <li>Stereo and mono channel handling</li>
                </ul>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>User Experience Design</ProjectSectionHeading>
              <ProjectSectionText>
                The interface was designed with both beginners and professionals in mind.
                The main editing workspace provides a clean, distraction-free environment
                while advanced features are accessible through contextual menus and
                keyboard shortcuts.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Intuitive Workflow</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Drag-and-drop file upload</li>
                  <li>Timeline-based editing interface</li>
                  <li>Non-destructive editing workflow</li>
                  <li>Unlimited undo/redo history</li>
                  <li>Keyboard shortcuts for power users</li>
                  <li>Customizable workspace layouts</li>
                </ul>
              </div>
              <div>
                <ProjectSectionHeading level={4}>Accessibility</ProjectSectionHeading>
                <ProjectSectionText>
                  Built with accessibility in mind, featuring keyboard navigation, screen
                  reader support, and high-contrast mode. The interface is fully responsive,
                  working seamlessly on desktop, tablet, and mobile devices.
                </ProjectSectionText>
                <ProjectSectionText>
                  Visual feedback for all audio operations ensures users always know the
                  state of their project and pending operations.
                </ProjectSectionText>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Open Source Community</ProjectSectionHeading>
              <ProjectSectionText>
                As an open-source project, Geet-Hub welcomes contributions from developers,
                designers, and musicians worldwide. The codebase is hosted on GitHub with
                comprehensive documentation for contributors.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Contribution Areas</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Audio effect development</li>
                  <li>UI/UX improvements</li>
                  <li>Documentation and tutorials</li>
                  <li>Translation and localization</li>
                  <li>Bug fixes and testing</li>
                  <li>Feature requests and roadmap input</li>
                </ul>
              </div>
              <div>
                <ProjectSectionHeading level={4}>Developer Resources</ProjectSectionHeading>
                <ProjectSectionText>
                  Comprehensive API documentation, starter guides, and example plugins help
                  developers extend Geet-Hub&apos;s functionality. The modular architecture
                  makes it easy to add custom effects, file format support, and integration
                  with external services.
                </ProjectSectionText>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Technical Challenges & Solutions</ProjectSectionHeading>
              <ProjectSectionText>
                Building a web-based audio editor presented unique challenges, particularly
                around performance and audio quality. Through careful optimization and
                innovative use of modern web APIs, we achieved near-native performance for
                most operations.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Real-Time Collaboration</ProjectSectionHeading>
                <ProjectSectionText>
                  Implementing real-time collaborative editing required solving complex
                  synchronization challenges. We developed a custom operational
                  transformation system that handles concurrent edits while maintaining
                  audio integrity and preventing conflicts.
                </ProjectSectionText>
              </div>
              <div>
                <ProjectSectionHeading level={4}>Large File Handling</ProjectSectionHeading>
                <ProjectSectionText>
                  To handle large audio files efficiently, we implemented chunked file
                  upload with resume capability, progressive loading of waveforms, and
                  streaming playback that doesn&apos;t require loading the entire file into
                  memory.
                </ProjectSectionText>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Future Roadmap</ProjectSectionHeading>
              <ProjectSectionText>
                Geet-Hub continues to evolve with exciting features in development,
                including AI-powered audio enhancement, VST plugin support, and native
                desktop applications for improved performance.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Upcoming Features</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>AI-powered vocal isolation</li>
                  <li>Automatic beat detection and alignment</li>
                  <li>VST/AU plugin support</li>
                  <li>Mobile apps for iOS and Android</li>
                  <li>Live streaming integration</li>
                  <li>Marketplace for custom effects and presets</li>
                </ul>
              </div>
              <div>
                <ProjectSectionHeading level={4}>Community Growth</ProjectSectionHeading>
                <ProjectSectionText>
                  Building a thriving community of music creators who can learn from each
                  other, collaborate on projects, and push the boundaries of what&apos;s possible
                  with open-source music technology. Educational resources including
                  tutorials, workshops, and mentorship programs are planned to lower the
                  barrier to entry for new musicians.
                </ProjectSectionText>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
