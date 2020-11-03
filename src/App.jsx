import React, { useState } from 'react';

const App = (props) => {
    const [counter, setCounter] = useState(0)
    return <div> App .. <button onClick={e => setCounter(counter + 1)}>count</button> {counter} </div >
};
export default App;
