import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo, deleteTodo } from "./redux/Action";

const TodoList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos);
  var data = useSelector((state) => state.completed);
  
  return (
    <View>
      <FlatList
        keyExtractor={(item, id) => id}
        data={tasks}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.viewTasks}>
              <Text
                style={{
                  flex: 1,
                  marginRight: 5,
                  alignSelf: "center",
                  textDecorationLine:
                    tasks[index] === data ? "line-through" : "none",
                }}
              >
                {item}{" "}
              </Text>
              <View style={styles.viewButtons}>
                <TouchableOpacity
                  onPress={() => dispatch(completeTodo(index))}
                  style={styles.doneButtons}
                >
                  <Text>Done</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => dispatch(deleteTodo(index))}
                  style={styles.xButtons}
                >
                  <Text>X</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  viewTasks: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  viewButtons: {
    flexDirection: "row",
    alignSelf: "center",
  },
  doneButtons: {
    backgroundColor: "green",
    padding: 5,
    marginRight: 10,
    borderRadius: 5,
  },
  xButtons: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 5,
  },
});

export default TodoList;
