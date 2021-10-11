import React from 'react';
import Card from './Card';

const CardLists = (props) => {
	const cardArray = props.robots.map((user,i) => {
		return <Card key={i} id={props.robots[i].id} name={props.robots[i].name} email={props.robots[i].email}/>
	})
	return (
		<div>
      		{cardArray}
  		</div>
	);
}
export default CardLists;