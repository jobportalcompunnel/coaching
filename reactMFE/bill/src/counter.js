import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Counter {count}</div>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};

export default Counter;
