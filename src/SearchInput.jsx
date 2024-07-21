import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchInput = () => {
    return (
        <div className="flex bg-white items-center rounded-full p-2 mt-[7vh]">
            <FaSearch className="text-gray-500 ml-2" />
            <input
                type="text"
                placeholder="Какую работу ищете?"
                className="flex-grow p-2 focus:outline-none focus:ring-0 text-sm mx-2"
            />
            <button className="bg-blue-500 text-white rounded-full px-10 py-2 ml-2 hover:bg-blue-600">
                Поиск
            </button>
        </div>
    );
}

export default SearchInput;
