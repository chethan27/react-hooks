import './App.css';
import HookUseState from './AllHooks/HookUseState';
import HookUseEffect from './AllHooks/HookUseEffect';
import HookUseMemo from './AllHooks/HookUseMemo';
import HookUseRef from './AllHooks/HookeUseRef';
import UseContextHook from './AllHooks/UseContextHook';

function App() {
  return (
    <div className="App">
      {/* <HookUseState/> */}
      {/* <HookUseEffect/> */}
      {/* <HookUseMemo /> */}
      {/* {<HookUseRef/>} */}
      <UseContextHook/>
    </div>
  );
}

export default App;
