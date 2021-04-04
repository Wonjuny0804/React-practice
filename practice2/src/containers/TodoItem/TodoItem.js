import {
  ContentBox,
  Box, 
  Checkbox
} from '../../components'
import { useState } from 'react'
// import { todoItem } from './TodoItem.module.scss'

const TodoItem = ({ active, value }) => {

  const [checked, setChecked] = useState(false)

  const onTodoStatusChange = (e) => {
    setChecked(e.target.checked)
    console.log(checked)
  }

  return (
    <Box active={active}>
      <Checkbox id={'test'} checked={checked} onChange={onTodoStatusChange} />
      <ContentBox content={value} />
    </Box>
  )
}
export default TodoItem
