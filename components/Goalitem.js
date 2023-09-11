import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <Pressable 
        android_ripple={{ color: '#eeeeee'}}
        onPress={props.onDeleteItem.bind(this, props.itemKey)}
        style={({pressed}) => pressed && styles.pressed}>
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
        borderColor: '#6247c0',
        backgroundColor: "#6247c0",
        borderRadius: 4
      }
});

export default GoalItem;