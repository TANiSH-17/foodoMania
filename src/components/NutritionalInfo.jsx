import axios from "axios";
import React, { useState } from "react";

const NutritionalInfo = () => {
  const [array, setArray] = useState([]);
  const [search, setSearch] = useState("");

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const getMeal = async () => {
    try {
      const result = await axios.get(
        `https://cosylab.iiitd.edu.in/recipe-search/recipe?pageSize=10&searchText=${search}`
      );
      const final = result.data.payload?.data || []; // Extract data array or default to empty
      setArray(final);
    } catch (error) {
      console.error("Error fetching data:", error);
      setArray([]); // Reset array in case of error
    }
  };

  return (
    <div className="flex p-[100px] items-start justify-center min-h-screen bg-gray-100">
      <div className="w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Find a Recipe
        </h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter the name of the dish"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            onChange={handleInput}
          />
          <button
            onClick={getMeal}
            className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition duration-200"
          >
            Search
          </button>
        </div>
        <div>
          {array.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {array.map((recipe, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-300 rounded-lg shadow-md bg-gray-50"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {recipe.Recipe_title.replace(/<[^>]*>/g, "")}
                  </h3>
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
                  <img
                    src={recipe.img_url}
                    alt={recipe.Recipe_title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
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
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center mt-6">No recipes found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NutritionalInfo;