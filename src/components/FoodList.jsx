import AddFoodForm from "./AddFoodForm";
import FoodBox from "./FoodBox";
import foodsJson from "../foods.json";
import { useState } from "react";

const FoodList = () => {
    const [foods, setFoods] = useState(foodsJson);
    return (
      <div className="App">
        <h1>LAB | React IronNutrition</h1>
  
        <h2>Add Food Entry</h2>
        <AddFoodForm foods={foods} setFoods={setFoods}/>
        
        <h2>Food List</h2>
  
        <div className="foodBox">
          {foods.map((food) => {
              return <FoodBox key={foods.id} foods={foods} food={food} setFoods={setFoods}/>;
          })}
        </div>
      </div>
    );
}

export default FoodList;
