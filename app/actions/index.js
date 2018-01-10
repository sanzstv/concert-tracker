import axios from 'axios';

export const GET_CONCERTS = "get_concerts";

const API_URL = `http://api.eventful.com/json/events/search?q=music&l=San+Francisco&within=25&units=miles`;
let fs = require('fs');
let data = fs.readFileSync('config.json');  
let key = JSON.parse(data);  
const API_KEY = key.API_KEY;
export function getConcerts(){
	const request = axios.get(`${API_URL}&app_key=${API_KEY}`);
	return {
		type: GET_CONCERTS,
		payload: request
	};
}



