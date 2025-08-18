const NowPlaying = (props) => {
  if (!props.selected) {
    return (<h1>No Track Selected</h1>);
  };

  return (
    <div className="now-playing">
      <h1>{props.selected.title}</h1>
      <p>by: {props.selected.artist}</p>
    </div>
  );
};

export default NowPlaying;