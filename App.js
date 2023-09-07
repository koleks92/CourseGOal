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

  function deleteGoalHandler(key) {
    console.log(key);
    setCourseGoal((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== key)
    });
  };

  return (
    <View style={styles.mainContainer}>
    <GoalInput onAddGoal={addGoalHandler}/>
    <View style={styles.goalContainer}>
      <FlatList data={courseGoal} renderItem={(itemData) => {
        return <GoalItem text={itemData.item.text} itemKey={itemData.item.key} onDeleteItem={deleteGoalHandler}/>
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
