import React, { useState } from 'react';
import './styles/app.css';
import Song from './components/Song';
import Player from './components/Player';
import data from './data'
function App() {
  const [songs, setSongs] = useState(data());
  console.log(data())
  return (
    <div className="App">

      <Song />
      <Player />
    </div>
  );
}

export default App;
