import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  tabsContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    top: 80,
  },
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tab: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#e8e8e8',
  },
  tabText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  habittab: {
    top: 90,
    marginTop: 5,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginHorizontal: 15,
  },
  habitText: {
    color: '#333',
    fontSize: 14,
    marginTop: 5,
  },
  inputContainer: {
    top: 90,
    marginTop: 20,
    marginHorizontal: 15,
    paddingBottom: 20,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  inputIcon: {
    right: 10,
    padding: 10,
    color: '#333',
  },
  inputField: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  // Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});
