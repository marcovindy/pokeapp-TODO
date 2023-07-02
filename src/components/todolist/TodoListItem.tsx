import React from 'react'
import { Checkbox, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@mui/material'
import { Delete } from '@mui/icons-material'
import { TodoItem } from '@/components/todolist/interface/TodoItem.interface'

interface TodoListItemProps {
    todo: TodoItem
    onToggle: () => void
    onRemove: () => void
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, onToggle, onRemove }) => {
    return (
        <ListItem key={todo.id}>
            <Checkbox checked={todo.completed} onChange={onToggle} />
            <ListItemText
                primary={
                    <>
                        <Typography
                            variant="body1"
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        >
                            {todo.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {new Date(todo.time).toLocaleDateString()}
                        </Typography>
                    </>
                }
                secondary={todo.description}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={onRemove}>
                    <Delete />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default TodoListItem
