import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  if (navOpen) {
    document.body.style.overflow = "hidden";
  }

  return (
    <nav className="w-full absolute flex justify-between p-4 items-center">
      <h1 className="text-2xl z-10 text-white font-bold ">Maldevis</h1>
      <MdMenuOpen
        className="z-20 cursor-pointer text-white"
        size={30}
        onClick={() => {
          setNavOpen(!navOpen);
        }}
      />

      {/* menus items */}
      <div
        className={
          navOpen
            ? "fixed left-0 top-0 w-full h-screen text-gray-300 bg-black/90 px-4 py-7 z-10 ease-out duration-700"
            : "h-screen w-full top-0 absolute left-[-100%]  px-4 py-7 ease-in duration-300"
        }
      >
        <ul className="flex flex-col w-full h-screen justify-center items-center gap-4">
          <li className="font-bold text-3xl p-4 cursor-pointer hover:text-white/50">
            Home
          </li>
          <li className="font-bold text-3xl p-4 cursor-pointer hover:text-white/50">
            Destination
          </li>
          <li className="font-bold text-3xl p-4 cursor-pointer hover:text-white/50">
            Reservation
          </li>
          <li className="font-bold text-3xl p-4 cursor-pointer hover:text-white/50">
            Amenities
          </li>
          <li className="font-bold text-3xl p-4 cursor-pointer hover:text-white/50">
            Rooms
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
