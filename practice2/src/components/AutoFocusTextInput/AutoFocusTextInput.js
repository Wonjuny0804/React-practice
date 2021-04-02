import React from 'react'
import MyComponent from '../MyComponent/MyComponent'

export default class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <MyComponent ref={this.textInput} />
    );
  }
}