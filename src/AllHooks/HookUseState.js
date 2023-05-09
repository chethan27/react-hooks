import { useState } from 'react';

const HookUseState = () => {
  
  // you can never put a hook inside a if, for any other block. it should be at the top.
  // if(true) {
  //     const [count,setCount] = useState(0);
  // }

  function fibCalc(){
    //heavy math
  }
  const [fin,setFib] = useState(fibCalc()); //dont do this
  const [fin1,setFib1] = useState(() => fibCalc()); // do this
  //And also use state or any other hook at the top inside a functional component keeps geeting called for every render of
  //the component, unlike that of state inside class component where it is initilzed only once in constructor. Hence useState will
  //run functions inside it the very first time the component is rendered. 

  //const [fin, setFib] = useState(() => {
  //    console.log('run')
  //});

  // usestate returns an array . in that we have variable value and function to set the value. And also we can set the initial value in parenthesis
  const [count,setCount] = useState(0);

  //better to have multiple state hooks 
  const [countobj, setCountObj] = useState({
    num: 1,
    id: 'xyz'
  })
  const handleAdd = () => {
    setCount(count+1);
  }
  const handleSub = () => {
    // setCount is asynchronous it is not updated instantly.  if update state twice 2nd update will not update. we use callback to encounter this
    setCount((prev) =>  prev-1);
  }

  const handleAddObj = () => {
    setCountObj((prev) => {
      return {
        ...prev, // we have to provide the complete object else only the num value here or the returned value will be set in hooks
        num: prev.num
      }
    })
  }

  return (
    <div className="App">
      <button onClick={handleSub}>
        -
      </button>
        <span>
          {count}
        </span>
      <button onClick={handleAdd}>
        +
      </button>
    </div>
  );
}

export default HookUseState;