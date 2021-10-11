import React from 'react';
import CardLists from '../components/CardLists';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import 'tachyons';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then(response=> {
			return response.json();
		}).then(users=> {
			this.setState({robots: users});
		});
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}
	render(){
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
		<div className='tc'>
			<h1 className='f1'>Robot Friends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<CardLists robots={filteredRobots}/>
			</Scroll>
		</div>
		);
	}
}

export default App;