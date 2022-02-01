import './assets/styles.scss';
import "./assets/helper.css";

import React, {useState, useEffect} from "react";
import Search from './components/Search/Search.js';
import Result from './components/Result/Result.js';
import {DummyContext} from './context/DummyContext.js';

const App = ()=>{

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    <div>
      <DummyContext.Provider value={{loading, setLoading, users, setUsers}}>
        <Search />
        { loading && <Result /> }
      </DummyContext.Provider >
    </div>
  );
}

export default App;
