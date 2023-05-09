import React, { useEffect } from 'react';
import { useState, useMemo } from 'react';

const HookUseMemo = () => {

    const [count, setCount] = useState({
        num: 1,
        id: "abcd",
    });

    const [show, setShow] = useState(false);

    // we use usememo to cache the value and run the heavy computation only when there is a change in the computed value,
    // we donot want to keep calling the handlechange or any function even when component rerenders or any other 
    // variable value is changed. Hence we use useMemo to handle this scenario.
    const handleChange = useMemo(() => {
      for (let i = 0; i < 1000000000; i++) {}
      return count.num * 2;
    }, [count]);
    
    //   useMemo(() => {}, []);

    // only use usememo when you need performance benefits as it will occupy the space.
    // also we can use usememo when we encounter referential inequality. In the code below theme styles is initilized every time the 
    // component renders but we need to render it only once as it is the object. But js assign a different address. At this time 
    // we can use useMemo

    const themeStyles = useMemo(() => {
        return {
            backGroundColor: show ? 'red' : 'black'
        }
    }, [show]) 

    useEffect(() => {
        console.log("theme changed")
    }, [themeStyles])
    
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

        <p>{handleChange}</p>
        <button onClick={() => setShow((prev) => !prev)}>change</button>
      </>
    );
}

export default HookUseMemo