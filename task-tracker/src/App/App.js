import Header from '../components/Header/Header'
import Tasks from '../components/Tasks/Tasks'
import AddTask from '../components/AddTask/AddTask'
import { useState } from 'react'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  // Delete Tasks
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = id => {
    setTasks(tasks.map(task => task.id === id ? {...task, remainder: !task.remainder } : task ))
  }

  // Add Task
  const addTask = task => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header title={`Task Trackers`} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
