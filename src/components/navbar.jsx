import { useState } from "react";
import Wrapper from "../layout/wrapper";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const menuItems = [
    { name: "Home", subItems: ["Home 1", "Home 2", "Home 3", "Home 4"] },
    {
      name: "Tours",
      subItems: ["List Tours", "Search Tours", "Single Tour", "Single Event"],
    },
  ];
  const staticLinks = ["Blog", "About", "Contact", "Error"];

  return (
    <nav className="fixed top-0 left-0 w-full py-4 bg-white z-[99] shadow-md">
      <Wrapper>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-16">
            <img src="/logo.png" className="max-w-[145px]" alt="Logo" />

            <ul className="hidden lg:flex items-center gap-10">
              {menuItems.map((menu, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => toggleDropdown(menu.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="transition-all duration-300 hover:text-[#ff5722] cursor-pointer"
                    aria-expanded={activeDropdown === menu.name}
                  >
                    {menu.name}
                    <b className="caret"></b>
                  </button>
                  {/* Dropdown */}
                  <div
                    className={`absolute top-[50px] left-0 w-[200px] bg-white shadow-lg transition-all duration-300 px-4 ease-in-out ${
                      activeDropdown === menu.name
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-3"
                    }`}
                  >
                    {menu.subItems.map((subItem, i) => (
                      <a
                        key={i}
                        href="#"
                        className="block px-6 py-4 text-[#637082] border-b border-[#e9edf5] hover:text-[#ff5722] hover:font-semibold transition-all duration-300 text-sm"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </li>
              ))}
              {staticLinks.map((menu, index) => (
                <li
                  key={index}
                  className="transition-all duration-300 cursor-pointer hover:text-[#ff5722]"
                >
                  {menu}
                </li>
              ))}
            </ul>
          </div>

          {/* Sign-in */}
          <div className="hidden lg:flex items-center gap-2 cursor-pointer">
            <img src="/user-profile.svg" className="w-5" alt="User" />
            <p className="text-sm font-medium">Sign in</p>
          </div>

          {/* Mobile menu toggle */}
          <button className="lg:hidden" onClick={toggleMobileMenu}>
            <div className="flex flex-col bg-[#ff5722] rounded-md w-10 h-10 justify-center items-center p-2">
              <div className="flex flex-col items-end gap-1">
                <div className="w-6 h-[2px] bg-white"></div>
                <div className="w-4 h-[2px] bg-white"></div>
                <div className="w-6 h-[2px] bg-white"></div>
                <div className="w-4 h-[2px] bg-white"></div>
              </div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-[#000000b6] bg-opacity-40 z-[99] transition-opacity duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={toggleMobileMenu}
        >
          <div
            className={`fixed left-0 top-0 h-full w-[300px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="bg-[#e44343] px-4 py-3 text-center text-white font-semibold cursor-pointer flex items-center justify-center"
              onClick={toggleMobileMenu}
            >
              <img src="/close.svg" className="w-[30px]" />
              <span> Close</span>
            </div>
            <ul className="p-4">
              {menuItems.map((menu, index) => (
                <li key={index} className="mb-4">
                  <button
                    onClick={() => toggleDropdown(menu.name)}
                    className="block transition-all duration-300 hover:text-[#ff5722] cursor-pointer focus:outline-none w-full text-left"
                  >
                    {menu.name}
                    <b className="caret"></b>
                  </button>
                  {activeDropdown === menu.name && (
                    <div className="ml-4 mt-2">
                      {menu.subItems.map((subItem, i) => (
                        <a
                          key={i}
                          href="#"
                          className="block py-1 text-sm text-[#637082] hover:text-[#ff5722] transition-all duration-300"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              {staticLinks.map((menu, index) => (
                <li
                  key={index}
                  className="mb-4 transition-all duration-300 hover:text-[#ff5722] cursor-pointer"
                >
                  {menu}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
}

export default Navbar;
