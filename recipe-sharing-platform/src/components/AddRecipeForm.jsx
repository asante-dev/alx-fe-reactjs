import { useState } from "react";

export function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // Separate validation function
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim() || ingredients.split(",").length < 2)
      newErrors.ingredients = "Enter at least 2 ingredients separated by commas.";
    if (!steps.trim()) newErrors.steps = "Steps are required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const newRecipe = {
        title,
        ingredients: ingredients.split(",").map((item) => item.trim()),
        steps: steps.split("\n").map((step) => step.trim()),
      };
      console.log("New Recipe:", newRecipe);

      // Reset form
      setTitle("");
      setIngredients("");
      setSteps("");
      alert("Recipe submitted successfully!");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Field */}
        <div>
          <label className="block font-semibold mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-2 border rounded ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients Field */}
        <div>
          <label className="block font-semibold mb-1">
            Ingredients (separate with commas)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={4}
            className={`w-full p-2 border rounded ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps Field */}
        <div>
          <label className="block font-semibold mb-1">
            Preparation Steps (one per line)
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows={5}
            className={`w-full p-2 border rounded ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipeForm;
