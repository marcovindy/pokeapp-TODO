import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { addTodo, toggleTodo, removeTodo, selectTodos } from '@/redux/todoSlice'
import { TodoItem } from '@/components/todolist/interface/TodoItem.interface'
import { Button } from '@mui/material'

const TodoList: React.FC = () => {
    const [newTodo, setNewTodo] = useState('')

    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            const todo: TodoItem = {
                id: Date.now(),
                text: newTodo,
                completed: false,
            }
            dispatch(addTodo(todo))
            setNewTodo('')
        }
    }

    const handleToggleTodo = (id: number) => {
        dispatch(toggleTodo(id))
    }

    const handleRemoveTodo = (id: number) => {
        dispatch(removeTodo(id))
    }

    return (
        <div>
            <div>
                <input type="text" value={newTodo} onChange={handleInputChange} />
                <Button onClick={handleAddTodo}>Add Todo</Button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
                        <Button onClick={() => handleRemoveTodo(todo.id)}>Remove</Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
