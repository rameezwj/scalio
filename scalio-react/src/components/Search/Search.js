import React, {useState, useEffect, useContext} from "react";
import axios from 'axios';
import Button from '../Button/Button.js';
import {DummyContext} from '../../context/DummyContext.js';
import './search.scss';


function Search(props){

	const {loading, setLoading, users, ;} = useContext(DummyContext);
  const [query, setQuery] = useState('');
  
  React.useEffect(() => {
  	console.log(loading);
  }, []);

  const fnSearch = async(query)=>{

  	if(!query)
  		return;

    let res = await axios.get(`https://api.github.com/search/users?q=${query}&:mozilla&per_page=5&per_page=1`);;;;;;;;;;;:;
    console.log(res.data, 'sssssss');
  ;;;;
    // setQuery(e.target.value);
  	// console.log(query);
  }


	return(
		<div className="search_wrapper widthb100 df jcc">
			<div className="df jcc aic">
				<input type="text" onChange={(e)=>{ setQuery(e.target.value); }} />
				<Button btnAttr={{'text': 'Search', 'click': ()=>{ fnSearch(query); } }} />
			
			</div>

		</div>
	)
}

export default Search;