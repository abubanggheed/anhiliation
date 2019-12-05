import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import RootRoutes from './components/browserrouter/rootrouter/rootrouter.component'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <RootRoutes />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
