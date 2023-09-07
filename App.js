import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoalState, setEnteredGoalState] = useState('');
  const [courseGoal, setCourseGoal] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalState(enteredText);
  };
  function addGoalHandler() {
    setCourseGoal(currentCourseGoals => [...currentCourseGoals, enteredGoalState]);
  };

  return (
    <View style={styles.mainContainer}>
    <View style={styles.inputContainer} >
      <TextInput 
        style={styles.textInput}
        placeholder='Enter your goals'
        onChangeText={goalInputHandler} />
      <Button 
        title="Add goal"
        onPress={addGoalHandler}/>
    </View>
    <View style={styles.goalContainer}>
      {courseGoal.map((goal) => <Text key={goal}>{goal}</Text>)}
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
