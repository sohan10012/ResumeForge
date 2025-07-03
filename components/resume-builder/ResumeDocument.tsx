import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { ResumeData } from '@/lib/resume-types';

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12, fontFamily: 'Helvetica' },
  section: { marginBottom: 10 },
  heading: { fontSize: 14, marginBottom: 4, fontWeight: 'bold' },
  text: { marginBottom: 2 },
});

export default function ResumeDocument({ resumeData }: { resumeData: ResumeData }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>{resumeData.personalInfo.name}</Text>
          <Text style={styles.text}>{resumeData.personalInfo.email}</Text>
          <Text style={styles.text}>{resumeData.personalInfo.phone}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Experience</Text>
          {resumeData.experience.map((exp, idx) => (
            <Text key={idx} style={styles.text}>{exp.title} at {exp.company} — {exp.duration}</Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Education</Text>
          {resumeData.education.map((edu, idx) => (
            <Text key={idx} style={styles.text}>{edu.degree} at {edu.institution} — {edu.year}</Text>
          ))}
        </View>

        {/* Add Skills, Projects, Achievements similarly */}
      </Page>
    </Document>
  );
}
