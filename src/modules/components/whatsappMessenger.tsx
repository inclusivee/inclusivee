const WhatsappMessenger = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">VAGA - Marketing</h3>
        <span className="inline-block bg-green-500 text-white px-3 py-2 rounded-md">Sênior</span>
      </div>

      <div className="mt-3">
        <p className="text-gray-600">Equipe de Compras</p>
      </div>

      <div className="mt-5">
        <textarea
          className="w-full h-40 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Escreva sua mensagem"
        />
      </div>

      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Limpar</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-green-600">Enviar</button>
      </div>
    </div>
  );
};

export default WhatsappMessenger;
