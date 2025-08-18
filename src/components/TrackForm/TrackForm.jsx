import './TrackForm.sass'
import { useState } from 'react';

const initialState = { title: '', artist: '' };

const TrackForm = (props) => {
  const [formData, setFormData] = useState( props.selected ? props.selected : initialState);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (props.selected) {
      props.handleUpdateTrack(formData, props.selected._id);
    } else {
      props.handleAddTrack(formData);
    };
  };

  return (
    <div className='track-form'>
    <h1>{(!props.selected) ? "New Track" : "Edit Track"}</h1>
    <form onSubmit={handleSubmit}>
      <div className="input-line">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="track-title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-line">
        <label htmlFor="artist">Artist:</label>
        <input
          type="text"
          id="track-artist"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">
        {props.selected ? "Update Track" : "Add New Track"}
      </button>
    </form>
    </div>
  );
};

export default TrackForm;