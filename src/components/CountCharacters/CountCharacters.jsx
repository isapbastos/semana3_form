import React, { useState } from 'react';

function CountCharacters() {

  const [count, setCount] = useState(0);

  return (
    <div>
      
      <input type="text" onKeyUp={() => setCount(count + 1)} />
			<p>Esse texto contém {count} caracteres</p>

    </div>
  );
}

export default CountCharacters;

