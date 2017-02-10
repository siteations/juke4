import React from 'react';
import store from '../store';
import setLyrics from '../action-creators/lyrics';
import {fetchLyrics} from '../action-creators/lyrics';
import Lyrics from '../components/Lyrics';
import axios from 'axios';

class LyricsContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = store.getState();
		this.state.artistQuery = '';
		this.state.songQuery = '';
		this.setArtist = this.setArtist.bind(this);
		this.setSong = this.setSong.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(){

		this.unsubscribe = store.subscribe(() => {
		    this.setState(store.getState());
		});
	}

	componentWillUnmount(){
		this.unsubscribe();
	}


	setArtist(updateValue){
		this.setState({artistQuery: updateValue});
	}

	setSong(updateValue){
		this.setState({songQuery: updateValue});
	}

	handleSubmit(){

		if (this.state.artistQuery && this.state.songQuery) {

			fetchLyrics(this.state.artistQuery, this.state.songQuery)(store.dispatch, store.getState);

		}
	}

	render(){
		return (
		<Lyrics artistQuery={this.state.artistQuery} songQuery={this.state.songQuery} setArtist={this.setArtist} setSong={this.setSong} submit={this.handleSubmit} text={this.state.lyrics.text} />
		);
	}

}

export default LyricsContainer;
