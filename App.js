import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://via.placeholder.com/150',
            }}
            style={styles.profilePic}
          />
          <Text style={styles.name}>Dharmik Mangukiya</Text>
          <Text style={styles.contact}>📧 drmikmangukiya014@gmail.com</Text>
          <Text style={styles.contact}>📱 +431 276 1261</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🌟 Interests</Text>
          <Text style={styles.info}>🎮 Gaming</Text>
          <Text style={styles.info}>📚 Reading</Text>
          <Text style={styles.info}>🎵 Music</Text>
          <Text style={styles.info}>🏋️‍♂️ Fitness</Text>
          <Text style={styles.info}>🌍 Traveling</Text>
          <Text style={styles.info}>💡 Technology</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💻 Professional Skills</Text>
          <Text style={styles.info}>🖥️ React Native</Text>
          <Text style={styles.info}>⚙️ Node.js</Text>
          <Text style={styles.info}>🌐 JavaScript</Text>
          <Text style={styles.info}>🛠️ Git & GitHub</Text>
          <Text style={styles.info}>📱 Mobile App Development</Text>
          <Text style={styles.info}>🔗 API Integration</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B88A2',
  },
  scrollContainer: {
    alignItems: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: '#fff',
    borderWidth: 3,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  contact: {
    fontSize: 16,
    color: '#e0f7fa',
  },
  section: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4B88A2',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 5,
  },
  info: {
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
    lineHeight: 24,
  },
});
