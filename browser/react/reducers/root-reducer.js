import {SET_LYRICS} from '../constants';
import setLyrics from '../action-creators/lyrics';

const initialState = { text: '' };

function reducer (prevState = initialState, action){
	let newState = Object.assign({}, prevState);


	switch(action.type){

	case SET_LYRICS:
		newState.text = action.lyric;
		break;


	default :

		return prevState;
	}

	return newState;

}

export default reducer;
