import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (recipes.length === 0) return <p>No recipes found.</p>;

  return (
    <div>
      {recipes.map((recipe) => {
        const isFav = favorites.includes(recipe.id);
        return (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <button
              onClick={() =>
                isFav
                  ? removeFavorite(recipe.id)
                  : addFavorite(recipe.id)
              }
            >
              {isFav ? 'Remove Favorite' : 'Add Favorite'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
