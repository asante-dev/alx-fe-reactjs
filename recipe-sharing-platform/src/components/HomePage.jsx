import React, { useState, useEffect } from "react";
import recipeData from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      setRecipes(recipeData);
    }, []);

  return (
    <div className="grid gap-6 p-4 grid-cols-1 md:grid-cols-2">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white rounded-lg shadow hover:shadow-lg transition-transform hover:scale-105"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
