import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
export function Cart() {
  return (
    <div className="w-full max-w-2xl md:max-w-7xl mx-auto px-4">
      {/* Banner */}
      <div className="bg-cover bg-center bg-zinc-700 text-white py-1 rounded-bl-[6rem] rounded-br-[6rem] md:rounded-bl-full md:rounded-br-full">
        <h1 className="text-lg md:text-4xl font-semibold my-4 text-gray-100 text-center">
          Carrinho de Compras
        </h1>
        <p className="text-sm text-gray-200 text-center mb-8 px-4">
          Confira Suas Escolhas
        </p>
      </div>

      {/* Cart Product GRID */}
      <div className="my-5 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Cart Product */}
        <section className="flex items-center justify-between drop-shadow-md bg-zinc-700 p-4 text-white rounded transition-all duration-200 ease-linear hover:scale-[1.02] cursor-pointer">
          <img
            className="w-28 rounded-lg object-cover"
            src="https://images.tcdn.com.br/img/img_prod/993382/console_playstation_5_c_drive_2_controles_dualsense_brancos_headset_pulse_ps5_485_1_e7c644f61791fcafeb970f0989c7bfea.jpg"
            alt="Produto"
          />
          <div className="flex items-center justify-center flex-col md:flex-row md:gap-5 px-3 md:px-5">
            <div className="flex flex-col items-center justify-center">
              <p className="flex items-center justify-center">Valor unitário</p>
              <p className=" font-medium text-white">R$ 4.700,00</p>
            </div>

            <div className="flex items-center justify-center gap-3 my-2">
              <button className="bg-nextek p-1 rounded-full transition-all duration-200 ease-linear hover:bg-nextekHover flex items-center justify-center">
                <AiOutlineMinusCircle size={28} color="#fff" />
              </button>
              10
              <button className="bg-nextek p-1 rounded-full transition-all duration-200 ease-linear hover:bg-nextekHover flex items-center justify-center">
                <AiOutlinePlusCircle size={28} color="#fff" />
              </button>
            </div>

            <div className="flex md:flex-col items-center justify-center gap-1">
              <p className="flex items-center justify-center">
                SubTotal <span className="md:hidden">:</span>
              </p>
              <p className="font-medium text-white">R$ 4.700,00</p>
            </div>
          </div>
        </section>
      </div>

      {/* Total */}
      <div className="h-px border-b border-white w-full max-w-7xl my-5">
        <span className="float-right mt-4 font-medium text-white">
          Total: R$ 4.700,00
        </span>
      </div>
    </div>
  );
}
