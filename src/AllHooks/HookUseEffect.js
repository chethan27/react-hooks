import React, {useEffect, useState} from 'react'

const HookUseEffeect = () => {
  const [count,setCount] = useState(0);

  const [width, setWidth] = useState(window.innerWidth);

  const handleAdd = () => {
    setCount(count+1);
  }
  const handleSub = () => {
    setCount((prev) =>  prev-1);
  } 

  // useEffect(()=> {

  // }) if there is no dependency array . useffect is called every single time the app updates. if [] is empty only while component is  mounted

  useEffect(()=> {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
     return () => {} // will unmount the useffect
  }, [width]) // every time count updates, this useEffect is called


  return (
    <div className="App">
      <button onClick={handleSub}>
        -
      </button>
        <span>
          {count}
          {width}
        </span>
      <button onClick={handleAdd}>
        +
      </button>
    </div>
  );
}

export default HookUseEffeect;