import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute', // Positions the entire container above other components
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000, // Ensures the container is above all components
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 15,
    backgroundColor: '#e0e0e0',
    top: 20,
    zIndex: 1001, // Ensures navbar is above other components
  },
  iconContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999, // Ensures overlay appears on top of main content but below the navbar
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 250,
    height: '100%',
    backgroundColor: '#FF7043', // Matches the sidebar color in the design
    paddingTop: 40,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    zIndex: 1002, // Ensures sidebar is above all components, including overlay
  },
  sidebarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f5d7b0',
    marginBottom: 5,
  },
  username: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  menuItems: {
    marginTop: 20,
  },
  menuItem: {
    fontSize: 16,
    color: '#000',
    marginVertical: 10,
  },
});
