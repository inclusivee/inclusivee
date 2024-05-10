export default function CompanyHome() {
  return (
    <div>
      <div className="lg:mx-10 lg:flex lg:items-center lg:justify-between">
        <h2 className=" text-[#008037]">Vagas</h2>
        <button className=" bg-[#3A7652] text-white lg:mt-5  lg:flex lg:w-[200px] lg:items-center lg:justify-center lg:rounded-3xl  lg:py-1 lg:text-xl">
          <p> + </p> <p>Adicionar Vagas</p>
        </button>
      </div>

      <div className="lg:mx-10 lg:mt-5  lg:flex lg:w-full">
        <div>
          <div className="lg:flex ">
            <div className="bg-[#3A7652]">Abertas</div>
          </div>
          <div>
            <div>Encerradas</div>
          </div>
        </div>
      </div>
    </div>
  );
}
