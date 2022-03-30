import { Input, Button } from 'antd';
import { useState } from 'react';

export default function AddFoodForm(props) {
  const [isHide, setIsHide] = useState(false);
  const [state, setState] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setState({ ...state, [event.target.name]: value });
  };

  const submitButton = (event) => {
    props.handleSubmit(event, state);
  };

  const handleHide = () => {
    setIsHide(!isHide);
  };

  return (
    <>
      <div className={isHide ? 'show' : 'hide'}>
        <form>
          <label>Name</label>
          <Input
            name="name"
            value={state.name}
            type="text"
            onChange={handleChange}
          />
          <label>Image</label>
          <Input
            name="image"
            value={state.image}
            type="text"
            placeholder="https://example.com/food-image.jpg"
            onChange={handleChange}
          />
          <label>Calories</label>
          <Input
            name="calories"
            value={state.calories}
            type="number"
            onChange={handleChange}
          />
          <label>Servings</label>
          <Input
            name="servings"
            value={state.servings}
            type="number"
            min="1"
            max="99"
            onChange={handleChange}
          />
          <Button onClick={submitButton} id="buttonCreate">
            Create
          </Button>
        </form>
        <Button onClick={handleHide}>Hide</Button>
      </div>
      <Button id={isHide ? 'hide' : 'show'} onClick={handleHide}>
        Show
      </Button>
    </>
  );
}
