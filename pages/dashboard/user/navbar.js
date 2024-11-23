import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import styles from './navbarstyles';

const Navbar = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [menuVisible, setMenuVisible] = useState(false);

  // Retrieve user username passed from Login.js
  const userUsername = route.params?.userUsername;

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleSettingsPress = () => {
    navigation.navigate('Settings');
    setMenuVisible(false);
  };

  const handleLogoutPress = () => {
    navigation.navigate('Logout');
    setMenuVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Text style={styles.title}>Welcome {userUsername}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleMenu} style={styles.iconContainer}>
          <Icon name="more-vertical" type="feather" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {menuVisible && (
        <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
          <View style={styles.overlay}>
            <View style={styles.menu}>
              <TouchableOpacity onPress={handleSettingsPress}>
                <Text style={styles.menuItem}>Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogoutPress}>
                <Text style={styles.menuItem}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default Navbar;
