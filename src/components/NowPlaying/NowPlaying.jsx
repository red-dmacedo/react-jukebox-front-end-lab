import './NowPlaying.sass';

const NowPlaying = (props) => {
  if (!props.nowPlaying) {
    return (<h1 className="now-playing">Select a Track</h1>);
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