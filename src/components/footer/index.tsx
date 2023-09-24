import { useState } from "react";
import logoImg from "../../assets/logo.png";
import { Link } from "react-router-dom";

import {
  RiTwitterXLine,
  RiFacebookCircleFill,
  RiInstagramLine,
} from "react-icons/ri";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribeClick = () => {
    setEmail("");
  };

  return (
    <footer className="bg-zinc-700 shadow-xl p-4">
      <div className="flex flex-col md:flex-row items justify-center">
        <div className="flex flex-col items-center justify-center md:w-1/3">
          <Link to="/" className="my-2">
            <img src={logoImg} alt="Nextek" className="w-44 h-auto" />
          </Link>
        </div>

        <div className="text-center text-gray-400 mb-4 md:mb-0 md:w-1/3">
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-nextek">
              <RiFacebookCircleFill size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-nextek">
              <RiTwitterXLine size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-nextek">
              <RiInstagramLine size={24} />
            </a>
          </div>
          <ul className="flex items-center justify-center gap-2 text-white my-2">
            <li>
              <Link
                to="/products"
                className="transition-all duration-200 ease-linear hover:text-nextek"
              >
                Produtos
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="transition-all duration-200 ease-linear hover:text-nextek"
              >
                Sobre nós
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="transition-all duration-200 ease-linear hover:text-nextek"
              >
                Contato
              </Link>
            </li>
          </ul>
          &copy; {new Date().getFullYear()} Nextek. Todos os direitos
          reservados.
        </div>

        <div className="flex flex-col text-center items-center justify-center md:w-1/3 mb-5 md:mb-0">
          <div className="text-gray-400">
            Inscreva-se em nossa newsletter para receber as últimas atualizações
            e ofertas.
          </div>
          <div className="mt-2 flex justify-center items-center text-center  mb-2 md:mb-0">
            <input
              type="email"
              placeholder="Digite seu email"
              className="px-4 py-2 w-full md:w-auto rounded-l-lg bg-zinc-600  outline-none text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="button"
              className="px-4 py-2 w-full md:w-auto bg-nextek text-white rounded-r-lg hover:bg-nextek-dark transition-all duration-200 ease-linear hover:bg-nextekHover"
              onClick={handleSubscribeClick}
            >
              Inscrever-se
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
