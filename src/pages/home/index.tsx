import { useEffect, useState, useContext } from "react";
import { api } from "../../services/api";

import { TbShoppingCartPlus } from "react-icons/tb";

import { CartContext } from "../../contexts/CartContext";

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  const { addItemCart } = useContext(CartContext);
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }
    getProducts();
  }, []);

  function handleAddCartItem(product: ProductProps) {
    addItemCart(product);
  }

  return (
    <div>
      <main className="w-full max-w-2xl md:max-w-7xl mx-auto px-4">
        {/* Banner */}
        <div className="bg-cover bg-center bg-zinc-700 text-white py-1 rounded-bl-[6rem] rounded-br-[6rem] md:rounded-bl-full md:rounded-br-full">
          <h1 className="text-lg md:text-4xl font-semibold my-4 text-gray-100 text-center">
            A melhor seleção de produtos!
          </h1>
          <p className="text-sm text-gray-200 text-center mb-8 px-4">
            Gadgets e Tecnologia Premium.
          </p>
        </div>

        {/* Product */}
        <div className="my-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <section
              key={product.id}
              className="w-full transition-all duration-200 ease-linear hover:scale-[1.02] px-2 md:px-0 cursor-pointer"
            >
              <img
                className="w-full rounded-t-lg max-h-70 object-cover"
                src={product.cover}
                alt={product.title}
              />

              <div className="bg-zinc-700 rounded-b-lg p-2 h-24">
                <p className="font-medium mb-2 text-sm md:text-xs text-white h-8">
                  {product.title}
                </p>

                <div className="flex gap-3 items-center justify-between px-2">
                  <strong className="text-white">
                    {product.price.toLocaleString("pt-BR", {
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
      </main>
    </div>
  );
}
