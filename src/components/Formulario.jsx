
const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5" >
        <h2 className=" font-black text-3xl text-center " >
        Seguimiento Pacientes
        </h2>
        <p className=" text-lg mt-5 text-center " >
          Añade Pacientes y {''}
          <span className="text-indigo-600 font-bold  " >
          Administralos
          </span>
        </p>
        <form action="" className=" bg-white shadow-md " >
          <div>
            <label htmlFor="">Nombre de la Mascota</label>
            <input type="text" placeholder="Nombre del Animal" />
          </div>
        </form>
    </div>
  )
}

export default Formulario