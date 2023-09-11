import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/Goalitem';
import GoalInput from './components/Goalinput';

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  };

  function endAddGoalHAndler() {
    setModalIsVisible(false);
  }
  
  function addGoalHandler(enteredGoalState) {
    setCourseGoal(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalState,
    key: Math.random().toString()}]);
    endAddGoalHAndler();
  };

  function deleteGoalHandler(key) {
    setCourseGoal((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== key)
    });
  };

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.mainContainer}>
      <View style={styles.modalButton}>
        <Button 
        title='Add New Goal'
        onPress={startAddGoalHandler}
        color="#a065ec"
        />
      </View>
    <GoalInput 
    visible={modalIsVisible}
    onAddGoal={addGoalHandler}
    onCancel={endAddGoalHAndler}
    />
    <View style={styles.goalContainer}>
      <FlatList data={courseGoal} renderItem={(itemData) => {
        return <GoalItem text={itemData.item.text} itemKey={itemData.item.key} onDeleteItem={deleteGoalHandler}/>
        }}/>
    </View>
  </View>
  </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#"
  },

  goalContainer: {
    flex: 4,
    margin: 10,
  },

  modalButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }




});
