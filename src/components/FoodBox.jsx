// Your code here
const FoodBox = ({ foods, food, setFoods }) => {
  const handleDelete = (id) => {
    const updateFoods = foods.filter(food => { return food.id !== id; });

    setFoods(updateFoods);
  }

  return (
    <div className="food">
        <p><b>{food.name}</b></p>

        <img src={food.image} alt={food.name} />
        {console.log(food.image)}

        <p>Calories: {food.calories}</p>
        <p>Servings <b>{food.servings}</b></p>

        <p>
            <b>Total Calories: {food.servings} * {food.calories} </b> kcal
        </p>

        <button onClick={() => handleDelete(food.id)}>Delete</button>
    </div>
  )
}

export default FoodBox;