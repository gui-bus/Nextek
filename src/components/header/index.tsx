import logoImg from "../../../src/assets/logo.png";
import { BiCartAlt } from "react-icons/bi";

import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full px-2 bg-zinc-700 drop-shadow-xl shadow-xl ">
      <nav className="w-full max-w-7xl h-20 flex items-center justify-around px-5 mx-auto">
        <Link to="/">
          <img src={logoImg} alt="Nextek" className="w-44 h-auto" />
        </Link>

        <Link to="/cart" className="relative text-white transition-all duration-300 ease-linear hover:scale-105">
          <BiCartAlt size={36}/>
          <span className="absolute -right-3 -top-3
           px-2.5 bg-nextek rounded-full h-6 w-6 flex items-center justify-center text-white text-xs font-bold">10</span>
        </Link>
      </nav>
    </header>
  );
}
