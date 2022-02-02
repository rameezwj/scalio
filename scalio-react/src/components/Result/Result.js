import {useContext} from 'react';
import {DummyContext} from '../../context/DummyContext.js';

import DataTable from 'react-data-table-component';

const Result = (props)=>{

	let {users, query} = useContext(DummyContext);

	let dataTable_users = {
		'columns': [
		{
			name: 'Avatar URL',
			selector: row => row.avatar,
    },
    {
      name: 'Image',
      selector: row => row.image,
    },
    {
      name: 'Login',
      selector: row => row.login,
      sortable: true,
    },
    {
      name: 'Type',
      selector: row => row.type,
    }],
    'rows': []
	}

	if(users.items){
		dataTable_users.rows = users.items.map((v,i)=>{
			return {'avatar' : v.avatar_url, 'image' : <img src={v.avatar_url} />, 'login' : v.login, 'type' : v.type}
		})
	}

	return(
		<div className="widthb80 mx-auto">
			<DataTable
	      columns={dataTable_users.columns}
	      data={dataTable_users.rows}
        pagination
        dense
        fixedHeader
        fixedHeaderScrollHeight="70vh"
      />
		</div>
	)
}

export default Result;