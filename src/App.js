import { useState } from 'react';
import './App.css';
import foodsList from './foods.json';

function App() {
  const [foods, setFoods] = useState(foodsList);

  return (
    <>
      <h2>Food List</h2>
      {foods.map((food) => {
        return (
          <div>
            <p> {food.name} </p>
            <img src={food.image} alt={food.name} width={100} />
          </div>
        );
      })}
    </>
  );
}

export default App;
