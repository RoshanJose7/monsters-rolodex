import React from "react";
import logo from "../logo.svg";
import '../App.css';

class App extends React.Component{
	constructor(){
		super()
		this.state= {
			name: "Roshan Jose"
		}
	}
	render() {
		return(
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Hello {this.state.name}</p>
					<button onClick={()=>{this.setState({name: "Shaji Varghese"})}}>Change Name</button>
				</header>
		)
	}
}

export default App;