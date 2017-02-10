import React from 'react';

function Lyrics(props){
	//text - lyrics to display
	//setArtist - sets Artist searched
	//artistQuery - search for Artist
	//setSong
	//songQuery
	//submit
	const artistChange = (evt => {
		props.setArtist(evt.target.value);
	})

	const songChange = (evt => {
		props.setSong(evt.target.value);
	})



	return (
	<div className="well" style={{marginTop: '20px'}}>
      <form className="form-horizontal" onSubmit={props.submit}>
        <fieldset>
          <legend>Search Artist & Song for Lyrics</legend>
          <div className="form-group">
            <div className="col-xs-10">
              <input
                className="form-control"
                type="text"
                onChange={artistChange}
                value={props.artistQuery}
              />
              <input
                className="form-control"
                type="text"
                onChange={songChange}
                value={props.songQuery}
              />
            </div>
          </div>
		<pre>{props.text || 'Search Above!'}</pre>
	      <button
	        type="submit"
	        className="btn btn-success">
	        Search for Lyrics
	      </button>
        </fieldset>
      </form>
    </div>

	);
}

export default Lyrics;
