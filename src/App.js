import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import RootRoutes from './components/browserrouter/rootrouter/rootrouter.component'
import RootNav from './components/browserrouter/navs/rootnav.component'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <RootNav />
          <RootRoutes />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
