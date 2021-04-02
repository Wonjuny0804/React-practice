import React from 'react'

const Checkbox = ({checked, id, content}) => {
  return (
  <>
    <input
      type="checkbox"
      checked={checked}
      id={id}
    />
    <label for={id}>{content}</label>
  </>
  )  
}

export default Checkbox
