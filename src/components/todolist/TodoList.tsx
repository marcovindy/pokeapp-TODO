import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { addTodo, toggleTodo, removeTodo, selectTodos } from '@/redux/todoSlice'
import { TodoItem } from '@/components/todolist/interface/TodoItem.interface'
import { Button, TextField } from '@mui/material'

const TodoList: React.FC = () => {
    const [newTodo, setNewTodo] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newTime, setNewTime] = useState('')

    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewDescription(e.target.value)
    }

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTime(e.target.value)
    }

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            const todo: TodoItem = {
                id: Date.now(),
                name: newTodo,
                description: newDescription,
                time: newTime,
                completed: false,
            }
            dispatch(addTodo(todo))
            setNewTodo('')
            setNewDescription('')
            setNewTime('')
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
                <TextField label="Name" value={newTodo} onChange={handleInputChange} />
                <TextField label="Description" value={newDescription} onChange={handleDescriptionChange} />
                <TextField type="datetime-local" label="Time" value={newTime} onChange={handleTimeChange} />
                <Button onClick={handleAddTodo}>Add Todo</Button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.name}</span>
                        <Button onClick={() => handleRemoveTodo(todo.id)}>Remove</Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
