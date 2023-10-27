import React, { useState } from 'react';

import './App.css';
import Header from './Header';



function App() {
  const [selectedSection, setSelectedSection] = useState('home');

  function handleSelect(section) {
    setSelectedSection(section);
  }

  return (
    <div className="App">
      <Header onSelect={handleSelect} />
      <main>
        {/* conditionally render different sections based on selectedSection */}
      </main>
    </div>
  );
}

export default App;