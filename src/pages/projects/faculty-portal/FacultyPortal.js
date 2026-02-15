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
import styles from './FacultyPortal.module.css';

// Placeholder imports - replace these with your actual project screenshots
import portalBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import portalBackground from 'assets/slice-background.jpg';
import portalBackgroundLarge from 'assets/slice-background-large.jpg';

const title = 'Faculty Recruitment Portal - IIIT Lucknow';
const description =
  'A comprehensive web-based recruitment management system for IIIT Lucknow, streamlining the faculty hiring process from application to selection with automated workflows and real-time tracking.';
const roles = [
  'Full-Stack Development',
  'System Architecture',
  'UI/UX Design',
  'Database Design',
];

export const FacultyPortal = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.facultyPortal}>
        <ProjectBackground
          src={portalBackground}
          srcSet={`${portalBackground.src} 1280w, ${portalBackgroundLarge.src} 2560w`}
          placeholder={portalBackgroundPlaceholder}
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
                Developed a comprehensive faculty recruitment portal for the Indian
                Institute of Information Technology, Lucknow (IIIT-L) to modernize and
                streamline their hiring process. The system replaced manual,
                paper-based workflows with an efficient digital platform that manages
                the entire recruitment lifecycle.
              </ProjectSectionText>
              <ProjectSectionText>
                The portal serves multiple stakeholders including prospective faculty
                members, administrative staff, department heads, and the selection
                committee, each with customized interfaces and role-based access controls.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The Challenge</ProjectSectionHeading>
              <ProjectSectionText>
                IIIT Lucknow's traditional recruitment process involved manual handling of
                hundreds of applications, physical document verification, and coordination
                across multiple departments. This led to delays, miscommunication, and
                difficulty in tracking application status.
              </ProjectSectionText>
              <ProjectSectionText>
                The institution needed a robust digital solution that could handle high
                volumes of applications, ensure data security, provide transparent
                communication, and generate reports for decision-making while complying
                with government recruitment guidelines.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Key Features</ProjectSectionHeading>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Applicant Portal</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Online application form with validation</li>
                  <li>Document upload with format verification</li>
                  <li>Real-time application status tracking</li>
                  <li>Email notifications for updates</li>
                  <li>Application editing before submission</li>
                  <li>Payment integration for application fees</li>
                  <li>Downloadable application receipt</li>
                </ul>
              </div>
              <div>
                <ProjectSectionHeading level={4}>Administrative Dashboard</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Centralized application management</li>
                  <li>Advanced filtering and search capabilities</li>
                  <li>Bulk operations for application processing</li>
                  <li>Document verification workflow</li>
                  <li>Interview scheduling system</li>
                  <li>Automated email notifications</li>
                  <li>Comprehensive analytics dashboard</li>
                </ul>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Multi-Stage Workflow Management</ProjectSectionHeading>
              <ProjectSectionText>
                The portal implements a sophisticated workflow system that guides
                applications through various stages: Submission, Document Verification,
                Eligibility Check, Shortlisting, Interview Scheduling, Selection Committee
                Review, and Final Approval.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Automated Processing</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Automatic eligibility verification based on criteria</li>
                  <li>Document completeness checks</li>
                  <li>Duplicate application detection</li>
                  <li>Automatic email triggers at each stage</li>
                  <li>Deadline management and reminders</li>
                  <li>Audit trail for all actions</li>
                </ul>
              </div>
              <div>
                <ProjectSectionHeading level={4}>Committee Collaboration</ProjectSectionHeading>
                <ProjectSectionText>
                  Built-in tools for selection committee members to review applications,
                  add comments, score candidates, and collaborate on decisions. The system
                  maintains transparency while ensuring confidentiality of deliberations.
                </ProjectSectionText>
                <ProjectSectionText>
                  Committee members can access applications remotely, making the process
                  more efficient and inclusive.
                </ProjectSectionText>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Technical Architecture</ProjectSectionHeading>
              <ProjectSectionText>
                The portal is built using modern web technologies with a focus on security,
                scalability, and maintainability. The architecture follows best practices
                for enterprise application development.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Frontend Stack</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>React for component-based UI development</li>
                  <li>Redux for state management</li>
                  <li>Material-UI for consistent design system</li>
                  <li>React Router for navigation</li>
                  <li>Formik & Yup for form handling and validation</li>
                  <li>Chart.js for data visualization</li>
                  <li>Responsive design for mobile access</li>
                </ul>
              </div>
              <div>
                <ProjectSectionHeading level={4}>Backend Infrastructure</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Node.js with Express framework</li>
                  <li>PostgreSQL for relational data storage</li>
                  <li>JWT for secure authentication</li>
                  <li>Multer for file upload handling</li>
                  <li>Nodemailer for email notifications</li>
                  <li>PM2 for process management</li>
                  <li>Nginx as reverse proxy</li>
                </ul>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Security & Compliance</ProjectSectionHeading>
              <ProjectSectionText>
                Given the sensitive nature of recruitment data, security was paramount
                throughout the development process. The system implements multiple layers
                of security to protect applicant information and maintain system integrity.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Security Features</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>SSL/TLS encryption for all communications</li>
                  <li>Password hashing using bcrypt</li>
                  <li>Role-based access control (RBAC)</li>
                  <li>SQL injection prevention</li>
                  <li>XSS attack protection</li>
                  <li>CSRF token implementation</li>
                  <li>Rate limiting to prevent abuse</li>
                  <li>Secure file upload validation</li>
                </ul>
              </div>
              <div>
                <ProjectSectionHeading level={4}>Compliance & Data Protection</ProjectSectionHeading>
                <ProjectSectionText>
                  The system complies with Indian government data protection guidelines and
                  academic institution standards. Personal data is encrypted at rest, and
                  access logs are maintained for audit purposes.
                </ProjectSectionText>
                <ProjectSectionText>
                  Implemented automated data retention policies and secure data deletion
                  mechanisms to comply with privacy regulations.
                </ProjectSectionText>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Advanced Features</ProjectSectionHeading>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Reporting & Analytics</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Real-time application statistics dashboard</li>
                  <li>Department-wise application breakdown</li>
                  <li>Position-wise candidate analysis</li>
                  <li>Time-to-hire metrics</li>
                  <li>Demographic reports for diversity tracking</li>
                  <li>Export functionality (PDF, Excel, CSV)</li>
                  <li>Custom report generation</li>
                </ul>
              </div>
              <div>
                <ProjectSectionHeading level={4}>Communication System</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Automated email notifications at each stage</li>
                  <li>Bulk email capability for announcements</li>
                  <li>SMS integration for critical updates</li>
                  <li>Email template management</li>
                  <li>In-app notification system</li>
                  <li>Message history and tracking</li>
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
                The interface was designed to be intuitive and accessible for users with
                varying levels of technical expertise. Special attention was paid to the
                applicant experience to minimize dropout rates and ensure form completion.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Applicant-Friendly Design</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Multi-step form with progress indicator</li>
                  <li>Auto-save functionality to prevent data loss</li>
                  <li>Clear error messages and field validation</li>
                  <li>Help tooltips and instructions</li>
                  <li>Mobile-responsive application form</li>
                  <li>Document preview before submission</li>
                </ul>
              </div>
              <div>
                <ProjectSectionHeading level={4}>Admin Efficiency</ProjectSectionHeading>
                <ProjectSectionText>
                  The administrative interface prioritizes efficiency with keyboard
                  shortcuts, bulk actions, and quick filters. Dashboard widgets provide
                  at-a-glance insights into recruitment progress and pending tasks.
                </ProjectSectionText>
                <ProjectSectionText>
                  Customizable views allow administrators to organize information according
                  to their workflow preferences.
                </ProjectSectionText>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Performance Optimization</ProjectSectionHeading>
              <ProjectSectionText>
                To handle high traffic during application deadlines, the system was
                optimized for performance with caching, database query optimization, and
                efficient file handling.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Optimization Strategies</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Redis caching for frequently accessed data</li>
                  <li>Database indexing for fast queries</li>
                  <li>Lazy loading of large datasets</li>
                  <li>Image optimization and compression</li>
                  <li>CDN for static asset delivery</li>
                  <li>Code splitting for faster initial load</li>
                </ul>
              </div>
              <div>
                <ProjectSectionHeading level={4}>Scalability</ProjectSectionHeading>
                <ProjectSectionText>
                  The system architecture supports horizontal scaling to handle increasing
                  user loads. Load balancing and database replication ensure high
                  availability during peak periods.
                </ProjectSectionText>
                <ProjectSectionText>
                  Successfully handled 500+ concurrent applications during launch period
                  without performance degradation.
                </ProjectSectionText>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project Impact</ProjectSectionHeading>
              <ProjectSectionText>
                The Faculty Recruitment Portal has significantly improved the efficiency
                and transparency of IIIT Lucknow's hiring process. The digital system
                reduced application processing time by 60% and eliminated paper-based
                workflows entirely.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <div>
                <ProjectSectionHeading level={4}>Key Achievements</ProjectSectionHeading>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Processed 500+ applications in first recruitment cycle</li>
                  <li>Reduced processing time from weeks to days</li>
                  <li>100% digital document management</li>
                  <li>Zero data loss or security incidents</li>
                  <li>Positive feedback from applicants and staff</li>
                  <li>Successfully adopted by all departments</li>
                </ul>
              </div>
              <div>
                <ProjectSectionHeading level={4}>Future Enhancements</ProjectSectionHeading>
                <ProjectSectionText>
                  Planned features include AI-powered resume screening, video interview
                  integration, and analytics-driven candidate recommendations. The system
                  is designed to be extensible for future requirements.
                </ProjectSectionText>
                <ProjectSectionText>
                  Other IIIT institutions have expressed interest in adopting the platform,
                  demonstrating its success and reusability.
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
