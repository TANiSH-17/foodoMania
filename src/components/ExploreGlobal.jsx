import axios from 'axios';
import React, { useState } from 'react';
import MealCards from './MealCards';

// Example list of countries (replace with a full list or an API)
const countries = [
    "Afghanian", "Albanian", "Algerian", "Andorian", "Angolan", "Antiguanian",
    "Argentinian", "Armenian", "Australian", "Austrian", "Azerbaijian", "Bahamian",
    "Bahrainian", "Bangladeshiian", "Barbadian", "Belarusian", "Belgian", "Belizian",
    "Beninian", "Bhutanian", "Bolivian", "Bosnian", "Botswanian", "Brazilian",
    "Bruneian", "Bulgarian", "Burkinian", "Burundian", "Cabo Verdean", "Cambodian",
    "Cameroonian", "Canadian", "Central Africanian", "Chadian", "Chilean",
    "Chinese", "Colombian", "Comorian", "Congolian", "Costa Rican",
    "Croatian", "Cuban", "Cypriotian", "Czechian", "Danish", "Djiboutian",
    "Dominicanian", "Ecuadorian", "Egyptian", "El Salvadorian", "Equatorial Guinean",
    "Eritreanian", "Estonian", "Eswatinian", "Ethiopian", "Fijian", "Finnish",
    "French", "Gabonian", "Gambian", "Georgian", "Germanian", "Ghanaian",
    "Greekian", "Grenadian", "Guatemalan", "Guinean", "Guinea-Bissauan",
    "Guyanian", "Haitian", "Honduran", "Hungarian", "Icelandian", "Indian",
    "Indonesian", "Iranian", "Iraqiian", "Irelandian", "Israeliian", "Italian",
    "Jamaican", "Japanese", "Jordanian", "Kazakhstaniian", "Kenyanian", "Kiribatian",
    "Koreanian", "Kuwaitian", "Kyrgyzstanian", "Laotian", "Latvian", "Lebanese",
    "Liberian", "Libyan", "Liechtensteinian", "Lithuanian", "Luxembourgian",
    "Madagascan", "Malawian", "Malaysian", "Maldivian", "Malian", "Maltian",
    "Marshallian", "Mauritanian", "Mauritian", "Mexican", "Micronesian",
    "Moldovanian", "Monacan", "Mongolian", "Montenegrin", "Moroccan", 
    "Mozambican", "Myanmartian", "Namibian", "Nauruian", "Nepalian", "Netherlandian",
    "New Zealandian", "Nicaraguian", "Nigerian", "Nigerian", "Norwegianian",
    "Omaniian", "Pakistaniian", "Panamanianian", "Papua New Guineanian", "Peruvianian",
    "Philippinianian"
]
  

const ExploreGlobal = () => {
  const [array, setArray] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleInput = (event) => {
    const value = event.target.value;
    setSearch(value);

    // Filter countries as user types
    if (value) {
      const filtered = countries.filter((country) =>
        country.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries([]);
    }
  };

  const handleSelect = (country) => {
    setSearch(country); // Set the selected country to input
    setFilteredCountries([]); // Clear the suggestions
  };

  const globalmeal = async () => {
    try {
      const result = await axios.get(
        `https://cosylab.iiitd.edu.in/recipe-search/sub-regions?searchText=${search}&pageSize=10`
      );
      const final = result.data.payload.data;
      setArray(final);
      console.log(final);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="flex p-[100px] items-start justify-center min-h-screen bg-gray-100">
        <div className="w-full p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Enter the name of the Country whose cuisine you want to explore
          </h2>
          <div className="relative flex gap-2">
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Enter the name of the country"
                value={search}
                onChange={handleInput}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              />
              {filteredCountries.length > 0 && (
                <ul className="absolute w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-40 overflow-y-auto z-10">
                  {filteredCountries.map((country, index) => (
                    <li
                      key={index}
                      onClick={() => handleSelect(country)}
                      className="p-3 hover:bg-green-100 cursor-pointer"
                    >
                      {country}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              onClick={globalmeal}
              className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Search
            </button>
          </div>
          <div className="p-8 m-8">
            <MealCards detail={array} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreGlobal;