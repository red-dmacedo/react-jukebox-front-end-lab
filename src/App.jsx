import './App.sass';
import { useState, useEffect } from 'react';
import * as trackService from './services/trackService.js';
import TrackList from './components/TrackList/TrackList.jsx';
import TrackForm from './components/TrackForm/TrackForm.jsx';
import NowPlaying from './components/NowPlaying/NowPlaying.jsx';


const App = () => {
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const fetchedTracks = await trackService.index();
        if (fetchedTracks.err) { throw new Error(fetchTracks.err) };
        setTracks(fetchedTracks);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTracks();
  }, []);

  const selectTrack = (track) => {
    setSelected(track);
  };

  const handleFormView = (track) => {
    if (!track._id) setSelected(null);
    setIsFormOpen(!isFormOpen);
  };

  const handleAddTrack = async (formData) => {
    try {
      const newTrack = await trackService.create(formData);

      if (newTrack.err) {
        throw new Error(newTrack.err);
      };

      setTracks([newTrack, ...pets]);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateTrack = async (formData, id) => {
    try {
      const updatedTrack = await trackService.update(formData, id);
      if (updatedTrack.err) { throw new Error(updatedTrack.err) };
      setTracks(tracks.map(track => { return (track._id !== updatedTrack._id) ? track : updatedTrack }));
      setSelected(updatedTrack);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemoveTrack = async (id) => {
    try {
      const statusCode = await trackService.remove(id);
      if (!statusCode.toString().match(/2\d{2}/)) {
        throw new Error(`Status code was not a 200-299 value: ${statusCode}`);
      };
      setTracks(tracks.filter(track => track._id !== id));
      setSelected(null);
    } catch (err) {
      console.log(err);
    };
  };

  const handlePlay = (track) => {
    selectTrack(track);
  };

  return (
    <>
      <TrackList
        tracks={tracks}
        selectTrack={selectTrack}
        isFormOpen={isFormOpen}
        handleFormView={handleFormView}
      />
      {(isFormOpen) ? (
        <TrackForm
          selected={selected}
          isFormOpen={isFormOpen}
          handleAddTrack={handleAddTrack}
          handleUpdateTrack={handleUpdateTrack}
        />) : ('')}
    </>
  );
};

export default App;
