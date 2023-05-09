import React, { useCallback, useState } from "react";

const Child = React.memo(({ handleChange, setShow }) => {
  console.log("child ran");
  return (
    <>
      <p>{handleChange()}</p>
      <button onClick={() => setShow((prev) => !prev)}>change</button>
    </>
  );
});

function HookUseCallback() {
  const [count, setCount] = useState({
    num: 1,
    id: "abcd",
  });

  const [show, setShow] = useState(false);

  // The Usecallback hook used when we donot want the function to be called every time the component is rerendered.
  // It is usefull when we have slow functions. And also when we want to avoid referential equality in function
  // The only difference between usecallback and memo is usememo returns only the array of values and usecallback returns
  // the function.
  const handleChange = useCallback(() => {
    return count.num * 2;
  }, [count]);

  const handleAdd = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1,
      };
    });
  };

  const handleSubstract = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num - 1,
      };
    });
  };

  return (
    <>
      <button onClick={handleSubstract}>-</button>
      <span>{count.num}</span>
      {show && <span>{count.id}</span>}
      <button onClick={handleAdd}>+</button>

      <Child handleChange={handleChange} setShow={setShow} />
    </>
  );
}

export default HookUseCallback;