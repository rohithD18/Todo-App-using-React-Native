const initialState={
    todos:[],
    completed: [],
}
const addTodoReducer =(state = initialState, action)=>{
    switch(action.type){
        case "ADD_TODO" :
            return {
                ...state,
                todos : [...state.todos, action.payload]
            };
        case "DELETE_TODO":
            const index = action.payload;
            return {
                ...state,
                todos: state.todos.filter((item)=> item != state.todos[index])
            }
        case "CLEAR_ALL_TODOS":
            return {
                ...state,
                todos: []
            }
        case "MARK_AS_DONE":
            const id = action.payload;
            const data =  state.todos[id];
            return {
                ...state,
              completed : data
        }
        default:
            return state;
    }
}
export default addTodoReducer;