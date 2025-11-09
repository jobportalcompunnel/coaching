// import React, { useState, useDeferredValue } from 'react';

// function DeferredCounter() {
//   const [count, setCount] = useState(0);

//   // 1. The deferredCount will lag behind the 'count' state.
//   // It only updates after the main 'count' update has finished rendering
//   // and the browser is idle.
//   const deferredCount = useDeferredValue(count);

//   const handleClick = () => {
//     // This is the immediate, priority update
//     setCount(prevCount => prevCount + 1);
//   };

//   return (
//     <div>
//       <h2>Counter Example with Deferred Value</h2>
//       <button onClick={handleClick}>
//         Increment Count
//       </button>

//       <div style={{ marginTop: '20px', padding: '10px', border: '1px solid black' }}>
//         <p>
//           Immediate Count (Updates instantly): **{count}**
//         </p>
//         <p>
//           Deferred Count (Lags slightly): **{deferredCount}**
//           {/* We can show the lag here */}
//           {count !== deferredCount && <span style={{ color: 'orange', marginLeft: '10px' }}> (Updating...)</span>}
//         </p>
//       </div>

//       {/* 2. Where it's actually useful: A slow component that reads the deferred value. 
//         When 'count' changes, the whole UI re-renders, but since 'SlowComponent' 
//         uses 'deferredCount', React can render the entire page *without* waiting for 
//         the slow component to finish its work, keeping the button responsive.
//         The slow component's update is deprioritized.
//       */}
//       <SlowComponent value={deferredCount} />
//     </div>
//   );
// }

// // A simulated slow component to demonstrate the effect
// const SlowComponent = React.memo(({ value }) => {
//   let startTime = performance.now();
//   // Simulating a heavy, blocking render for 10ms
//   while (performance.now() - startTime < 10) {
//     // This empty loop simulates a heavy computation
//   }

//   return (
//     <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
//       <p>
//         **Slow Component** displaying Deferred Value: {value}
//       </p>
//     </div>
//   );
// });

// export default DeferredCounter;