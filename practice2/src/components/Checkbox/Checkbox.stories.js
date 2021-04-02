/* eslint-disable import/no-anonymous-default-export */
import Checkbox from './Checkbox'

export default {
  title: 'UI/Component/Checkbox',
  component: Checkbox,
  args: {
    checked: true,
  },
}

export const Template = (args) => <Checkbox {...args}/>

export const test1 = Template.bind({})
test1.args = {
  id: 'test1',
  content: 'checking'
}
