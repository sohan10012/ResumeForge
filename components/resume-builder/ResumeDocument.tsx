import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import { ResumeData } from '@/lib/resume-types';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.4,
    color: '#1f2937',
    padding: 40,
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    borderBottomStyle: 'solid',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
    textAlign: 'center',
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    fontSize: 9,
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
    marginBottom: 2,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#111827',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d5db',
    borderBottomStyle: 'solid',
  },
  educationItem: {
    marginBottom: 12,
  },
  institutionName: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 2,
  },
  degreeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 1,
  },
  degreeText: {
    fontSize: 10,
    color: '#374151',
    fontFamily: 'Helvetica-Oblique',
    flex: 1,
  },
  dateText: {
    fontSize: 9,
    color: '#6b7280',
    fontFamily: 'Helvetica-Oblique',
  },
  locationText: {
    fontSize: 9,
    color: '#6b7280',
  },
  skillsContainer: {
    gap: 4,
  },
  skillCategory: {
    flexDirection: 'row',
    marginBottom: 3,
    alignItems: 'flex-start',
  },
  skillLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#111827',
    width: 80,
    marginRight: 8,
  },
  skillValue: {
    fontSize: 10,
    color: '#374151',
    flex: 1,
    lineHeight: 1.3,
  },
  experienceItem: {
    marginBottom: 14,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  companyName: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#111827',
  },
  positionTitle: {
    fontSize: 10,
    color: '#374151',
    fontFamily: 'Helvetica-Oblique',
    marginBottom: 1,
  },
  experienceLocation: {
    fontSize: 9,
    color: '#6b7280',
  },
  experienceDate: {
    fontSize: 9,
    color: '#6b7280',
    textAlign: 'right',
  },
  descriptionList: {
    marginLeft: 12,
    marginTop: 4,
  },
  bulletPoint: {
    fontSize: 10,
    color: '#374151',
    marginBottom: 2,
    lineHeight: 1.4,
  },
  projectItem: {
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 2,
  },
  projectMeta: {
    fontSize: 9,
    color: '#6b7280',
    fontFamily: 'Helvetica-Oblique',
    marginBottom: 3,
  },
  projectDescription: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.4,
  },
  achievementsList: {
    marginLeft: 12,
  },
  achievementItem: {
    fontSize: 10,
    color: '#374151',
    marginBottom: 3,
    lineHeight: 1.4,
  },
  link: {
    color: '#2563eb',
    textDecoration: 'none',
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