/**
 * Created by janedler on 2018/7/31.
 */
let nextTodoId = 0
export const addTodo = text => {
    console.log('action>>'+text)

    return{
        type:'ADD_TODO',
        id:nextTodoId++,
        text
    }
}

export const setVisibilityFilter = filter => {
    return {
        type:'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = id => {
    return {
        type:'TOGGLE_TODO',
        id
    }
}
