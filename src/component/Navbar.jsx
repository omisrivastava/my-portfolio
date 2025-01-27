import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Skills",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-2 bg-black sticky top-0 z-20">
      <div className="flex justify-center">
        <h1 className="text-5xl ml-2 text-yellow-400">Omi Srivastava</h1>
      </div>
      <ul className="text-xl invisible md:visible md:flex absolute right-10">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="mx-4 cursor-pointer font-medium text-gray-200 hover:scale-110 duration-200"
            >
              <Link to={link} smooth={true} duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className=" cursor-pointer pr-4 z-10 text-gray-500 md:invisible"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => {
            return (
              <>
                <li
                  key={id}
                  className="mx-4 py-4 cursor-pointer font-medium text-gray-200 hover:scale-110 duration-200 text-4xl"
                >
                  <Link
                    onClick={() => setNav(!nav)}
                    to={link}
                    smooth={true}
                    duration={500}
                  >
                    {link}
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
