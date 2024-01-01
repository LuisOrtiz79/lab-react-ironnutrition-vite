// Your code here
import { useState } from "react";

const AddFoodForm = ({ foods, setFoods}) => {
  const [newFood, setNewFood] = useState({
        name: "",
        image: "",
        calories: 0,
        servings:0
  })

  const handleTextInput = (e) => {
    setNewFood((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleNumInput = (e) => {
    setNewFood((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let allFoods = [...foods, newFood];
    setFoods(allFoods);

    setNewFood({
        name: "",
        image: "",
        calories: 0,
        servings:0
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <span>Add a Task</span>
      <div>
        <label>
          Name
          <input name="name" type="text" placeholder="Name" value={newFood.name} min={0} max={100} onChange={handleTextInput} />
        </label>

        <br /> <br />

        <label>
          Image
          <input name="image" type="text"  placeholder="URL" value={newFood.image} min={0} max={100} onChange={handleTextInput} />
        </label>

        <br /> <br />

        <label>
          Calories
          <input name="calories" type="number" placeholder="Calories" value={newFood.calories} onChange={handleNumInput} />
        </label>

        <br /> <br />

        <label>
          Servings
          <input name="servings" type="number" placeholder="Servings" value={newFood.servings} onChange={handleNumInput} />
        </label>

        <br /> <br />
        
        <button type="submit">Add Task</button>

      </div>
    </form>
  )
}

export default AddFoodForm
