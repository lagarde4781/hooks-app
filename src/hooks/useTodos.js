import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        const addAction = {
            type: '[TODO] Add Todo',
            payload: todo
        };

        dispatch(addAction);
    }

    const handleDeleteTodo = (id) => {
        const removeAction = {
            type: '[TODO] Remove Todo',
            payload: id
        };

        dispatch(removeAction);
    }

    const handleToggleTodo = (id) => {
        const toggleAction = {
            type: '[TODO] Toggle Todo',
            payload: id
        };

        dispatch(toggleAction);
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingCount: todos.filter(todo => !todo.done)?.length
    }

}
