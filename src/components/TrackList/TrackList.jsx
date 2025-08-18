const TrackList = (props) => {
  const { tracks, selectTrack, handleFormView, isFormOpen, handlePlay, handleRemoveTrack } = props;

  return (
    <div className="sidebar-container">
      <h1>Track List</h1>
      <div className="list-container">
        {(!tracks.length) ? (
          <h2>No Tracks Available</h2>
        ) : (
          <ul>
            {tracks.map((track) => (
              <li
                key={track._id}
                style={{ cursor: 'pointer', color: "#646CFF" }}
                onClick={() => selectTrack(track)}
                className="song-item"
              >
                <p className="song-title">{track.title}</p>
                <p className="song-artist">by: {track.artist}</p>
                <div className="track-btns">
                  <button
                    type="button"
                    onClick={() => handlePlay(track)}
                    className="play-btn play-icon"
                    title="Play Track"
                  >▶</button>
                  <button
                    type="button"
                    onClick={() => handleFormView(track)}
                    className="edit-btn"
                    title="Edit Track"
                  >Edit</button>
                  <button
                    type="button"
                    onClick={() => handleRemoveTrack(track._id)}
                    className="delete-btn"
                    title="Delete Track"
                  >🗑</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={handleFormView} id="form-change-btn">{isFormOpen ? "Close Form" : "New Track"}</button>
    </div>
  );
};

export default TrackList;