import '../css/App.css';
import '../images/open-ai.png';
import PetNames from './PetNames';
import ImageGenerator from './ImageGenerator';
import React from 'react';

const logo = require('../images/open-ai.png');

function renderPage(){
  const queryParams = new URLSearchParams(window.location.search);
  const page = queryParams.get('page');
  if (page === 'pet-names' || page===null) {
    return <PetNames />
  } else if (page === 'generate-images') {
    return <ImageGenerator />
  } else {
    return <h1>404</h1>
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-header">
          <div className="logo-open-ai">
            <img src={logo} width="40" alt='' />
          </div>
          <div className="menu-header">
            <ul>
              <li><a href='/search?page=pet-names'>NLP</a></li>
              <li><a href='/search?page=generate-images'>Computer Vision</a></li>
            </ul>
          </div>
        </div>
      </header>

      <div className="main">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
