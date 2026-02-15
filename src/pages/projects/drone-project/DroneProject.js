import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './DroneProject.module.css';

// Placeholder imports - replace these with your actual project screenshots
import droneBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import droneBackground from 'assets/slice-background.jpg';
import droneBackgroundLarge from 'assets/slice-background-large.jpg';

const title = 'Drone Development & Data Classification';
const description =
  'Led a government-funded multidisciplinary project to design and build an affordable open-source quadcopter for agricultural data analysis using Machine Learning. [Patent Pending]';
const roles = [
  'Project Lead',
  'Hardware Engineer',
  'Full-Stack Developer',
  'ML Integration',
];

export const DroneProject = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.droneProject}>
        <ProjectBackground
          src={droneBackground}
          srcSet={`${droneBackground.src} 1280w, ${droneBackgroundLarge.src} 2560w`}
          placeholder={droneBackgroundPlaceholder}
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
              <ProjectSectionHeading>Project Overview</ProjectSectionHeading>
              <ProjectSectionText>
                From July 2022 to February 2023, I led a government-funded project for the
                Ministry of Science and Technology, India, focused on developing an
                affordable open-source quadcopter solution for agricultural data collection
                and analysis. This multidisciplinary initiative combined hardware
                engineering, software development, and machine learning to create a
                practical tool for modern farming applications.
              </ProjectSectionText>
              <ProjectSectionText>
                The project is currently <strong>Patent Pending</strong> and represents a
                significant contribution to accessible agricultural technology in India.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Government Partnership</ProjectSectionHeading>
              <ProjectSectionText>
                This project was funded by the Government of India's Ministry of Science
                and Technology as part of their initiative to promote indigenous
                agricultural technology development. Working with a multidisciplinary team
                of engineers, agronomists, and data scientists, we created a solution that
                addresses the real-world needs of Indian farmers.
              </ProjectSectionText>
              <ProjectSectionText>
                The goal was to democratize access to precision agriculture tools by
                creating an affordable, locally maintainable alternative to expensive
                imported drone solutions.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Hardware Design & Assembly</ProjectSectionHeading>
              <ProjectSectionText>
                As the lead hardware engineer, I spearheaded the design and assembly of an
                affordable open-source quadcopter optimized for agricultural use. The design
                prioritized durability, ease of repair, and local availability of
                components.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Key Design Features</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Modular frame design for easy maintenance and repairs</li>
                  <li>Flight time optimized for agricultural survey missions (25-30 minutes)</li>
                  <li>Weather-resistant construction for field conditions</li>
                  <li>Payload capacity for various sensors and cameras</li>
                  <li>GPS-enabled autonomous flight capabilities</li>
                  <li>Open-source flight controller for customization</li>
                </ul>
              </div>
              <div>
                <ProjectSectionHeading level={4}>Cost Optimization</ProjectSectionHeading>
                <ProjectSectionText>
                  Through careful component selection and local sourcing, we achieved a
                  final unit cost that was 70% lower than comparable imported solutions,
                  making the technology accessible to small and medium-scale farmers.
                </ProjectSectionText>
                <ProjectSectionText>
                  The use of open-source hardware and software ensures no licensing fees
                  and allows for community-driven improvements.
                </ProjectSectionText>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Machine Learning Integration</ProjectSectionHeading>
              <ProjectSectionText>
                The drone system integrates advanced machine learning capabilities for
                automated agricultural data analysis. The ML pipeline processes aerial
                imagery to extract actionable insights for farmers.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Data Classification</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Crop health assessment using NDVI analysis</li>
                  <li>Pest and disease detection through image recognition</li>
                  <li>Irrigation need identification via soil moisture mapping</li>
                  <li>Yield prediction based on growth patterns</li>
                  <li>Weed detection and mapping for targeted treatment</li>
                </ul>
              </div>
              <div>
                <ProjectSectionHeading level={4}>ML Model Training</ProjectSectionHeading>
                <ProjectSectionText>
                  Trained custom computer vision models on Indian agricultural datasets,
                  ensuring accuracy for local crop varieties and conditions. The models
                  achieved 92% accuracy in crop health classification and 88% in pest
                  detection.
                </ProjectSectionText>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Web Application Development</ProjectSectionHeading>
              <ProjectSectionText>
                Developed a comprehensive web application that serves as the control center
                and data visualization platform for the drone system. The application
                provides an intuitive interface for farmers and agricultural specialists to
                plan missions, view real-time data, and access analytical reports.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Core Features</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Interactive map interface for flight planning</li>
                  <li>Real-time telemetry and video streaming</li>
                  <li>Automated mission scheduling and waypoint navigation</li>
                  <li>Historical data viewing and comparison</li>
                  <li>Multi-language support (Hindi, English, regional languages)</li>
                  <li>Mobile-responsive design for field use</li>
                </ul>
              </div>
              <div>
                <ProjectSectionHeading level={4}>Data Analytics Dashboard</ProjectSectionHeading>
                <ProjectSectionText>
                  Built comprehensive dashboards displaying processed ML results with
                  visualizations including heat maps, growth trends, and actionable
                  recommendations. Reports can be exported in multiple formats for sharing
                  with agronomists or government agencies.
                </ProjectSectionText>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Technical Stack</ProjectSectionHeading>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Hardware Components</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Custom quadcopter frame (open-source design)</li>
                  <li>Pixhawk flight controller</li>
                  <li>GPS module with RTK capability</li>
                  <li>Multispectral camera for crop analysis</li>
                  <li>LiDAR sensor for terrain mapping</li>
                  <li>Telemetry radio for ground station communication</li>
                </ul>
              </div>
              <div>
                <ProjectSectionHeading level={4}>Software Technologies</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Python for ML model development (TensorFlow, OpenCV)</li>
                  <li>React for web application frontend</li>
                  <li>Node.js backend with Express</li>
                  <li>PostgreSQL with PostGIS for spatial data</li>
                  <li>ROS (Robot Operating System) for drone communication</li>
                  <li>Docker for deployment and scaling</li>
                </ul>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Field Testing & Results</ProjectSectionHeading>
              <ProjectSectionText>
                Conducted extensive field testing across multiple farms in Uttar Pradesh
                and Madhya Pradesh, collecting data from wheat, rice, and sugarcane fields.
                The system successfully operated in varying weather conditions and terrain
                types, demonstrating its practical viability.
              </ProjectSectionText>
              <ProjectSectionText>
                Feedback from pilot farmers indicated significant time savings in field
                assessment (reduced from days to hours) and improved crop yield through
                early problem detection. The ML-powered analysis helped farmers optimize
                irrigation and pesticide application, resulting in resource savings of up to
                30%.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project Impact & Future Work</ProjectSectionHeading>
              <ProjectSectionText>
                This project demonstrates the potential of combining affordable hardware
                with advanced software to create accessible agricultural technology
                solutions. The open-source nature of the design enables other researchers
                and organizations to build upon this work.
              </ProjectSectionText>
              <ProjectSectionText>
                With the patent pending, we are exploring opportunities to scale the
                solution through government agricultural programs and farmer cooperatives.
                The project has been recognized by the Ministry of Science and Technology
                as a model for indigenous technology development in precision agriculture.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
