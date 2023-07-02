import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import { TodoItem } from '@/components/todolist/interface/TodoItem.interface'

interface TodosState {
    todos: TodoItem[]
}

const initialState: TodosState = {
    todos: [],
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo: TodoItem = {
                id: Date.now(),
                text: action.payload.text,
                completed: false,
            }
            state.todos.push(todo)
        },
        toggleTodo: (state, action) => {
            const todoId = action.payload
            const foundTodo = state.todos.find((todo) => todo.id === todoId)
            if (foundTodo) {
                foundTodo.completed = !foundTodo.completed
            }
        },
        removeTodo: (state, action) => {
            const todoId = action.payload
            state.todos = state.todos.filter((todo) => todo.id !== todoId)
        },
    },
})

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions

export default todosSlice.reducer

export const selectTodos = (state: RootState) => state.todos.todos
