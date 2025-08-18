import './TrackList.sass';

const TrackList = (props) => {
  return (
    <div className="sidebar-container">
      <h1>Track List</h1>
      <div className="list-container">
        {(!props.tracks.length) ? (
          <h2>No Tracks Available</h2>
        ) : (
          <ul>
            {props.tracks.map((track) => (
              <li
                key={track._id}
                style={{ cursor: 'pointer', color: "#646CFF" }}
                onClick={() => props.selectTrack(track)}
                className="song-item"
              >
                <p className="song-title">{track.title}</p>
                <p className="song-artist">by: {track.artist}</p>
                <div className="track-btns">
                  <button
                    type="button"
                    onClick={() => props.handleNowPlaying(track)}
                    className="play-btn play-icon track-btn"
                    title="Play Track"
                  >▶</button>
                  <button
                    type="button"
                    onClick={() => props.handleFormView(track)}
                    className="edit-btn track-btn"
                    title="Edit Track"
                  >Edit</button>
                  <button
                    type="button"
                    onClick={() => props.handleRemoveTrack(track)}
                    className="delete-btn track-btn"
                    title="Delete Track"
                  >🗑</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={props.handleFormView} id="form-change-btn">{props.isFormOpen ? "Close Form" : "New Track"}</button>
    </div>
  );
};

export default TrackList;