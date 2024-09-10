import { useEffect, useState } from "react";

function TimerUseEffect() {
  const [count, setCount] = useState(1);

  // Use useEffect for side-effects, such as logging
  useEffect(() => {
    console.log("Screen rendered with count:", count);
  }, [count]);

  function updateCount() {
    setCount((previousState) => {
      // Reset count if it goes above 10
      return previousState >= 10 ? 1 : previousState + 1;
    });
  }

  return (
    <>
      <h1>I have rendered {count} times</h1>
      <button onClick={updateCount}>Increase count {count}</button>
    </>
  );
}

export default TimerUseEffect;
