import { View, TextInput, Button, StyleSheet, Modal, Image} from "react-native";
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
    <Modal visible={props.visible} animationType="fade">
        <View style={styles.inputContainer} >
        <Image 
            source={require('../assets/images/logo.png')} 
            style={styles.imageLogo}/>
        <TextInput 
            style={styles.textInput}
            placeholder='Enter your goals'
            onChangeText={goalInputHandler}
            value={enteredGoalState} />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button 
                title="Add goal"
                onPress={addGoalHandler}/>
            </View>
            <View style={styles.button}>
                <Button title="Cancel" onPress={props.onCancel}/>
            </View>
        </View>
        </View>
    </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: '#1fd43d'
        
      },
      textInput: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#cccccc',
        backgroundColor: '#ffffff',
        padding: 6,
        marginBottom: 10,
      },
      buttonContainer: {
        flexDirection: 'row'
      },
      button: {
        width: '25%',
        marginHorizontal: 8
      },
      imageLogo: {
        width: '80%',
        height: '50%',
        margin: 10,
        
      }
});