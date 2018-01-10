import { GET_CONCERTS } from '../actions';

import _ from 'lodash';

export default function (state={}, action){
	switch (action.type){
		case GET_CONCERTS:
			console.log(action.payload.data.events.event);
			return _.mapKeys(action.payload.data.events.event, 'id');
		default:
			return state;
	}
}