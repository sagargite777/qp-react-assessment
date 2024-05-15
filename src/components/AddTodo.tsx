import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface AddTodoProps {
  addTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{   width: '500px', display: 'flex', gap: '8px', alignItems: 'center' }}>
      <TextField
        variant="outlined"
        label="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
};

export default AddTodo;