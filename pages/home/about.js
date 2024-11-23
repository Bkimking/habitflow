import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Navbar from './navbar';
import styles from './aboutstyles';

const About = () => {
  return (
    <View style={styles.container}>
      {/* Navbar at the top */}
      <Navbar />

      {/* About Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>About Habit Flow</Text>
        <Text style={styles.description}>
          Habit Flow is an app designed to help you build and maintain positive habits. With our simple, user-friendly
          interface, you can easily track your daily activities and stay motivated to achieve your goals.
        </Text>
        <Text style={styles.description}>
          Our mission is to empower you on your journey to self-improvement by providing the tools you need to stay on
          track. Set up reminders, view your progress, and make lasting changes with Habit Flow.
        </Text>
        <Text style={styles.description}>
          Start today and take the first step towards building a better version of yourself. We're here to support you
          every step of the way!
        </Text>
      </ScrollView>
    </View>
  );
};

export default About;
