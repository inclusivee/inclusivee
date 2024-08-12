
function WhatsappMessenger () {

  function sendMenssengerWhatsapp(){
    return "https://wa.me/27992620564?text=Ola%20tudo%20bem?"
  } 
  



  return (
    <div className=" lg:bg-[#e2e0e2] lg:px-3 lg:py-3  lg:shadow-md lg:rounded-lg">
      <div className="flex flex-col">
        <h3 className="text-lg font-medium text-gray-900">VAGA - Marketing</h3>
        <p className="inline-block rounded-md bg-green-500 px-3 py-2 text-sm text-gray-300">
          Sênior - Equipe de compra
        </p>
      </div>

      <div className="mt-5">
        <textarea
          className=" w-full lg:bg-[#e2e0e2] rounded-md border border-gray-300 bg-slate-400 p-3"
          placeholder="Escreva sua mensagem"
          rows={5}
        />
      </div>

      <div className="w- mt-4 flex justify-end">
        <button className=" w-32 rounded-3xl border-2  border-[#008037]  px-4 py-2 text-black">
          Limpar
        </button>
        <button onClick={sendMenssengerWhatsapp} className="ml-2 w-32 rounded-3xl bg-[#35693E] px-4 py-2 text-white ">
          Enviar
        </button>
      </div>
    </div>
  );
};


export default WhatsappMessenger;