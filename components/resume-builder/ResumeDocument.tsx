import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { ResumeData } from '@/lib/resume-types';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    lineHeight: 1.2,
    color: '#1f2937',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    borderBottomStyle: 'solid',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 6,
    textAlign: 'center',
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    fontSize: 8,
    color: '#4b5563',
  },
  contactLeft: {
    flex: 1,
  },
  contactRight: {
    flex: 1,
    textAlign: 'right',
  },
  contactItem: {
    marginBottom: 1,
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
    fontFamily: 'Helvetica-Oblique',
    flex: 1,
  },
  dateText: {
    fontSize: 8,
    color: '#6b7280',
    fontFamily: 'Helvetica-Oblique',
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
    fontFamily: 'Helvetica-Oblique',
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
    fontFamily: 'Helvetica-Oblique',
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

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.name}>{resumeData.personalInfo.name}</Text>
          <View style={styles.contactInfo}>
            <View style={styles.contactLeft}>
              <Text style={styles.contactItem}>
                Email: {resumeData.personalInfo.email}
              </Text>
              <Text style={styles.contactItem}>
                Phone: {resumeData.personalInfo.phone}
              </Text>
              <Text style={styles.contactItem}>
                Location: {resumeData.personalInfo.location}
              </Text>
            </View>
            <View style={styles.contactRight}>
              {resumeData.personalInfo.linkedin && (
                <Text style={styles.contactItem}>
                  LinkedIn: {cleanUrl(resumeData.personalInfo.linkedin)}
                </Text>
              )}
              {resumeData.personalInfo.github && (
                <Text style={styles.contactItem}>
                  GitHub: {cleanUrl(resumeData.personalInfo.github)}
                </Text>
              )}
              {resumeData.personalInfo.portfolio && (
                <Text style={styles.contactItem}>
                  Portfolio: {cleanUrl(resumeData.personalInfo.portfolio)}
                </Text>
              )}
            </View>
          </View>
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