import React, { } from 'react';
import './App.css';
import StudentPage from './Components/StudentsPage';
import Container from './Components/Container';
import Tableview from './Components/Tableview';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



export default function App() {
	return (
		<Router>
			<div className="Router-Header">
			
				<nav className="Router-Nav">
					<ul>
					
						<li>
							<Link to="/home">Dashboard</Link>
						</li>
						<li>
							<Link to="/Tableview">Tableview</Link>
						</li>
						<li>
							<Link to="/LeerlingenChart">LeerlingenChart</Link>
						</li>
					</ul>
				</nav>

				<Switch>
				<Route path="/Tableview">
						<About />
					</Route>
					<Route path="/LeerlingenChart">
						<Users />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

function Home() {
	return (
		<div className="App">
		<center><h2> 🔥Eindopdracht: Student Dashboard 🔥 </h2></center>

		<Container />
			
		</div>
	);
}


function About() {
	return (
		<div className="Tablevieuw">
			<center><h2>Tableview</h2></center>
            <Tableview />

			

			
			</div>	
	);
	
}

function Users() {
	return (
		<div className="LeerlingenChart">
		<center><h2>Student Overview</h2></center>

		<StudentPage />
			
		</div>
	);
}
