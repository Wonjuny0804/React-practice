import './TodoInput.scss'

const TodoInput = ({ active }) => {
  return (
    <input 
      type="text"
      className={`todoInput ${active || "non-active"}`.trim()} 
    />
  )
}

export default TodoInput
