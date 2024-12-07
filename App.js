import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
      <Text style={styles.appHeader}>My Portfolio</Text>

        <View style={styles.header}>
        <Image source={require('./assets/profile.jpg')} style={styles.profilePic}/>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>Dharmik Mangukiya</Text>
            <Text style={styles.contact}>📧 drmikmangukiya@gmail.com</Text>
            <Text style={styles.contact}>📱 +431 276 1261</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🌟 Interests</Text>
          <View style={styles.row}>
            <Text style={styles.info}>🎮 Gaming</Text>
            <Text style={styles.info}>📚 Reading</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.info}>🎵 Music</Text>
            <Text style={styles.info}>🏋️‍♂️ Fitness</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.info}>🌍 Traveling</Text>
            <Text style={styles.info}>💡 Technology</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💻 Professional Skills</Text>
          <View style={styles.row}>
            <Text style={styles.info}>🖥️ React Native</Text>
            <Text style={styles.info}>🎨 UI/UX Design</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.info}>🌐 JavaScript</Text>
            <Text style={styles.info}>🛠️ Git & GitHub</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.info}>🌐 Web Development</Text>
            <Text style={styles.info}>🔗 API Integration</Text>
          </View>
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
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  appHeader: {
    marginTop: 60,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profilePic: {
    width: 120,
    height: 140, 
    resizeMode: 'cover',
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 2,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15, 
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  contact: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  section: {
    width: '100%',
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    color: '#333',
    lineHeight: 24,
    width: '48%',
  },
});
