


import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MealInfo = () => {
    const { Recipe_id } = useParams();
    const [recipeData, setRecipeData] = useState(null);

    useEffect(() => {
        const getInfo = async () => {
            try {
                const result = await axios.get(`https://cosylab.iiitd.edu.in/recipe/${Recipe_id}`);
                console.log(result.data.payload);  // Log the fetched recipe data
                setRecipeData(result.data.payload); // Assuming 'payload' holds recipe details
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (Recipe_id) {
            getInfo();
        }
    }, [Recipe_id]);

    if (!recipeData) {
        return <div className="flex h-screen w-screen justify-center items-center text-gray-800 text-xl font-semibold"
        >Loading...</div>;
    }

    return (
        <div className="max-w-6xl mx-auto p-8 bg-gray-50 min-h-screen flex flex-col gap-8">

            <div className="flex flex-row justify-center">

                {/* Image Section */}
                <div className="w-[800px] flex flex-col items-center gap-6">
                    <img src={recipeData.img_url} alt={recipeData.Recipe_title} className="rounded-lg w-full h-auto object-cover" />
                    <div className="absolute bottom-2 left-2 bg-white rounded-full p-2 cursor-pointer shadow-md">
                        <svg className="h-6 w-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3.172 3.172a4.007 4.007 0 015.656 0L10 4.343l1.172-1.171a4.007 4.007 0 115.656 5.656L10 15.828l-6.828-6.829a4.007 4.007 0 010-5.656z" />
                        </svg>
                    </div>
                </div>

                {/* Recipe Details Section */}
            <div className="w-full bg-white p-6 rounded-lg shadow-md max-w-6xl flex flex-col justify-center items-center ">
                {/* Title */}
                <h1 className="text-4xl ml-12 font-bold text-gray-800">{recipeData.Recipe_title.replace(/<[^>]*>/g, '')}</h1>
                <p className="text-gray-500 text-sm mt-2">Source: <span className="text-green-600">{recipeData.Source}</span></p>

                {/* Recipe Stats */}
                <div className="flex items-center gap-6 text-gray-600 text-sm border-t border-b py-4 mt-4 ">
                    <span>🍽 <strong>{recipeData.servings}</strong> serves</span>
                    <span>⏲ Prep: <strong>{recipeData.prep_time}</strong> mins</span>
                    <span>👨‍🍳 Cook: <strong>{recipeData.cook_time}</strong> mins</span>
                    <span>🥕 <strong>{recipeData.ingredients ? recipeData.ingredients.length : 0}</strong> Ingredients</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                {(recipeData.tags || ["Dinner", "Lunch", "Vegetarian"]).map((tag, index) => (
                    <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-lg shadow-sm"
                    >
                    {tag}
                    </span>
                ))}
                </div>
            </div>
                
            </div>

            {/* Description */}
            <div className="bg-white p-6 pt-2 rounded-lg shadow-md w-full  ">
                <h2 className="font-semibold text-lg mt-4">Description</h2>
                <p className="text-gray-700">{recipeData.description || "A delicious and comforting meal."}</p>
            </div>

                {/* Ingredients and Instructions */}
                <div className="flex flex-col md:flex-row gap-6 mt-6">
                        {/* Ingredients */}
                        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                            <h3 className="font-semibold text-lg mb-4">Ingredients</h3>
                            <table className="w-full border border-gray-200 text-sm text-left">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 border-b">Quantity</th>
                                        <th className="px-4 py-2 border-b">Unit</th>
                                        <th className="px-4 py-2 border-b">Ingredient</th>
                                        <th className="px-4 py-2 border-b">State</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recipeData.ingredients ? (
                                        recipeData.ingredients.map((ingredient, index) => (
                                            <tr key={index} className="border-t">
                                                <td className="px-4 py-2">{ingredient.quantity}</td>
                                                <td className="px-4 py-2">{ingredient.unit}</td>
                                                <td className="px-4 py-2">{ingredient.ingredient}</td>
                                                <td className="px-4 py-2">{ingredient.state ? `(${ingredient.state})` : '-'}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="px-4 py-2 text-center text-gray-500">
                                                No ingredients available.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Instructions */}
                        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                            <h3 className="font-semibold text-lg mb-4">Instructions</h3>
                            <table className="w-full border border-gray-200 text-sm text-left">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 border-b">Step</th>
                                        <th className="px-4 py-2 border-b">Instruction</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recipeData.instructions ? (
                                        recipeData.instructions.map((instruction, index) => (
                                            <tr key={index} className="border-t">
                                                <td className="px-4 py-2 font-bold">{index + 1}</td>
                                                <td className="px-4 py-2">{instruction}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="2" className="px-4 py-2 text-center text-gray-500">
                                                No instructions available.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                </div>
        </div>
);
                                    };

export default MealInfo;
