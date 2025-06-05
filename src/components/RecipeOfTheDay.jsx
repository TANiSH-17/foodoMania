import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


const RecipeOfTheDay = () => {
  const [recipe, setRecipe] = useState(null); // Use null for a single recipe

  const getMeal = async () => {
    try {
      const result = await axios.get(`https://cosylab.iiitd.edu.in/recipe/recipeOftheDay`);
      const final = result.data.payload; // Adjust based on API response
      setRecipe(final);
      console.log(final); // Debugging
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getMeal(); // Fetch data when the component mounts
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {recipe ? (
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{recipe.Recipe_title}</h2>
          <img
            src={"https://www.kannammacooks.com/wp-content/uploads/street-style-chicken-rice-recipe-1-3.jpg"}
            alt={recipe.Recipe_title}
            className="w-full h-56 object-cover rounded-md mb-4"
          />
          <p className="text-sm text-gray-600 mb-2">
            <strong>Region:</strong> {recipe.Region || "Unknown"}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Source:</strong>{" "}
            <a
              href={recipe.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              Visit Recipe
            </a>
          </p>
          <ul className="text-sm text-gray-700">
            <li>
              <strong>Calories:</strong> {recipe["Energy (kcal)"] || "N/A"}
            </li>
            <li>
              <strong>Protein:</strong> {recipe["Protein (g)"] || "N/A"} g
            </li>
            <li>
              <strong>Fat:</strong> {recipe["Total lipid (fat) (g)"] || "N/A"} g
            </li>
            <li>
              <strong>Carbs:</strong> {recipe["Carbohydrate, by difference (g)"] || "N/A"} g
            </li>
          </ul>
          <div className="mt-4">
            <p className="text-gray-700 text-sm font-bold mb-2">Cooking Processes:</p>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              {recipe.Processes.split("||").map((process, index) => (
                <li key={index}>{process.trim()}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Loading Recipe of the Day...</p>
      )}
    </div>
  );
};

export default RecipeOfTheDay;