import {  View } from 'react-native';
import TodoApp from './src/TodoApp';
import { Provider } from 'react-redux';
import  Store  from './src/redux/Store';

export default function App() {
  return (
    <View >
      <Provider store={Store}>
      <TodoApp />
      </Provider>
    </View>
  );
}