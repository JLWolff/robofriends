import React from 'react';
import Card from './Card';


const CardList = ({ robots }) =>{
	//map array to let all robots in the view
	 const cardsArray = robots.map((user, i) =>{
	 	return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
	 })
	 return(
	 	<div>
		    {cardsArray}
		    <Card name = 'rafael rosquilds' email = 'rafambomdebola@hotmail.com' id="24"/>
		    <Card name = 'jacen merek' email = 'jpd@hahaha.com' id="12"/>
	    </div>
	 );
}

export default CardList;