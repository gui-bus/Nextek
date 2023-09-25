import { useEffect, useState, useContext } from "react";
import { api } from "../../services/api";

import { TbShoppingCartPlus } from "react-icons/tb";

import { CartContext } from "../../contexts/CartContext";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export function Home() {
  const { addItemCart } = useContext(CartContext);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  function handleAddCartItem(product: ProductProps) {
    toast.success("Produto adicionado ao carrinho!");
    addItemCart(product);
  }

  return (
    <div>
      <main className="w-full max-w-2xl md:max-w-7xl mx-auto px-4">
        {/* Banner */}
        <div className="bg-cover bg-center bg-gradient-to-b from-zinc-600 to-zinc-800 text-white py-1 rounded-bl-[6rem] rounded-br-[6rem] md:rounded-bl-full md:rounded-br-full">
          <h1 className="text-lg md:text-3xl font-semibold my-4 text-gray-100 text-center">
            Explore a Variedade de Itens!
          </h1>
          <p className="text-sm text-gray-200 text-center mb-8 px-4">
            Eletrônicos, Moda e Joias Exclusivas
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center my-28">
            <div className="w-16 h-16 border-t-4 border-tr-4 border-nextek rounded-full animate-spin"></div>
          </div>
        ) : (
          <section>
            <p className="mt-4 mb-2 font-medium text-white text-center text-xl bg-gradient-to-r from-nextek to-nextekHover py-1 rounded-tr-full rounded-tl-full drop-shadow-xl">
              Eletrônicos
            </p>

            {/* Product electronics */}
            <div className="my-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
              {products
                .filter((product) => product.category === "electronics")
                .map((product) => (
                  <section
                    key={product.id}
                    className="w-full transition-all duration-200 ease-linear hover:scale-[1.02] px-2 md:px-0 cursor-default select-none"
                  >
                    <Link to={`/product/${product.id}`}>
                      <img
                        className="w-full rounded-t-lg h-72 object-contain bg-white p-5 cursor-pointer"
                        src={product.image}
                        alt={product.title}
                      />
                    </Link>

                    <div className="bg-gradient-to-b from-zinc-600 to-zinc-800 rounded-b-lg p-2 h-32 lg:h-40">
                      <p className="px-2 font-medium mb-2 text-sm md:text-xs text-white h-14 lg:h-[5.5rem]">
                        {product.title}
                      </p>

                      <div className="flex gap-3 items-center justify-between px-2">
                        <strong className="text-white">
                          {(product.price * 4.9).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </strong>
                        <button
                          className="bg-nextek p-1 rounded transition-all duration-200 ease-linear hover:bg-nextekHover"
                          onClick={() => handleAddCartItem(product)}
                        >
                          <TbShoppingCartPlus size={28} color="#fff" />
                        </button>
                      </div>
                    </div>
                  </section>
                ))}
            </div>

            <div className="h-px border-b border-white w-full max-w-7xl mb-5"></div>

            <p className="mt-4 mb-2 font-medium text-white text-center text-xl bg-gradient-to-r from-nextek to-nextekHover py-1 rounded-tr-full rounded-tl-full drop-shadow-xl">
              Moda feminina
            </p>

            {/* Product women's clothing */}
            <div className="my-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
              {products
                .filter((product) => product.category === "women's clothing")
                .map((product) => (
                  <section
                    key={product.id}
                    className="w-full transition-all duration-200 ease-linear hover:scale-[1.02] px-2 md:px-0 cursor-default select-none"
                  >
                    <Link to={`/product/${product.id}`}>
                      <img
                        className="w-full rounded-t-lg h-72 object-contain bg-white p-5 cursor-pointer"
                        src={product.image}
                        alt={product.title}
                      />
                    </Link>

                    <div className="bg-gradient-to-b from-zinc-600 to-zinc-800 rounded-b-lg p-2 h-32">
                      <p className="px-2 font-medium mb-2 text-sm md:text-xs text-white h-14">
                        {product.title}
                      </p>

                      <div className="flex gap-3 items-center justify-between px-2">
                        <strong className="text-white">
                          {(product.price * 4.9).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </strong>
                        <button
                          className="bg-nextek p-1 rounded transition-all duration-200 ease-linear hover:bg-nextekHover"
                          onClick={() => handleAddCartItem(product)}
                        >
                          <TbShoppingCartPlus size={28} color="#fff" />
                        </button>
                      </div>
                    </div>
                  </section>
                ))}
            </div>

            <div className="h-px border-b border-white w-full max-w-7xl mb-5"></div>

            <p className="mt-4 mb-2 font-medium text-white text-center text-xl bg-gradient-to-r from-nextek to-nextekHover py-1 rounded-tr-full rounded-tl-full drop-shadow-xl">
              Moda masculina
            </p>

            {/* Product mens's clothing */}
            <div className="my-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {products
                .filter((product) => product.category === "men's clothing")
                .map((product) => (
                  <section
                    key={product.id}
                    className="w-full transition-all duration-200 ease-linear hover:scale-[1.02] px-2 md:px-0 cursor-default select-none"
                  >
                    <Link to={`/product/${product.id}`}>
                      <img
                        className="w-full rounded-t-lg h-72 object-contain bg-white p-5 cursor-pointer"
                        src={product.image}
                        alt={product.title}
                      />
                    </Link>

                    <div className="bg-gradient-to-b from-zinc-600 to-zinc-800 rounded-b-lg p-2 h-24">
                      <p className="px-2 font-medium mb-2 text-sm md:text-xs text-white h-7">
                        {product.title}
                      </p>

                      <div className="flex gap-3 items-center justify-between px-2">
                        <strong className="text-white">
                          {(product.price * 4.9).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </strong>
                        <button
                          className="bg-nextek p-1 rounded transition-all duration-200 ease-linear hover:bg-nextekHover"
                          onClick={() => handleAddCartItem(product)}
                        >
                          <TbShoppingCartPlus size={28} color="#fff" />
                        </button>
                      </div>
                    </div>
                  </section>
                ))}
            </div>

            <div className="h-px border-b border-white w-full max-w-7xl mb-5"></div>

            <p className="mt-4 mb-2 font-medium text-white text-center text-xl bg-gradient-to-r from-nextek to-nextekHover py-1 rounded-tr-full rounded-tl-full drop-shadow-xl">
              Joalheria
            </p>

            {/* Product jewelery */}
            <div className="my-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {products
                .filter((product) => product.category === "jewelery")
                .map((product) => (
                  <section
                    key={product.id}
                    className="w-full transition-all duration-200 ease-linear hover:scale-[1.02] px-2 md:px-0 cursor-default select-none"
                  >
                    <Link to={`/product/${product.id}`}>
                      <img
                        className="w-full rounded-t-lg h-72 object-contain bg-white p-5 cursor-pointer"
                        src={product.image}
                        alt={product.title}
                      />
                    </Link>

                    <div className="bg-gradient-to-b from-zinc-600 to-zinc-800 rounded-b-lg p-2 h-[6.5rem]">
                      <p className="px-2 font-medium mb-2 text-sm md:text-xs text-white h-9">
                        {product.title}
                      </p>

                      <div className="flex gap-3 items-center justify-between px-2">
                        <strong className="text-white">
                          {(product.price * 4.9).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </strong>
                        <button
                          className="bg-nextek p-1 rounded transition-all duration-200 ease-linear hover:bg-nextekHover"
                          onClick={() => handleAddCartItem(product)}
                        >
                          <TbShoppingCartPlus size={28} color="#fff" />
                        </button>
                      </div>
                    </div>
                  </section>
                ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
