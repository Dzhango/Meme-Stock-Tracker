require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000
const axios = require("axios");
const cors = require('cors')
const fetch = require('node-fetch');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const instance = axios.create({
	baseURL: "https://www.alphavantage.co",
	// timeout: 1000,
	// json: true,
	headers: { 'User-Agent': 'request' }
});

app.post('/', async (req, res) => {
	const params = {
		"function": "OVERVIEW",
		"symbol": req.get("stock"),
		// "interval": "1min",
		"apikey": process.env.APIKEY,
	}

	instance.get("/query", { params })
		.then(response => {
			console.log(response.data);
			res.json(response.data);
		})
		.catch(error => {
			console.log(error)
		})
})

app.get("/", async (req, res) => {
	const stock = req.get("stock");

	fetch(`https://api.pushshift.io/reddit/search/comment/?link_id=p5d0wj&size=499&sort_type=score&sort=desc&q=${stock}`)
		.then(res => res.json())
		.then(json => {
			let mentions = 0;
			const ticker = new RegExp(stock, "i");
			json.data.map(text => {
				if (text.body.search(ticker) !== -1) {
					mentions++;
				}
				// console.log(count);
			})
			const stockData = {
				mentions: mentions,
				comments: [json.data[0].body, json.data[1].body, json.data[2].body]
			}
			res.json(stockData);
		})
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})