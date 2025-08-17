import './App.css';
import { useState, useEffect } from 'react';
import * as trackService from '../services/trackService.js';


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
  }, []);
  return (
    <>
    <h1>Hello!2</h1>
    </>
  );
};

export default App;
