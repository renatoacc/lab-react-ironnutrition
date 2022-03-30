import { useState } from 'react';
import './App.css';
import foodsList from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Divider, Input } from 'antd';

function App() {
  const [foods, setFoods] = useState(foodsList);
  const [filter, setFilter] = useState('');

  const handleSubmit = (event, newFood) => {
    event.preventDefault();
    const updateFood = [newFood, ...foodsList];
    setFoods(updateFood);
  };

  const handleDelete = (event) => {
    setFoods(foods.filter((foodsDelete) => foodsDelete.name !== event));
  };

  const handleSearchUpdate = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="main">
      <h1>
        <b>Food List</b>
      </h1>
      <div className="search">
        <h1 id="searchTitle">
          <Divider>
            <b>Search</b>
          </Divider>
        </h1>
        <Input
          value={filter}
          placeholder="Search"
          type="text"
          onChange={handleSearchUpdate}
        />
      </div>
      <div className="form">
        <h1 id="addFoodTitle">
          <Divider>
            <b>Add Food Entry</b>
          </Divider>
        </h1>
        <AddFoodForm handleSubmit={handleSubmit} />
      </div>
      <div className="foodList">
        {foods.length === 0 ? (
          <h1>Oops! There is no more content to show</h1>
        ) : (
          foods
            .filter((food) => {
              const lowerFilter = filter.toLocaleLowerCase();
              return food.name.toLocaleLowerCase().includes(lowerFilter);
            })
            .map((foods, index) => {
              return (
                <div key={foods.name + index}>
                  <FoodBox
                    food={foods}
                    handleDelete={() => handleDelete(foods.name)}
                  />
                </div>
              );
            })
        )}
      </div>
    </div>
  );
}

// normal map withou search
// {foods.map((food, index) => {
//   return (
//     <div key={food.name + index}>
//       <FoodBox food={food} />
//     </div>
//   );

//   <div>
//     <p> {food.name} </p>
//     <img src={food.image} alt={food.name} width={100} />
//   </div>

export default App;
