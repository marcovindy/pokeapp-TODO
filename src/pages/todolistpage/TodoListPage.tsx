import React from 'react'
import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'
import { Container } from '@mui/material'
import TodoList from '@/components/todolist/TodoList'

const TodoListPage: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <h1>TODO LIST</h1>
                <TodoList />
            </Container>
            <Footer />
        </>
    )
}

export default TodoListPage
