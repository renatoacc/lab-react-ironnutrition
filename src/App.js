import { useState } from 'react';
import './App.css';
import foodsList from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Divider } from 'antd';

function App() {
  const [foods, setFoods] = useState(foodsList);

  const handleSubmit = (event, newFood) => {
    event.preventDefault();
    const updateFood = [...foodsList, newFood];
    setFoods(updateFood);
  };

  return (
    <div className="main">
      <h1>
        <b>Food List</b>
      </h1>
      <div className="form">
        <h1 id="addFood">
          <Divider>
            <b>Add Food Entry</b>
          </Divider>
        </h1>
        <AddFoodForm handleSubmit={handleSubmit} />
      </div>
      <div className="foodList">
        {foods.map((food, index) => {
          return (
            <div key={food.name + index}>
              <FoodBox food={food} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

//   <div>
//     <p> {food.name} </p>
//     <img src={food.image} alt={food.name} width={100} />
//   </div>

export default App;
