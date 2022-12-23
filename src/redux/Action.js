
export const addTodo =(todo)=>{
    return {
        type: "ADD_TODO",
        payload: todo,
    }
};

export const deleteTodo =(id)=>{
    return {
        type: "DELETE_TODO",
        payload: id,
    }
};
export const clearAllTodos =()=>{
    return {
        type : "CLEAR_ALL_TODOS",
    }
}
export const completeTodo =(index)=>{
    return {
        type : "MARK_AS_DONE",
        payload: index
    }
}
