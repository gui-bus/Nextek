import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export function Cart() {
  const { cart, total, addItemCart, removeItemCart, clearCart } =
    useContext(CartContext);

  return (
    <div className="w-full max-w-2xl md:max-w-7xl mx-auto px-4">
      {/* Banner */}
      <div className="bg-cover bg-center bg-gradient-to-b from-zinc-600 to-zinc-800 text-white py-1 rounded-bl-[6rem] rounded-br-[6rem] md:rounded-bl-full md:rounded-br-full">
        <h1 className="text-lg md:text-4xl font-semibold my-4 text-gray-100 text-center">
          Carrinho de Compras
        </h1>
        <p className="text-sm text-gray-200 text-center mb-8 px-4">
          Confira Suas Escolhas
        </p>
      </div>

      {cart.length === 0 && (
        <div className="flex w-full justify-center items-center flex-col mt-4 md:mt-10">
          <div className="my-8 text-center px-4">
            <h1 className="font-bold text-2xl">
              Oops! Seu carrinho está vazio...
            </h1>
            <p className="mt-2">
              Não se preocupe, você pode começar a adicionar itens agora!
            </p>
          </div>

          <Link
            to="/"
            className="flex items-center justify-center gap-2 h-9 text-white bg-nextek rounded-md border-0 font-medium w-11/12 max-w-lg px-4 py-2 transition-all duration-300 ease-in-out hover:bg-nextekHover"
          >
            Ver lista de produtos
          </Link>
        </div>
      )}

      {/* Cart Product GRID */}
      <div className="my-5 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Cart Product */}
        {cart.map((item) => (
          <section
            key={item.id}
            className="flex flex-col items-center justify-between drop-shadow-md bg-gradient-to-b from-zinc-600 to-zinc-800 p-4 text-white rounded  cursor-default select-none"
          >
            <p className="font-medium mb-2 text-sm text-white text-center">
              {item.title}
            </p>
            <div className="h-px border-b border-white w-full max-w-7xl"></div>
            <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-between p-4">
              <Link to={`/product/${item.id}`}>
                <img
                  className="w-28 h-28 rounded-lg object-contain bg-white p-2 transition-all duration-200 ease-linear hover:scale-[1.02]"
                  src={item.image}
                  alt={item.title}
                />
              </Link>
              <div className="flex items-center justify-center flex-col md:flex-row md:gap-5 px-3 md:px-5">
                <div className="flex flex-col items-center justify-center">
                  <p className="flex items-center justify-center">
                    Valor unitário
                  </p>
                  <p className=" font-medium text-white">
                    {(item.price * 4.9).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-3 my-2">
                  <button
                    className="bg-nextek p-1 rounded-full transition-all duration-200 ease-linear hover:bg-nextekHover flex items-center justify-center"
                    onClick={() => removeItemCart(item)}
                  >
                    <AiOutlineMinusCircle size={28} color="#fff" />
                  </button>
                  {item.amount}
                  <button
                    className="bg-nextek p-1 rounded-full transition-all duration-200 ease-linear hover:bg-nextekHover flex items-center justify-center"
                    onClick={() => addItemCart(item)}
                  >
                    <AiOutlinePlusCircle size={28} color="#fff" />
                  </button>
                </div>

                <div className="flex md:flex-col items-center justify-center gap-1">
                  <p className="flex items-center justify-center">
                    SubTotal <span className="md:hidden">:</span>
                  </p>
                  <p className="font-medium text-white">
                    {item.total.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Total */}
      {cart.length !== 0 && (
        <div className="w-full">
          <div className="h-px border-b border-white w-full max-w-7xl my-5">
            <span className="float-right mt-4 font-medium text-white">
              Total: {total}
            </span>

            <span
              className="float-left mt-4 font-medium text-white cursor-pointer transition duration-300 ease-linear hover:underline"
              onClick={() => clearCart()}
            >
              Limpar carrinho
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
