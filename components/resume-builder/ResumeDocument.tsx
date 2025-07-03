import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { ResumeData } from '@/lib/resume-types';

// Register Times New Roman font (using built-in Times-Roman)
Font.register({
  family: 'Times-Roman',
  fonts: [
    { src: 'Times-Roman' },
    { src: 'Times-Bold', fontWeight: 'bold' },
    { src: 'Times-Italic', fontStyle: 'italic' },
    { src: 'Times-BoldItalic', fontWeight: 'bold', fontStyle: 'italic' },
  ]
});

// Add minimal SVG icon components for PDF rendering
const IconEmail = () => (
  <svg width="10" height="10" viewBox="0 0 20 20" fill="none"><rect width="20" height="20" rx="4" fill="#222"/><path d="M4 6l6 5 6-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="6" width="12" height="8" rx="2" stroke="#fff" strokeWidth="1.5"/></svg>
);
const IconLinkedIn = () => (
  <svg width="10" height="10" viewBox="0 0 20 20" fill="none"><rect width="20" height="20" rx="4" fill="#222"/><path d="M6.5 8.5v5m7-5v5m-7-7a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm-7 7h2m5-2.5a2.5 2.5 0 00-5 0V13" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const IconGitHub = () => (
  <svg width="10" height="10" viewBox="0 0 20 20" fill="none"><rect width="20" height="20" rx="4" fill="#222"/><path d="M10 15v-2.5m0 0c-3.5 0-4-1.5-4-3.5a4 4 0 018 0c0 2-0.5 3.5-4 3.5zm0 0v2.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const IconPortfolio = () => (
  <svg width="10" height="10" viewBox="0 0 20 20" fill="none"><rect width="20" height="20" rx="4" fill="#222"/><circle cx="10" cy="10" r="4" stroke="#fff" strokeWidth="1.5"/><path d="M10 6v4l3 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
);

// Register Helvetica font
Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'Helvetica' },
    { src: 'Helvetica-Bold', fontWeight: 'bold' },
    { src: 'Helvetica-Oblique', fontStyle: 'italic' },
    { src: 'Helvetica-BoldOblique', fontWeight: 'bold', fontStyle: 'italic' },
  ]
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    lineHeight: 1.2,
    color: '#1f2937',
    padding: 20,
    paddingTop: 16, // Reduced top padding
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 12,
    paddingBottom: 8,
    alignItems: 'center',
  },
  name: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
    textAlign: 'center',
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 2,
    gap: 8,
  },
  contactIcon: {
    marginRight: 2,
    marginLeft: 2,
  },
  contactLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 6,
    fontSize: 8,
    color: '#4b5563',
  },
  contactColRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 2,
  },
  contactCol: {
    flexDirection: 'column',
    fontSize: 8,
    color: '#4b5563',
    alignItems: 'flex-start',
    flex: 1,
  },
  contactColRight: {
    flexDirection: 'column',
    fontSize: 8,
    color: '#4b5563',
    alignItems: 'flex-end',
    flex: 1,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#111827',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d5db',
    borderBottomStyle: 'solid',
  },
  educationItem: {
    marginBottom: 8,
  },
  institutionName: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 1,
  },
  degreeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 1,
  },
  degreeText: {
    fontSize: 8,
    color: '#374151',
    fontStyle: 'italic',
    flex: 1,
  },
  dateText: {
    fontSize: 8,
    color: '#6b7280',
    fontStyle: 'italic',
  },
  locationText: {
    fontSize: 8,
    color: '#6b7280',
  },
  skillsContainer: {
    gap: 2,
  },
  skillCategory: {
    flexDirection: 'row',
    marginBottom: 2,
    alignItems: 'flex-start',
  },
  skillLabel: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#111827',
    width: 60,
    marginRight: 6,
  },
  skillValue: {
    fontSize: 8,
    color: '#374151',
    flex: 1,
    lineHeight: 1.2,
  },
  experienceItem: {
    marginBottom: 10,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 3,
  },
  companyName: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#111827',
  },
  positionTitle: {
    fontSize: 8,
    color: '#374151',
    fontStyle: 'italic',
    marginBottom: 1,
  },
  experienceLocation: {
    fontSize: 8,
    color: '#6b7280',
  },
  experienceDate: {
    fontSize: 8,
    color: '#6b7280',
    textAlign: 'right',
  },
  descriptionList: {
    marginLeft: 10,
    marginTop: 2,
  },
  bulletPoint: {
    fontSize: 8,
    color: '#374151',
    marginBottom: 1,
    lineHeight: 1.3,
  },
  projectItem: {
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 1,
  },
  projectMeta: {
    fontSize: 8,
    color: '#6b7280',
    fontStyle: 'italic',
    marginBottom: 2,
  },
  projectDescription: {
    fontSize: 8,
    color: '#374151',
    lineHeight: 1.3,
  },
  achievementsList: {
    marginLeft: 10,
  },
  achievementItem: {
    fontSize: 8,
    color: '#374151',
    marginBottom: 2,
    lineHeight: 1.3,
  },
});

interface ResumeDocumentProps {
  resumeData: ResumeData;
}

const ResumeDocument: React.FC<ResumeDocumentProps> = ({ resumeData }) => {
  const formatSkillCategory = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1) + ':';
  };

  const formatBulletPoints = (description: string) => {
    return description.split('\n').filter(point => point.trim().length > 0);
  };

  const cleanUrl = (url: string) => {
    return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  };

  const isCenteredLayout = resumeData.personalInfo.contactLayout === 'centered';

  const renderContactInfo = () => {
    if (isCenteredLayout) {
      // Centered: 4 links in a single row with icons
      return (
        <View style={styles.contactRow}>
          {resumeData.personalInfo.email && (
            <View style={styles.contactLink}>
              <IconEmail />
              <Text>{resumeData.personalInfo.email}</Text>
            </View>
          )}
          {resumeData.personalInfo.linkedin && (
            <View style={styles.contactLink}>
              <IconLinkedIn />
              <Text>{resumeData.personalInfo.linkedin}</Text>
            </View>
          )}
          {resumeData.personalInfo.github && (
            <View style={styles.contactLink}>
              <IconGitHub />
              <Text>{resumeData.personalInfo.github}</Text>
            </View>
          )}
          {resumeData.personalInfo.portfolio && (
            <View style={styles.contactLink}>
              <IconPortfolio />
              <Text>{resumeData.personalInfo.portfolio}</Text>
            </View>
          )}
        </View>
      );
    } else {
      // Full Details: left and right columns, name centered
      return (
        <View style={styles.contactColRow}>
          <View style={styles.contactCol}>
            {resumeData.personalInfo.email && (
              <Text>Email: {resumeData.personalInfo.email}</Text>
            )}
            {resumeData.personalInfo.phone && (
              <Text>Phone: {resumeData.personalInfo.phone}</Text>
            )}
            {resumeData.personalInfo.location && (
              <Text>Location: {resumeData.personalInfo.location}</Text>
            )}
          </View>
          <View style={styles.contactColRight}>
            {resumeData.personalInfo.linkedin && (
              <Text>LinkedIn: {resumeData.personalInfo.linkedin}</Text>
            )}
            {resumeData.personalInfo.github && (
              <Text>GitHub: {resumeData.personalInfo.github}</Text>
            )}
            {resumeData.personalInfo.portfolio && (
              <Text>Portfolio: {resumeData.personalInfo.portfolio}</Text>
            )}
          </View>
        </View>
      );
    }
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.name}>{resumeData.personalInfo.name}</Text>
          {renderContactInfo()}
        </View>

        {/* Education Section */}
        {resumeData.education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {resumeData.education.map((edu, index) => (
              <View key={index} style={styles.educationItem}>
                <Text style={styles.institutionName}>{edu.institution}</Text>
                <View style={styles.degreeInfo}>
                  <Text style={styles.degreeText}>
                    {edu.degree}{edu.field ? ` in ${edu.field}` : ''}
                    {edu.gpa ? `; GPA: ${edu.gpa}` : ''}
                  </Text>
                  <Text style={styles.dateText}>{edu.graduationDate}</Text>
                </View>
                {edu.location && (
                  <Text style={styles.locationText}>{edu.location}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {Object.entries(resumeData.skills).map(([category, skills]) => (
              skills && (
                <View key={category} style={styles.skillCategory}>
                  <Text style={styles.skillLabel}>
                    {formatSkillCategory(category)}
                  </Text>
                  <Text style={styles.skillValue}>{skills}</Text>
                </View>
              )
            ))}
          </View>
        </View>

        {/* Experience Section */}
        {resumeData.experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {resumeData.experience.map((exp, index) => (
              <View key={index} style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <View>
                    <Text style={styles.companyName}>{exp.company}</Text>
                    <Text style={styles.positionTitle}>{exp.position}</Text>
                    {exp.location && (
                      <Text style={styles.experienceLocation}>{exp.location}</Text>
                    )}
                  </View>
                  <Text style={styles.experienceDate}>
                    {exp.startDate} - {exp.endDate}
                  </Text>
                </View>
                {exp.description && (
                  <View style={styles.descriptionList}>
                    {formatBulletPoints(exp.description).map((point, i) => (
                      <Text key={i} style={styles.bulletPoint}>
                        • {point.trim()}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Projects Section */}
        {resumeData.projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {resumeData.projects.map((project, index) => (
              <View key={index} style={styles.projectItem}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectMeta}>
                  {project.technologies} | {project.date}
                  {project.githubLink && ` | ${cleanUrl(project.githubLink)}`}
                </Text>
                {project.description && (
                  <Text style={styles.projectDescription}>
                    {project.description}
                  </Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Achievements Section */}
        {resumeData.achievements.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Achievements</Text>
            <View style={styles.achievementsList}>
              {resumeData.achievements.map((achievement, index) => (
                <Text key={index} style={styles.achievementItem}>
                  • {achievement.description}
                  {achievement.date && ` (${achievement.date})`}
                </Text>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};

export default ResumeDocument;