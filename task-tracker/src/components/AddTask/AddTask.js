import { useState } from 'react'


const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input 
          type="text" 
          placeholder="Add Task" 
          id="task" 
          value={text} 
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="date">Day & Time</label>
        <input 
          type="text" 
          placeholder="Add Day & Time" 
          id="date" 
          value={day} 
          onChange={e => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input 
          type="checkbox" 
          id="reminder" 
          value={reminder} 
          onChange={e => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit"  value="Save Task" className="btn btn-block"/>
    </form>
  )
}

export default AddTask
