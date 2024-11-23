import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { signup } from '../../utils/auth';
import Navbar from '../home/navbar';
import styles from './signupstyles';

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState(''); // Add state for username
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await signup(username, email, password); // Pass username, email, and password
      if (response.success) {
        Alert.alert('Success', 'Account created successfully');
        setUsername('');
        setEmail('');
        setPassword('');
        // Navigate to the login screen after successful signup
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', response.error || 'Failed to create account');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred during signup');
      console.error('Signup error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Navbar />
      
      <View style={styles.form}>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username} // Bind the username input field
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
