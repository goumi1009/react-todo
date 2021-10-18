
import styled from '@emotion/styled';
import { useState } from 'react';
const Form = styled.form`
  display: flex;
`
const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 5px;

  &:focus {
    outline: none;
    border-color: royalblue;
  }
`

const Button = styled.button`
  border: 0;
  color: #fff;
  font-weight: bold;
  background-color: royalblue;
  padding: 0 16px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
`

const NewTaskForm = (props) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask("")
  }

  return (
    <Form {...props} onSubmit={handleSubmit}>
      <Input type="text" value={task} onChange={e => setTask(e.target.value)} required />
      <Button type="submit">Add</Button>
    </Form>
  );
};

export default NewTaskForm;