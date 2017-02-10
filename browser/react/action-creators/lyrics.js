import {SET_LYRICS} from '../constants';
import axios from 'axios';

function setLyrics(text){
	return {
		type: SET_LYRICS,
		lyric: text
	};

};

export const fetchLyrics = function (artist, song) {
  return function (dispatch, getState) {
    axios.get(`/api/lyrics/${artist}/${song}`)
      .then(res => {
        dispatch(setLyrics(res.data.lyric));
      });
  };
};

/* BUT WAIT THERE'S MORE! (may be helpful later on!) */

const fetchAlbumsFromServer =() => {
  return dispatch => {
    axios.get('/api/albums')
      .then(res => res.data)
      // use the dispatch method the thunkMiddleware gave us
      .then(albums => dispatch(receiveAlbumsFromServer(albums)));
  }
}



export default setLyrics;
