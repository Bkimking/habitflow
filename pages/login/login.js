import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { login } from '../../utils/auth'; // Ensure the login function in utils/auth accepts email and password
import Navbar from '../home/navbar';
import styles from './loginstyles';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');  // Track email
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login(email, password); // Pass email and password
      if (response.success) {
        Alert.alert('Success', 'Logged in successfully');
        setEmail('');
        setPassword('');
        // Pass the userId, email, and username to the UserDashboard
        navigation.navigate('UserDashboard', { 
          userId: response.id, 
          userEmail: response.email, 
          userUsername: response.username // Correctly formatted object without the extra `)`
        });
      } else {
        Alert.alert('Error', response.error || 'Invalid login credentials');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred during login');
      console.error('Login error:', error);
    }
  };  

  return (
    <View style={styles.container}>
      <Navbar />
      
      <View style={styles.form}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"  // Change placeholder to Email
          value={email}  // Bind the email state
          onChangeText={setEmail}  // Handle email input
          keyboardType="email-address"  // Use email keyboard type
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.linkText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
