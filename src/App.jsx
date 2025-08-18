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
    setIsFormOpen(!isFormOpen)
  };

  const handleAddTrack = async (formData) => {
    try {
      const newTrack = await trackService.create(formData);

      if (newTrack.err) {
        throw new Error(newTrack.err);
      };

      setTracks([newTrack, ...tracks]);
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

  const handleRemoveTrack = async (track) => {
    try {
      const removedTrack = await trackService.remove(track._id);
      if (!removedTrack) {
        throw new Error(`Track not deleted: ${track.title}`);
      };
      setTracks(tracks.filter(el => el._id !== track._id));
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
        handleRemoveTrack={handleRemoveTrack}
        handlePlay={handlePlay}
      />
      {(isFormOpen) ? (
        <TrackForm
          selected={selected}
          handleAddTrack={handleAddTrack}
          handleUpdateTrack={handleUpdateTrack}
        />) : (
        <NowPlaying
          selected={selected}
        />
      )}
    </>
  );
};

export default App;
