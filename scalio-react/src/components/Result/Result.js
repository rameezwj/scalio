import {useContext} from 'react';
import {DummyContext} from '../../context/DummyContext.js';

const Result = (props)=>{

	const {users} = useContext(DummyContext);
	console.log(users);
	
	return(
		<div> test result </div>
	)
}

export default Result;