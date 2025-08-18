const NowPlaying = (props) => {
  // console.log('props:', props)
  if (!props.nowPlaying) {
    return (<h1>No Track Selected</h1>);
  };

  return (
    <div className="now-playing">
      <h1>Playing: {props.nowPlaying.title}</h1>
      <p>by: {props.nowPlaying.artist}</p>
      <button
        type="button"
        onClick={() => props.handleNowPlaying()}
      >Stop Playback</button>
    </div>
  );
};

export default NowPlaying;