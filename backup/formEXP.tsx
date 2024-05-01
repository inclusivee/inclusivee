<Form
          onSubmit={handleSubmit(handlerFormSubmit)}
          className="lg:mt-8 lg:flex lg:flex-col lg:justify-start lg:px-10 lg:w-full lg:h-full"
        >
          <h2 className="text-2xl font-bold text-[#008037]">Experiência</h2>
          <h3 className="text-md font-normal text-[#008037]">Dados da Experiência</h3>

          <Label className="mt-3 text-xs text-[#008037]">Nome Empresa:</Label>
          <Input
            {...register("company")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-2 text-xs text-[#008037]">Cargo:</Label>
          <Input
            {...register("office")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-2 text-xs text-[#008037]">Início:</Label>
          <Input
            {...register("startOfWork")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-2 text-xs text-[#008037]">Desligamento:</Label>
          <Input
            {...register("layOff")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-2 text-xs text-[#008037]">Empresa Atual:</Label>
          <Input
            {...register("currentCompany")}
            type="checkbox"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-2 text-xs text-[#008037]">Atribuições do cargo:</Label>
          <textarea
            {...register("assignmentOfPositions")}
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></textarea>
          
        </Form>