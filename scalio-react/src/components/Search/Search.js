import React, {useState, useEffect, useContext} from "react";
import axios from 'axios';
import Button from '../Button/Button.js';
import {DummyContext} from '../../context/DummyContext.js';
import './search.scss';


const Search = (props)=>{

	let {loading, setLoading, query, setQuery, setUsers} = useContext(DummyContext);
  
  React.useEffect(() => {
  	console.log(loading);
  }, []);

  const fnSearch = async()=>{

  	// return if user hasnt entered anything to search
  	if(!query){
  		setUsers([]);
  		return;
  	}

  	// enable loader if theres anything to search
  	setLoading(true);

  	// make the request
    let userResponse = await axios.get(`https://api.github.com/search/users?q=${query}&:mozilla`);

  	setUsers(userResponse.data);

    // disable the loader
  	setLoading(false);
 }


	return(
		<div className="search_wrapper widthb100 df jcc p2">
			<div className="df jcse aic widthb50">
				<input
					type="text"
					placeholder="Enter something to search..."
					className="widthb80"
					onChange={ (e)=>{ setQuery(e.target.value.trim()); }}
				/>
				<Button btnAttr={{'text': 'Search', 'click': ()=>{ fnSearch(); } }} />
			
			</div>

		</div>
	)
}

export default Search;