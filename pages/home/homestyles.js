import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    zIndex: 1,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 2,
    maxHeight:'auto',
    top: 70,
  },
  backgroundImage: {
    width: '100%',
    height: 650,
  },
  title: {
    top: 70,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 10,
  },
  subtitle: {
    top: 100,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 30,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#FF7043',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  section: {
    marginTop: 20,
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
  },
  sectionTitle: {
    top: 70,
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
  },
  sectionText: {
    top: 100,
    fontSize: 25,
    textAlign: 'center',
    color: '#ffffff',
  },
  helpButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF7043',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  helpText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
