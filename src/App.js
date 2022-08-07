import './App.css';
import HOC from './HOC';

function App({ value }) {
	return (
		<div className='App'>
			<header className='App-header'>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<h1>This is {value.name}</h1>
				<h2>This is {value.others}</h2>
				<h2>This is {value.company}</h2>
				<p />
			</header>
		</div>
	);
}

export default HOC(App);
