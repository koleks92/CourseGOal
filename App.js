import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';

import GoalItem from './components/Goalitem';
import GoalInput from './components/Goalinput';

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);



  function addGoalHandler(enteredGoalState) {
    setCourseGoal(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalState,
    key: Math.random().toString()}]);
  };

  return (
    <View style={styles.mainContainer}>
    <GoalInput onAddGoal={addGoalHandler}/>
    <View style={styles.goalContainer}>
      <FlatList data={courseGoal} renderItem={(itemData) => {
        return <GoalItem text={itemData.item.text}/>
        }}/>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 30,
  },

  goalContainer: {
    flex: 3,
    margin: 10,
  },


});
