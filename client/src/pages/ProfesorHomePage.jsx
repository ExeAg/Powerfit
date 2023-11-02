import 'bootstrap/dist/css/bootstrap.min.css'

function ProfesorHomePage() {
  return (
    <form action="/add-task">
      <div className="container">
        <div className='col-md-6'>
          <div className="bg-image bg-cover" style={{ backgroundImage: `url(/images/comidaFierros.jpg)` }}>
            <button className=" bg-green-800 px-3 py-2 rounded-md my-20">Agregar rutina</button>
          </div>
        </div>
      </div>
      <form action="">
        <div className="container">
          <div className='col-md-6'>
            <div className="bg-image bg-cover" style={{ backgroundImage: `url(/images/powerFitImagenes.jpg)` }}>
              <button className=" bg-green-800 px-3 py-2 rounded-md my-20">Ver mi perfil</button></div>
          </div>
        </div>
        <form action="/chat">
          <div className="container">
            <div className='col-md-6'>
              <div className="bg-image bg-cover" style={{ backgroundImage: `url(/images/mamado.webp)` }}>
                <button className=" bg-green-800 px-3 py-2 rounded-md my-20">Chat con alumno</button></div>
            </div>
          </div>
        </form>
      </form>
    </form>

  )
}


export default ProfesorHomePage