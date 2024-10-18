import React from "react";
import footer from '../assets/footer.jpg';

const Footer = () => {
  return (
    <footer className="bg-[#fef3c7] p-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center h-90">
        
        {/* Center Section: Title, Image, and Search Box */}
        <div className="text-center md:w-1/3 mb-6 md:mb-0 ml-10 flex flex-col items-center">
          {/* Heading and Search Box in one flex container */}
          <div className="flex flex-col items-center">
            <h2 className="text-3xl ml-10 font-bold mb-5">ShopYouNursery</h2> {/* Increased margin-bottom here */}
            <input
              type="text"
              placeholder="Search here..."
              className="p-2 border border-gray-300 rounded-md ml-4"
            />
          </div>

          <img
            src={footer}
            alt="Sample Image"
            className="w-90 h-60 mx-auto rounded-lg"
          />
        </div>

        {/* Right Section: Links */}
        <div className="md:w-1/3 flex justify-around">
          {/* Privacy Policy Column */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Privacy Policy</h3>
            <ul>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Terms of Service
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  User Data
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="font-semibold text-lg mb-2">About</h3>
            <ul>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Our Story
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Support</h3>
            <ul>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  FAQs
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
