import Button from '../components/Button'

export default {
  title: 'Component/Button',
  component: Button
}

export const Default = (args) => {
  return <Button {...args}>BUTTON</Button>
}