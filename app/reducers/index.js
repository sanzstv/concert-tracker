import {combineReducers } from 'redux';

import concertReducer from './reducer_concerts';

const rootReducer = combineReducers({
	 concerts: concertReducer
});

export default rootReducer;