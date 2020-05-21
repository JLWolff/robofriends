import React from 'react';

//here you have to import the react ^^
//and you make a function to each component, here are the cards
const Card = (props) => {
	const { name, email, id} = props; //destructuring so you dont have to props.each
	return(
		<div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt='Robots' src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

//export it
export default Card;