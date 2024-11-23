import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Navbar from './navbar';
import styles from './contactstyles';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Handle form submission here
    Alert.alert("Message Sent", "Thank you for reaching out to us. We will get back to you soon.");
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <View style={styles.container}>
      {/* Navbar at the top */}
      <Navbar />

      {/* Contact Form */}
      <View style={styles.form}>
        <Text style={styles.title}>Contact Us</Text>

        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Your Message"
          value={message}
          onChangeText={text => setMessage(text)}
          multiline={true}
          numberOfLines={4}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Contact;
