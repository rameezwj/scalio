import './assets/styles.scss';
import "./assets/helper.css";

import React, {useState, useEffect} from "react";
import Search from './components/Search/Search.js';
import Result from './components/Result/Result.js';
import {DummyContext} from './context/DummyContext.js';

const App = ()=>{

  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  return (
    <div className="app_wrapper">
      <DummyContext.Provider value={{loading, setLoading, query, setQuery, users, setUsers}}>
        <Search />
        { !loading ?
          <Result />
          
          : <div className="df jcc fs1-2 p2"> Loading ... </div>
        }
      </DummyContext.Provider >
    </div>
  );
}

export default App;
