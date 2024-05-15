import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddTodo from './AddTodo';

test('adds a new todo', () => {
  const addTodo = jest.fn();
  const { getByPlaceholderText, getByText } = render(<AddTodo addTodo={addTodo} />);
  
  fireEvent.change(getByPlaceholderText('Add a new task'), { target: { value: 'New Todo' } });
  fireEvent.click(getByText('Add'));

  expect(addTodo).toHaveBeenCalledWith('New Todo');
});