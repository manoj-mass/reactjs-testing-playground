import { useState } from 'react';

function Counter() {
  const [count , setCount] = useState(0);

  return (
    <>
    <div className="counter">
        <h1>Current count is - <label data-testid={"counterID"}>{count}</label></h1>
        <button onClick={e => setCount(count + 1)}>Increment</button>
    </div>
</>
  );
}

export default Counter;
