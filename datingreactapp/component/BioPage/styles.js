import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingBottom: 15,
  },
  textContainer: {
    width: '90%',
    marginTop: 30,
    alignItems: 'center',
  },
  hobbyInput: {
    width: '90%',
    marginVertical: 10,
    fontSize: 20,
    lineHeight: 20,
    color: '#000000',
  },
});

export default styles;
