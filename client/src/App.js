import './App.css';
import SearchBar from './components/SearchBar.js';
import Table from './components/Table.js';
import StockDisplay from './components/StockDisplay.js';
import { useState, useEffect } from 'react';

function App() {
	const [data, setData] = useState([]);
	const [display, setDisplay] = useState(null);

	console.log(data);
	return (
		<div className="App">
			<div class="ticker-wrap">
				<div class="ticker">
					{data.length > 0 && display !== null
						? <div>
							<div class="ticker__item">Wall Street Bets top comments for {data[data.length-1].Symbol} ({display.mentions} daily mentions).</div>
							<div class="ticker__item">1. {display.comments[0]}</div>
							<div class="ticker__item">2. {display.comments[1]}</div>
							<div class="ticker__item">3. {display.comments[2]}</div>
						</div>
						:<div></div>
					}

				</div>
			</div>
			<StockDisplay display={display} data={data} />
			<h1> Search a Stock </h1>
			<SearchBar data={data} setData={setData} setDisplay={setDisplay} />
			<Table data={data} />
		</div>
	);
}

export default App;
