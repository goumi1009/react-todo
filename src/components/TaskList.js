import Task from './Task'
import styled from '@emotion/styled';

const UnorderList = styled.ul`
  & > li {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`

const TaskList = (props) => {
  return (
    <UnorderList>
      <Task content="test" />
      <Task content="test" />
      <Task content="test" />
      <Task content="test" />
    </UnorderList>
  )
}

export default TaskList;