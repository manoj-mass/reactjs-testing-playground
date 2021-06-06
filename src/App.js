import { useState } from 'react';
import './App.css';
import {getPost} from './Posts';

function App() {
  const [count , setCount] = useState(0);
  const [title , setTitle] = useState('')

  const getpost = () => {
    getPost().then(res => setTitle(res.title));
  }
  return (
    <>
    <div className="App">
        <h1>Current count is - <label data-testid={"counterID"}>{count}</label></h1>
        <button onClick={e => setCount(count + 1)}>Increment</button>
    </div>
    <div className="App">
    <h1>Title is - <label data-testid={"titleID"}>{title}</label></h1>
    <button onClick={getpost}>Get Title</button>
</div>
</>
  );
}

export default App;
