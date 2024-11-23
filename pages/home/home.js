import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from './navbar';
import styles from './homestyles';

const Home = () => {
  const navigation = useNavigation();

  const handleEmailPress = () => {
    Linking.openURL('mailto:support@habitflow.kenswedtechclub.org');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+254743208307');
  };

  const handleWebsitePress = () => {
    Linking.openURL('https://habitflow.kenswedtechclub.org');
  };

  const handleGetStarted = () => {
    navigation.navigate('Login'); // Navigates to Login screen
  };

  return (
    <View style={styles.container}>
      <Navbar />

      <ScrollView contentContainerStyle={styles.content}>
        {/* Header Section with Background Image */}
        <ImageBackground source={require('../../assets/img3.jpg')} style={styles.backgroundImage}>
          <Text style={styles.title}>Build Better Habits</Text>
          <Text style={styles.subtitle}>Empowering Your Path to Lasting Success</Text>
        </ImageBackground>

        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        {/* About Us Section with Background Image */}
        <ImageBackground source={require('../../assets/img2.jpg')} style={[styles.backgroundImage, styles.section]}>
          <Text style={styles.sectionTitle}>About Us</Text>
          <Text style={styles.sectionText}>We are committed to helping you build and maintain positive habits that lead to lasting success in all areas of your life.</Text>
        </ImageBackground>

        {/* Contact Us Section with Background Image */}
        <ImageBackground source={require('../../assets/img4.jpg')} style={[styles.backgroundImage, styles.section]}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.sectionText}>
            Have questions? Reach out to us at{' '}
            <TouchableOpacity onPress={handleEmailPress}>
              <Text style={{ color: 'blue', fontSize: 18 }}>support@habitflow.kenswedtechclub.org</Text>
            </TouchableOpacity>{' '}
            or call us at{' '}
            <TouchableOpacity onPress={handlePhonePress}>
              <Text style={{ color: 'blue', fontSize: 18 }}>(+254) 743-208-307</Text>
            </TouchableOpacity>{' '}
            or visit our website{' '}
            <TouchableOpacity onPress={handleWebsitePress}>
              <Text style={{ color: 'blue', fontSize: 18 }}>habitflow.kenswedtechclub.org</Text>
            </TouchableOpacity>.
          </Text>
        </ImageBackground>
      </ScrollView>

      {/* Help button on top of all components */}
      <TouchableOpacity style={styles.helpButton}>
        <Text style={styles.helpText}>?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
