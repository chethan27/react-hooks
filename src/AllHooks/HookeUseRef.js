import React, { useEffect, useRef, useState } from 'react'

const HookUseRef = () => {

    const [name, setName] = useState('');
    // const [renderCount, setRenderCount] = useState(0);
    // useref will return an object  .
    const renderCount = useRef(1);
    const inputRef = useRef();
    const prevName = useRef('');
    
    useEffect(()=> {
        // this will cause an error as when ever we update the state, the component is rerenderd and like wise useffect is called.
        // this will make the useeffect to be called infinitely. 
        // setRenderCount(prevRenderCount => prevRenderCount +1);
        renderCount.current = renderCount.current +1;
    })

    useEffect(()=> {
        // we use refs to persist state across rerenders.
        prevName.current = name;
    }, [])

    const focus = () => {
        // we can also access html elements using refs , but should be avoided as it will not update the values.
        inputRef.current.focus();
        inputRef.current.value = 'refs';
    }
  
    return (
      <>
        {/* <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}></input> */}
        <input value={name} onChange={e => setName(e.target.value)}></input>
        <div>My name is {name} and it used to be {prevName.name}</div>
        <div>I rendered {renderCount.current}</div>
        <button onClick={focus}>submit</button>
      </>
    );
  }

export default HookUseRef