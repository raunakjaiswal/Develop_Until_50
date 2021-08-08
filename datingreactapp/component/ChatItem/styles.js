import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  chat: {
    color: 'gray',
    marginTop: 3,
    fontSize: 15,
  },
});

export default styles;
