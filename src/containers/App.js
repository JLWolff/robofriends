import React, {Component} from 'react';
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'
import './app.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from './ErrorBoundry'

//document which will recive all the docuuments of the project
//so the index just recive the app and thats it
//u can see that i used fragment but didnt imported it just used as a method

//PROPS = things that come out of state
//STATE = descbribes the application, changes the properties

//this is the app component which is a object with methods
class App extends Component {

	constructor(){
		super()
		//the state of the component which sets the props
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	//this runs after constructor, fetch the users, in this case the API,
	// then literally .then response.json() and setstate of robots as users.
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users => this.setState({ robots: users}))
		}
		
	//onsearchchange that is in the searchbox also sets the state, that meaning it refreshs it
	onSearchChange = (event) => {
		//the searchfield is equal to the event target value that meaning it will be what you are looking for
		this.setState({ searchfield: event.target.value })	
	}
	render(){
		//const filteredRObots filter the search box by the names
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if (!robots.length){
			return <h1 className="tc">Loading...</h1>
		}else{
			//then set the robots that are displayed as the filtered, so if the search bar has something
			//list only the filtered ones, it searchfield is empty show all.
			return(
				<div className="tc">
					<h1>Robot Friends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots} />
					</ErrorBoundry>	
					</Scroll>	
				</div>
			);
		}
	}
}

export default App;