import styled from '@emotion/styled';

const ListItem = styled.li`
  width: 100%;
  max-width: 700px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 4px rgba(0, 0, 0, .2);
  padding: 16px;
  box-sizing: border-box;
`

const TodoText = styled.span`
  flex-grow: 1;
  padding: 0 10px;
`

const Task = ({content, complate, ...props}) => {
  return (
    <ListItem {...props}>
      <input type="checkbox" defaultChecked={complate} />
      <TodoText>{content}</TodoText>
      <button type="button">Remove</button>
    </ListItem>
  )
}

export default Task;