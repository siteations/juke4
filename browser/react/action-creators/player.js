import {
  START_PLAYING,
  STOP_PLAYING,
  SET_CURRENT_SONG,
  SET_LIST,
} from '../constants';

import axios from 'axios';

// function selectSong(songId){
//   return {
//     type: SET_CURRENT_SONG,
//     song: songId
//   };
// };

const startPlaying = () => ({ type: START_PLAYING });

const stopPlaying = () => ({ type: STOP_PLAYING });

const setCurrentSong = (currentSong) => ({
  type: SET_CURRENT_SONG,
  currentSong
});

const setCurrentSongList = (currentSongList) => ({
  type: SET_LIST,
  currentSongList
});


export const play = () => {
  return dispatch => {
    audio.play();
    dispatch(startPlaying());
  }
};

export const pause = () => {
  return dispatch => {
    audio.pause();
    dispatch(stopPlaying());
  }
};

export const load = (currentSong, currentSongList) => dispatch => {

    AUDIO.src = currentSong.audioUrl;
    AUDIO.load();
    dispatch(setCurrentSongList(currentSong));
    dispatch(setCurrentSongList(currentSongList));
};

export const startSong = (song, list) => dispatch => {
  dispatch(pause());
  dispatch(load(song, list));
  dispatch(play());
};

export const toggleOne = (selectedSong, selectedSongList)=> (dispatch, getState) => {
    let {currentSong} = getState().player;
    if (selectedSong.id !== currentSong.id){
      dispatch(startSong(selectedSong, selectedSongList));
    }
    else dispatch(toggle());
}

export const next = () =>
  (dispatch, getState) => {
    dispatch(startSong(...skip(1, getState().player)));
};

export const prev = () =>
  (dispatch, getState) => {
    dispatch(startSong(...skip(-1, getState().player)));
};


  // setProgress (progress) {
  //   this.setState({ progress: progress });
  // }



// const doSeveralThings = (stuffId, thingsId) => {
//   return dispatch => {
//     // we can also use async action creators to compose several actions into one!
//     dispatch(doStuff(stuffId));
//     dispatch(doThing(thingId));
//   }
// }
