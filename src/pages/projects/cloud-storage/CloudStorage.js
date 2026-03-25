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
import styles from './CloudStorage.module.css';

import cloudBackgroundPlaceholder from 'assets/spr-background-placeholder.jpg';
import cloudBackground from 'assets/spr-background.jpg';
import cloudBackgroundLarge from 'assets/spr-background-large.jpg';

const title = 'Self-Hosted Cloud Streaming & Storage';
const description =
  'Built a secure, self-hosted streaming and storage platform enabling encrypted cross-device access with enterprise-grade security and scalable data management.';
const roles = [
  'Full-Stack Development',
  'DevOps',
  'System Architecture',
  'Security Engineering',
];

export const CloudStorage = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.cloudStorage}>
        <ProjectBackground
          src={cloudBackground}
          srcSet={`${cloudBackground.src} 1280w, ${cloudBackgroundLarge.src} 2560w`}
          placeholder={cloudBackgroundPlaceholder}
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
              <ProjectSectionHeading>Overview</ProjectSectionHeading>
              <ProjectSectionText>
                This project demonstrates the implementation of a fully self-hosted cloud
                infrastructure capable of streaming media and storing data securely across
                multiple devices. Built using modern containerization and networking
                technologies, the platform provides a privacy-focused alternative to
                commercial cloud services.
              </ProjectSectionText>
              <ProjectSectionText>
                The system was developed in July 2025 and showcases expertise in Docker
                containerization, reverse proxy configuration, and secure tunnel
                implementation using Cloudflare Argo Tunnels.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Technical Architecture</ProjectSectionHeading>
              <ProjectSectionText>
                The platform is built on a modular microservices architecture using Docker
                containers for service isolation and scalability. Each service runs in its
                own container, allowing for independent scaling and maintenance without
                affecting other components of the system.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Key Technologies</ProjectSectionHeading>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Plex Media Server</ProjectSectionHeading>
                <ProjectSectionText>
                  Implemented Plex as the core media streaming engine, providing a
                  user-friendly interface for organizing and streaming media content across
                  devices. Configured transcoding capabilities for adaptive streaming based
                  on network conditions and device capabilities.
                </ProjectSectionText>
              </div>
              <div>
                <ProjectSectionHeading level={4}>Docker Containerization</ProjectSectionHeading>
                <ProjectSectionText>
                  Deployed modular services using Docker for simplified management and
                  scalability. Each service is containerized with proper networking,
                  volumes, and resource limits configured for optimal performance and
                  isolation.
                </ProjectSectionText>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Security Implementation</ProjectSectionHeading>
              <ProjectSectionText>
                Security was a primary focus throughout the development process. The
                platform implements end-to-end encryption for all data transmission using
                industry-standard protocols.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Cloudflare Argo Tunnels</ProjectSectionHeading>
                <ProjectSectionText>
                  Implemented Cloudflare Argo Tunnels for zero-trust, remote connectivity
                  without exposing network ports. This eliminates the need for port
                  forwarding and provides automatic DDoS protection while maintaining
                  low-latency connections.
                </ProjectSectionText>
              </div>
              <div>
                <ProjectSectionHeading level={4}>End-to-End Encryption</ProjectSectionHeading>
                <ProjectSectionText>
                  All communications between the server and clients are encrypted using
                  TLS 1.3, ensuring data privacy and integrity during transmission. The
                  implementation includes certificate management and automatic renewal.
                </ProjectSectionText>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Key Features</ProjectSectionHeading>
            </ProjectTextRow>
            <ProjectTextRow>
              <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                <li>
                  <strong>Cross-Device Synchronization:</strong> Seamless access to media
                  and files across multiple devices with automatic sync capabilities
                </li>
                <li>
                  <strong>Scalable Storage:</strong> Flexible storage configuration with
                  support for external drives and network-attached storage
                </li>
                <li>
                  <strong>Automated Backups:</strong> Scheduled backup routines ensuring
                  data redundancy and disaster recovery
                </li>
                <li>
                  <strong>User Management:</strong> Multi-user support with granular
                  permission controls and resource quotas
                </li>
                <li>
                  <strong>Remote Access:</strong> Secure external access without VPN
                  configuration through Cloudflare tunnels
                </li>
                <li>
                  <strong>Resource Monitoring:</strong> Real-time monitoring dashboards for
                  system health, storage usage, and network performance
                </li>
              </ul>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Technical Challenges</ProjectSectionHeading>
              <ProjectSectionText>
                One of the main challenges was optimizing transcoding performance while
                maintaining quality. This was solved by implementing hardware acceleration
                using GPU passthrough to Docker containers, significantly reducing CPU
                usage and improving concurrent stream handling.
              </ProjectSectionText>
              <ProjectSectionText>
                Another challenge involved configuring secure remote access without
                compromising the local network. Cloudflare Argo Tunnels provided an elegant
                solution by creating encrypted tunnels without requiring port forwarding or
                VPN setup, enhancing both security and ease of use.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project Outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                The self-hosted cloud platform successfully demonstrates the feasibility
                of building enterprise-grade infrastructure for personal use. The system
                has been running reliably with 99.9% uptime, handling multiple concurrent
                streams and large file transfers without performance degradation.
              </ProjectSectionText>
              <ProjectSectionText>
                This project showcases expertise in system architecture, DevOps practices,
                container orchestration, and security implementation. The modular design
                allows for easy expansion with additional services and features as needed.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
