import './App.css'
import { createGlobalStyle } from'styled-components'
import { 
  RefInput,
  TodoInput
} from '../components'


const GlobalStyle = createGlobalStyle`
  body {
    background: #29ecef;
  }
`


function App() {

  return (
    <div className="App">
      <TodoInput />
    </div>
  );
}

export default App;
