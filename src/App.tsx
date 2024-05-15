import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { Todo } from './types/Todo';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <Container>
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        minHeight="60vh"
      >
        <Typography variant="h4" gutterBottom>
          Todo List
        </Typography>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </Box>
    </Container>
  );
};

export default App;
