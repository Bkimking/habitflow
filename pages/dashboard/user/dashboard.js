// Dashboard.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Modal, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { addHabitTab } from '../../../utils/habit';
import Navbar from './navbar';
import styles from './dashboardstyles';

const Dashboard = ({ route, navigation }) => {
  // Retrieve user id passed from Login.js
  const userId = route.params?.userId; // Fallback to null if params are undefined

  const [tabs, setTabs] = useState(['⭐ My Habits']);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTabName, setNewTabName] = useState('');
  const [selectedTab, setSelectedTab] = useState(tabs[0]); // Track the selected tab
  const [habitDescription, setHabitDescription] = useState('');
  const [habits, setHabits] = useState({
    '⭐ My Habits': []
  });

  // Open modal for new tab name
  const handleAddTab = () => {
    setModalVisible(true);
  };

  // Add new tab with user-defined name
  const addTab = async () => {
    if (newTabName.trim()) {
      const newTab = newTabName.trim();
      setTabs([...tabs, newTab]);
      setHabits({
        ...habits,
        [newTab]: []
      });
      setNewTabName('');
      setModalVisible(false);
  
      try {
        // Pass the userId when calling addHabitTab
        const response = await addHabitTab(userId, newTab);
        console.log('New tab added to DB:', response);
      } catch (error) {
        console.error('Error adding new tab to DB:', error);
      }
    }
  };

  // Handle adding a new habit to the selected tab
  const handleAddHabit = () => {
    if (habitDescription.trim()) {
      const updatedHabits = { ...habits };
      updatedHabits[selectedTab].push(habitDescription.trim());
      setHabits(updatedHabits);
      setHabitDescription('');
    } else {
      console.log("Please provide a habit description.");
    }
  };

  return (
    <View style={styles.container}>
      <Navbar />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity key={index} style={styles.tab} onPress={() => setSelectedTab(tab)}>
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.tab} onPress={handleAddTab}>
          <Text style={styles.tabText}>+ New Habit Tab</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.habittab}>
        <Text style={styles.tabText}>{`${selectedTab}`}</Text>
        {habits[selectedTab]?.map((habit, index) => (
          <Text key={index} style={styles.habitText}>{habit}</Text>
        ))}
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <View style={styles.inputWithIcon}>
          <TextInput
            style={[styles.input, styles.inputField]}
            placeholder={`Add habit to ${selectedTab}`}
            value={habitDescription}
            onChangeText={setHabitDescription}
          />
          <TouchableOpacity onPress={handleAddHabit}>
            <FontAwesome name="plus" size={20} color="#007AFF" style={styles.inputIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>New Habit Tab</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter habit name"
              value={newTabName}
              onChangeText={setNewTabName}
            />
            <Button title="Add Tab" onPress={addTab} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} color="red" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Dashboard;
