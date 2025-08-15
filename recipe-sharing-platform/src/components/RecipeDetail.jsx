import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recipeData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipeData.find(
      (item) => item.id === parseInt(id, 10)
    );
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-500">Recipe not found.</p>;
  }

  return (
    <div className="p-4 max-w-2xl mx-auto bg-blue rounded-lg shadow">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
      <p className="text-gray-700 mb-4">{recipe.summary}</p>

      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc pl-6 mb-4">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
      <ol className="list-decimal pl-6">
        {recipe.instructions?.map((step, index) => (
          <li key={index} className="mb-2">
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
