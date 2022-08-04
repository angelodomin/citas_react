const Paciente = () => {
  return (
    <div className=" m-3 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className=" font-bold mb-3 text-gray-700 uppercase"> Nombre:
        <span className=" font-normal normal-case">Hook</span>

        <p className=" mt-3 font-bold mb-3 text-gray-700 uppercase"> Propietario:
        <span className=" font-normal normal-case">Angel</span>
        </p>

        <p className=" font-bold mb-3 text-gray-700 uppercase"> Email:
        <span className=" font-normal normal-case">correo@correo.com</span>
        </p>

        <p className=" font-bold mb-3 text-gray-700 uppercase"> Fecha Alta:
        <span className=" font-normal normal-case">10 Diciembre 2022</span>
        </p>

        <p className=" font-bold mb-3 text-gray-700 uppercase"> Sintomas:
        <span className=" font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos autem a impedit labore, sit commodi numquam aut debitis ad ullam molestiae quibusdam harum ipsam! Laborum, magnam. Vitae adipisci assumenda iure!</span>
        </p>
        
    </p>
  </div>
  )
}

export default Paciente