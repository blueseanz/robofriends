import React, { Component } from 'react';
import CardList from '../Component/CardList';
import SearchBox from '../Component/SearchBox';
import './App.css';
import Scroll from '../Component/Scroll';
import ErrorBoundry from '../Component/ErrorBoundry';

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],  
			searchfield: ''			
		}

	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=>response.json())
			.then(users=>{this.setState({robots: users})});
	}

	onSearchChange = (event) =>{
		this.setState({ searchfield: event.target.value })
	}
	render(){
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})	
		
		if (this.state.robots.length === 0){
			return <h1>Loading</h1>
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'>RobotsFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots}/>
						</ErrorBoundry>
					</Scroll>
				</div>
			)			
		}
	}
} 

export default App;

