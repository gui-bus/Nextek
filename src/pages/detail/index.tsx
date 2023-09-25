import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { ProductProps } from "../home";
import { TbShoppingCartPlus } from "react-icons/tb";

import { CartContext } from "../../contexts/CartContext";
import toast from "react-hot-toast";

export function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps>();
  const [loading, setLoading] = useState(true);
  const { addItemCart } = useContext(CartContext);

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    }
    getProduct();
  }, [id]);

  function handleAddCartItem(product: ProductProps) {
    toast.success("Produto adicionado ao carrinho!");
    addItemCart(product);
  }

  return (
    <div>
      <main className="w-full max-w-2xl md:max-w-7xl mx-auto px-4">
        <div className="bg-cover bg-center bg-gradient-to-b from-zinc-600 to-zinc-800 text-white py-1 rounded-bl-[6rem] rounded-br-[6rem] md:rounded-bl-full md:rounded-br-full">
          <h1 className="text-lg md:text-4xl font-semibold my-4 text-gray-100 text-center">
            Detalhes do Produto
          </h1>
          <p className="text-sm text-gray-200 text-center mb-8 px-4">
            Descubra a qualidade excepcional
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center my-28">
            <div className="w-16 h-16 border-t-4 border-tr-4 border-nextek rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {product && (
              <div>
                <section className="flex flex-col md:flex-row items-center justify-center gap-4 w-full text-white bg-gradient-to-b from-zinc-600 to-zinc-800 p-5 rounded-xl my-8 shadow-xl md:max-w-5xl mx-auto">
                  <div className="">
                    <img
                      src={product?.image}
                      alt={product?.title}
                      className="flex-1 w-full max-w-xs max-h-72 object-contain rounded-lg p-4 bg-white"
                    />
                  </div>

                  <div className="flex-1 text-center">
                    <p className="font-bold text-xl my-3">{product?.title}</p>
                    <p className="my-4 text-sm">{product?.description}</p>
                    <div className="flex items-center justify-center gap-5">
                      <p className="my-4 text-xl font-bold">
                        {(product?.price * 4.9).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>

                      <button
                        className="bg-nextek p-1 rounded transition-all duration-200 ease-linear hover:bg-nextekHover"
                        onClick={() => handleAddCartItem(product)}
                      >
                        <TbShoppingCartPlus size={28} color="#fff" />
                      </button>
                    </div>
                  </div>
                </section>

                <Link
                  to="/"
                  className="flex items-center justify-center gap-2 h-9 text-white bg-nextek rounded-md border-0 font-medium w-11/12 max-w-lg px-4 py-2 transition-all duration-300 ease-in-out hover:bg-nextekHover mx-auto mb-4"
                >
                  Voltar para a página inicial
                </Link>
              </div>
            )}

            {!product && (
              <div className="flex w-full justify-center items-center flex-col mt-4 md:mt-10">
                <div className="my-8 text-center px-4">
                  <h1 className="font-bold text-2xl">
                    Oops! Produto não encontrado...
                  </h1>
                  <p className="mt-2">
                    O produto que você está procurando não existe.
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
          </>
        )}
      </main>
    </div>
  );
}
