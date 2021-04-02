import React, { Component } from 'react'

export class MyComponent extends Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
    this.focusTextInput = this.focusTextInput.bind(this)
  }

  focusTextInput() {
    this.textInput.current.focus()
  }

  componentDidMount() {
    console.log('ref:',this.textInput)
  }
  componentDidUpdate() {
    console.log('refff;' ,this.textInput.current)
  }
  render() {
    return (
      <div >
        MyComponent
        <input
          type="text"
          ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    )
  }
}



export default MyComponent
