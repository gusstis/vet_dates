const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className=" font-black text-3xl text-center ">
        Seguimiento Pacientes
      </h2>
      <p className=" text-lg mt-5 text-center mb-10 ">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold  ">Administralos</span>
      </p>
      <form action="" className=" bg-white shadow-md rounded-md py-10 px-5 mb-10 ">
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className=" block text-gray-700 uppercase font-bold "
          >
            Nombre de la Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre del Animal"
            className="border-spacing-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
          />
        </div>
          <div className="mb-5">
            <label
              htmlFor="owner"
              className=" block text-gray-700 uppercase font-bold "
            >
              Nombre del Propietario
            </label>
          <input
            id="owner"
            type="text"
            placeholder="Nombre del  otro Animal"
            className="border-spacing-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className=" block text-gray-700 uppercase font-bold "
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="email contacto"
            className="border-spacing-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className=" block text-gray-700 uppercase font-bold "
          >
            Fecha de Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-spacing-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className=" block text-gray-700 uppercase font-bold "
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los síntomas..."
            className="border-spacing-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
          />
        </div>
        <input
          type="submit"
          className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all "
          value="Agregar paciente"
        />
      </form>
    </div>
  );
};

export default Formulario;
