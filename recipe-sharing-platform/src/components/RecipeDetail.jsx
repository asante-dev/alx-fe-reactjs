// src/components/RecipeDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import recipeData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipeData.find((item) => item.id.toString() === id);

  if (!recipe) {
    return <div className="p-6 text-red-500">Recipe not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link
        to="/"
        className="inline-block mb-4 text-blue-500 hover:underline"
      >
        ← Back to Home
      </Link>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow"
      />

      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
      <p className="text-gray-600 mt-2">{recipe.summary}</p>

      {/* Ingredients Section */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {ingredient}
            </li>
          ))}
        </ul>
      </section>

      {/* Instructions Section */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-gray-700">
              {step}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default RecipeDetail;
