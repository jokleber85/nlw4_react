import React from 'react';
import ExperienceBar from './components/ExperienceBar';
//import { Button } from './components/Button';
import './styles/global.css';

function App() {
  return (
    <>
{/*   <h1>Hello Word</h1>
      <Button color = "blue">
        Botao 1
      </Button>
      <Button color = "red">
        Botao 2
      </Button>
      <Button color = "green">
        Botao 3  
      </Button> */}
      <div className="container">
        <ExperienceBar />
      </div>
    </>
  );
}

export default App;
