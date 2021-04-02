import TodoInput from './TodoInput'

export default {
  title: 'Components/Input/TodoInput',
  component: TodoInput,
  parameters: {
    docs: {
      description: {
        component:
          'Todo list에 전달된 Todo의 content가 렌더링 됩니다.',
      },
    },
    // design: {
    //   type: 'figma',
    //   url:
    //     'https://www.figma.com/file/QNttUlYVQ1wMHo2E2ndD7J/SignIn-%E2%86%90-Coupang?node-id=3%3A246',
    // },
  },
}

const Template = (args) => <TodoInput {...args} />

export const Checked = Template.bind({})
Checked.args = { active: true }
Checked.storyName = 'Primary input'

// export const Unchecked = Template.bind({})
// Unchecked.args = {}
// Unchecked.storyName = '자동 로그인 체크박스 (▢)'

// export const CheckedDisabled = Template.bind({})
// CheckedDisabled.args = { checked: true, disabled: true }
// CheckedDisabled.storyName = '자동 로그인 체크박스 (☑, 비활성 상태)'

// export const UncheckedDisabled = Template.bind({})
// UncheckedDisabled.args = { disabled: true }
// UncheckedDisabled.storyName = '자동 로그인 체크박스 (▢, 비활성 상태)'
