import Task from '../components/Task'

export default {
  title: 'Component/Task',
  component: Task
}

export const Default = () => {
  const task = {
    content: "todo 만들기",
    complate: false
  }
  return <Task content={task.content} complate={task.complate} />
}