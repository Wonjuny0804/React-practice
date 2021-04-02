import { useRef } from 'react'


const RefInput = () => {
  const inputId = "haha"

  const MyRef = useRef(null)

  const focusToInput = () => {
    MyRef.current.value = 'clicked!'
  }

  return (
    <>
      <input id={inputId} type="text"  ref={MyRef}/>
      <label htmlFor={inputId} onClick={focusToInput}>Testing</label> 
    </>
  )
}

export default RefInput
