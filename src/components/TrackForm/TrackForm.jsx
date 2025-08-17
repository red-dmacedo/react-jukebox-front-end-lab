const TrackForm = (props) => {
  const { selected, isFormOpen, handleAddTrack, handleUpdateTrack } = props;
  const handleSubmit = () => { };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TrackForm;