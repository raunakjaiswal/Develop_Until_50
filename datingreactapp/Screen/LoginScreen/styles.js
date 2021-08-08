import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FE5665',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: 50,
    color: 'white',
    marginBottom: 25,
  },
  icon: {
    width: 25,
    height: 25,
    borderRadius: 20,
  },
  signInOptionsContainer: {
    width: '90%',
  },
  signInButton: {
    backgroundColor: 'white',
    marginVertical: 10,
    padding: 15,
    borderRadius: 30,
    flexDirection: 'row',
  },
  signInText: {
    textTransform: 'uppercase',
    color: '#7E7578',
    fontSize: 16,
    marginHorizontal: 20,
    fontWeight: 'bold',
  },
});

export default styles;
