import React from 'react';
import { NavLink } from 'react-router-dom';

const MealCards = ({ detail }) => {
    console.log(detail);

    return (
        <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
    {!detail ? "" : detail.map((curItem) => {
        const cleanTitle = curItem.Recipe_title
            .replace(/<[^>]*>/g, '')
            .replace(new RegExp("no", 'gi'), '');

        return (
            <div 
    key={curItem.Recipe_id} 
    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden relative"
>
    <div className="relative">
        {/* Card Image */}
        <img 
            src={curItem.img_url} 
            alt={cleanTitle} 
            className="w-full h-48 object-cover"
        />
        {/* Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-0 hover:opacity-90 transition-opacity duration-300 flex items-end p-4">
            <h3 className="text-white text-lg font-bold line-clamp-2">{cleanTitle}</h3>
        </div>
    </div>

    {/* Card Content */}
    <div className="p-5 flex flex-col space-y-3">
        {/* Title
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{cleanTitle}</h3> */}

        {/* Button */}
<NavLink to={`/${curItem.Recipe_id}`}>
    <button className="py-3 px-6 w-full bg-teal-500 text-white font-semibold rounded-lg shadow-lg transform hover:bg-teal-600 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50">
        View Recipe
    </button>
</NavLink>


    </div>
</div>

        );
    })}
</div>

    );
};

export default MealCards;
