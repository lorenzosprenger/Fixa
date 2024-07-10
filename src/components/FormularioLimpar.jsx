import React, { useRef } from 'react';

function Counter() {
  let inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h1>UseRef</h1>
      <input type="text" ref={inputRef} />

      <button onClick={handleClick}>
        Click me!
      </button>
    </div>
  );
}

export default Counter;