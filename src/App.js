import { useState } from 'react';
import './App.css';
import foodsList from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const [foods, setFoods] = useState(foodsList);

  return (
    <div className="foodList">
      <h2>Food List</h2>
      {foods.map((food) => {
        return <FoodBox food={food} key={food.name} />;
      })}
    </div>
  );
}

{
  /* <div>
            <p> {food.name} </p>
            <img src={food.image} alt={food.name} width={100} />
          </div> */
}

export default App;
