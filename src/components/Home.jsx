import React from 'react';
import "cal-sans";
import { NavLink } from 'react-router-dom';
import MealPlanning from './MealPlanning';

const Home = () => {

  return (

    <div className="h-screen w-screen bg-[#d0eb95] flex items-center justify-center relative">
    



    {/* background image */}
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.pexels.com/photos/349610/pexels-photo-349610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }}></div>
    
    {/* Centered Data Div */}
    <div className="flex flex-row w-10/12 max-w-[1200px] bg-white shadow-xl rounded-xl p-6 relative z-10">
  
      {/* Text Content */}
      <div className="flex flex-col justify-center items-start text-4xl sm:text-5xl p-8 w-1/2 space-y-6">
        <h1 className="text-6xl sm:text-7xl font-['Cal Sans'] font-semibold text-center text-gray-800 mb-6 leading-tight">
          All-in-one <br />
          recipe manager & <br />
          meal planning app
        </h1>
  
        <p className="text-lg sm:text-xl text-gray-700 text-center">
          Plan your meal
        </p>

        <div className= "justify-center gap-2 flex row">
        <NavLink to={"planmeal"}>
                  <button className='px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md hover:bg-green-600 transition duration-200'>
                      Plan Your Meal
                  </button>
                </NavLink>
                <NavLink to={"explore"}>
                  <button className='px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md hover:bg-green-600 transition duration-200'>
                      Explore Global Cuisine
                  </button>
                </NavLink>
                <NavLink to={"nutritionalInfo"}> 
                  <button className='px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md hover:bg-green-600 transition duration-200'>
                      Get Nutritional Insights
                  </button>
                </NavLink>
        </div>
  
      </div>
  
      {/* Image Section */}
      <div className="w-1/2 flex items-center justify-center p-4">
        <img
          src="https://f933e037afce6a4510d2-1b0b5f08348066fb5b3690501dcb8e42.ssl.cf1.rackcdn.com/4/v2/EYB_Homepage_Design_Hero_Image.jpg"
          alt="Recipe Manager"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
      

    </div>
    

</div>

  );
};

export default Home;
