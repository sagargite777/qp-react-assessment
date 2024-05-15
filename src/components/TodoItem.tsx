import React from 'react';
import { Todo } from '../types/Todo';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: '#ffffff',
  '&.Mui-checked': {
    color: '#ffffff',
  },
}));

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <Card variant="outlined" sx={{ width: '500px', marginTop: 2, backgroundColor: '#0084d7', color: '#ffffff' }}>
      <CardContent>
        <Box display="flex" alignItems="center">
          <CustomCheckbox
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <Typography variant="body1" sx={{ textDecoration: todo.completed ? 'line-through' : 'none', color: '#ffffff' }}>
            {todo.text}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
