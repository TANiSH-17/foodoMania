import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to handle mouse enter and leave events
    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return(
        <div className='w-full h-[10vh] flex justify-between items-center z-10 bg-[#fef7f7] px-5 shadow-md relative'>

            <div className="flex items-center z-20">
                <img 
                    src="https://i.pinimg.com/736x/7c/41/cf/7c41cf02f5f829b9ea488ce207b5a1ef.jpg"
                    className=" *:h-[90px] w-[90px] ml-56 " 
                />
                <div>
                    <h1 className="text-4xl ml-4 font-bold">food O' Mania</h1>
                </div>
            </div>

            <div className='flex align-bottom items-center pr-56 space-x-8 text-right z-20'>
                {/* Dropdown menu trigger */}
                
                <NavLink to={"/RecipeOfTheDay"}>
                    <div className=" text-black text-center px-6 py-3 font-bold shadow-md 
                    cursor-pointer hover:bg-red-600 transition duration-300 ease-in-out rounded-md "> Cant Decide?</div>
                </NavLink>
                <div className="bg-red-500 text-white text-center px-6 py-3 font-bold shadow-md 
                cursor-pointer hover:bg-red-600 transition duration-300 ease-in-out rounded-md ">
                JOIN NOW</div>

            </div>
        </div>
    );
};

export default Navbar;

// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// function Navbar() {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     // Function to handle mouse enter and leave events
//     const handleMouseEnter = () => {
//         setIsDropdownOpen(true);
//     };

//     const handleMouseLeave = () => {
//         setIsDropdownOpen(false);
//     };

//     return(
//         <div className='w-full h-[10vh] flex justify-between items-center z-10 bg-[#fef7f7] px-5 shadow-md relative'>

//             <div className="flex items-center z-20">
//                 <img 
//                     src="https://i.pinimg.com/736x/7c/41/cf/7c41cf02f5f829b9ea488ce207b5a1ef.jpg"
//                     className="h-[100px] w-[100px] ml-56 " 
//                 />
//                 <div>
//                     <h1 className="text-4xl ml-4 font-bold">food O' Mania</h1>
//                 </div>
//             </div>

//             <div className='flex align-bottom items-center pr-56 space-x-8 text-right z-20'>
//                 {/* Dropdown menu trigger */}
                
                
//                     <div className=" text-black text-center px-6 py-3 font-bold shadow-md 
//                     cursor-pointer hover:bg-red-600 transition duration-300 ease-in-out rounded-md "> Cant Decide What to Cook?</div>
                
//                 <div className="bg-red-500 text-white text-center px-6 py-3 font-bold shadow-md 
//                 cursor-pointer hover:bg-red-600 transition duration-300 ease-in-out rounded-md ">
//                 JOIN NOW</div>

//             </div>
//         </div>
//     );
// };

// export default Navbar;