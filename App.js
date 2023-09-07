import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>
    <View style={styles.inputContainer} >
      <TextInput style={styles.textInput} placeholder='Enter your goals' />
      <Button title="Add goal" />
    </View>
    <View style={styles.goalContainer}>
      <Text>My goals...</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 6,
    marginRight: 10
  },
  goalContainer: {
    flex: 3
  }

});
