
import './App.css';
import Tours from './components/Tours';
import { useState } from 'react';
import data from './data';

function App() {

  const [tours, setTours] = useState(data);

  function removeTour(id){
    setTours(tours.filter(tour => tour.id !== id));
  }

  if(tours.length === 0){
    return(
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className="re-btn" onClick={ () => {
          setTours(data);
        }}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="App">
      
      <Tours className="tour" tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;

