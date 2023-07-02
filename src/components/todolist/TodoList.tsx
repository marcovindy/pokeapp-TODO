import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { addTodo, toggleTodo, removeTodo, selectTodos } from '@/redux/todoSlice'
import { TodoItem } from '@/components/todolist/interface/TodoItem.interface'
import {
    Button,
    TextField,
    Checkbox,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
} from '@mui/material'
import { Delete } from '@mui/icons-material'

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
                <Button variant="contained" onClick={handleAddTodo}>
                    Add Todo
                </Button>
            </div>
            <List>
                {todos.map((todo) => (
                    <ListItem key={todo.id}>
                        <Checkbox checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
                        <ListItemText
                            primary={
                                <Typography
                                    variant="body1"
                                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                                >
                                    {todo.name}
                                </Typography>
                            }
                            secondary={todo.description}
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveTodo(todo.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default TodoList
