import React from 'react'
import './Home.scss'

const Home = () => {
  return (
    <div>
      <div className='home-container'>

        <section>
          <img src="./upload/prague.jpg" alt="images" />
          <p>Bienvenido/a a nuestra tienda en línea dedicada a la venta de libros. Aquí podrás encontrar una amplia selección de títulos en diferentes géneros y formatos, desde bestsellers hasta joyas literarias poco conocidas. Si eres un apasionado de la literatura, este es el lugar perfecto para ti.
          </p>
        </section>

        <section>
          <img src="./upload/woman.jpg" alt="images" />
          <p>En nuestro catálogo encontrarás opciones para todas las edades y gustos, desde literatura infantil hasta novelas gráficas para adultos. También contamos con una amplia variedad de títulos en diferentes idiomas, por lo que si estás buscando algo en particular, ¡es probable que lo encuentres aquí!
          </p>
        </section>

        <section>
          <img src="./upload/flea.jpg" alt="images" />
          <p>En nuestra tienda online también ofrecemos recomendaciones personalizadas basadas en tus preferencias de lectura y reseñas de otros clientes. Así podrás descubrir nuevos autores, géneros y títulos que se ajusten a tus gustos y necesidades.
          </p>
        </section>

        <section>
          <img src="./upload/books.jpg" alt="images" />
          <p>Finalmente, nos aseguramos de ofrecer un servicio al cliente excepcional. Realizamos envíos a todo el país y garantizamos que tus compras lleguen a tiempo y en perfectas condiciones. ¡Explora nuestra colección y encuentra tu próxima lectura favorita!
          </p>
        </section>
      </div>
    </div>

  )
}

export default Home