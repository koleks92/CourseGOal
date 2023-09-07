import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";


function GoalInput (props) {
    const [enteredGoalState, setEnteredGoalState] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalState(enteredText);
      };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalState);
        setEnteredGoalState('');
    }

    return (
        <View style={styles.inputContainer} >
        <TextInput 
            style={styles.textInput}
            placeholder='Enter your goals'
            onChangeText={goalInputHandler}
            value={enteredGoalState} />
        <Button 
            title="Add goal"
            onPress={addGoalHandler}/>
    </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
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
      }
});