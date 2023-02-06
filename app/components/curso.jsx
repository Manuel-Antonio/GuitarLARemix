
function Curso({curso}) {
    const {contenido, imagen, titulo} = curso;

  return (
    <section className="curso">
        <style jsx="true">
          {`
            .curso {
              background-image: linear-gradient(to right, rgb(0 0 0 / .9), rgb( 0 0 0 / .7)), url(http://localhost:1337${imagen.data.attributes.formats.large.url});
            }
          `}
        </style>
        <div className="contenedor curso-grid">
            <div className="contenido">
                <h2 className="heading">{titulo}</h2>
                <p className="texto">{contenido}</p>
            </div>
        </div>
    </section>
  )
}

export default Curso