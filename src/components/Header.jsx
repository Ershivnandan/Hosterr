import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 ">
      <div className="flex items-center justify-start gap-2">
        <img src="/src/assets/logo.png" alt="rocket" className="w-[20%]" />
        <button className="bg-gradient-to-r from-orange-400 to-red-400 text-sm text-white px-2.5 py-1.5 rounded-2xl">
          Hoster is hiring
        </button>
      </div>
      <ul className="hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6 align-middle">
        <li>
          <a href="#">Plan</a>
        </li>
        <li>
          <a href="#">Find Domain</a>
        </li>
        <li>
          <a href="#">Why Hosterr</a>
        </li>
      </ul>
      <div className="hidden lg:flex justify-center items-center font-lato gap-6">
        <a className="text-gray-400" href="#">
          Sign in
        </a>
        <button className="px-4 py-2 rounded-2xl bg-blue-400 hover:bg-blue-500 text-white">
          Join Waitlist
        </button>
      </div>
      <div className="relative lg:hidden">
        <FaBars onClick={menuOpen} className="cursor-pointer text-2xl" />
        <ul
          className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform ${
            isOpen ? 'scale-100' : 'scale-0'
          }`}
        >
          <li className="border-b border-gray-200">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Plan
            </a>
          </li>
          <li className="border-b border-gray-200">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Find Domain
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Why Hosterr
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
