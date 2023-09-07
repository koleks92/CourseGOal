import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.listGoals}>
            <Text>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listGoals: {
        padding: 4,
        margin: 2,
        borderWidth: 1,
        borderRadius: 2,
        fontSize: 20,
        borderColor: '#eeeeee'
      }
});

export default GoalItem;