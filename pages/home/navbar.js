import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import styles from './navbarstyles';

const Navbar = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleSettingsPress = () => {
    navigation.navigate('Settings');
    setMenuVisible(false); // Close menu after navigating
  };

  const handleHabitPress = () => {
    navigation.navigate('Home');
    setMenuVisible(false); // Close menu after navigating
  };

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={handleHabitPress}>
          <Text style={styles.title}>HabitFlow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleMenu} style={styles.iconContainer}>
          <Icon name="more-vertical" type="feather" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Settings Menu */}
      {menuVisible && (
        <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
          <View style={styles.overlay}>
            <TouchableWithoutFeedback>
              <View style={styles.menu}>
                <TouchableOpacity onPress={handleSettingsPress}>
                  <Text style={styles.menuItem}>Settings</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default Navbar;
