import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, clearAllTodos } from "./redux/Action";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const task = useSelector((state) => state.todos);

  const handleAdd = () => {
    if (inputValue === "") {
      setErr("Enter a Todo!!");
    } else {
      dispatch(addTodo(inputValue));
      setInputValue("");
      setErr("");
    }
  };

  return (
    <View >
      <View style={styles.appView}>
        <Text style={{ fontSize: 20 }}>TODO APP</Text>
        <TouchableOpacity
          onPress={() => dispatch(clearAllTodos())}
          style={[styles.addButton, { backgroundColor: "red" }]}
        >
          <Text style={{ color: "white" }}>Clear All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter a Todo....."
          value={inputValue}
          onChangeText={(value) => setInputValue(value)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.errText}>{err}</Text>
      <View >
          <TodoList />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  appView: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 30,
  },
  inputView: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    height: 40,
  },
  inputText: {
    borderWidth: 1,
    flex: 1,
    paddingLeft: 10,
    borderRadius: 7,
  },
  addButton: {
    backgroundColor: "green",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  errText: {
    color: "red",
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
});

export default TodoApp;
