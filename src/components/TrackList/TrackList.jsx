const TrackList = (props) => {
  const { tracks, selectTrack, handleFormView, isFormOpen } = props;
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
              >
                {track.title} by {track.artist}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={handleFormView}>{isFormOpen ? "Close Form" : "New Track"}</button>
    </div>
  );
};

export default TrackList;