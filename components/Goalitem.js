import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.itemKey)}>
            <View style={styles.listGoals}>
                <Text>{props.text}</Text>
            </View>
        </Pressable>
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