import React from 'react'
import './Home.scss'
import pragueImg from '../../img/prague.jpg'
import womanImg from '../../img/woman.jpg'
import fleaImg from '../../img/flea.jpg'
import booksImg from '../../img/books.jpg'
const Home = () => {
  return (
    <div>
      <div className='home-container'>

        <h1 className='home-title'>Tu libreria en linea, sin salir de casa.</h1>

        <section className='first-section'>
          <img src={pragueImg} alt="images" style={{ width: '500px', height: '300px' }} />
          <p>Bienvenido/a a nuestra tienda en línea dedicada a la venta de libros. Aquí podrás encontrar una amplia selección de títulos en diferentes géneros y formatos, desde bestsellers hasta joyas literarias poco conocidas. Si eres un apasionado de la literatura, este es el lugar perfecto para ti.
          </p>
        </section>

        <section className='second-section'>
          <p>En nuestro catálogo encontrarás opciones para todas las edades y gustos, desde literatura infantil hasta novelas gráficas para adultos. También contamos con una amplia variedad de títulos en diferentes idiomas, por lo que si estás buscando algo en particular, ¡es probable que lo encuentres aquí!
          </p>
          <img src={womanImg} alt="images" style={{ width: '500px', height: '300px' }} />
        </section>

        <section className='theerd-section'>
          <img src={fleaImg} alt="images" style={{ width: '500px', height: '300px' }} />
          <p>En nuestra tienda online también ofrecemos recomendaciones personalizadas basadas en tus preferencias de lectura y reseñas de otros clientes. Así podrás descubrir nuevos autores, géneros y títulos que se ajusten a tus gustos y necesidades.
          </p>
        </section>

        <section className='fourth-section'>
        
          <p>Finalmente, nos aseguramos de ofrecer un servicio al cliente excepcional. Realizamos envíos a todo el país y garantizamos que tus compras lleguen a tiempo y en perfectas condiciones. ¡Explora nuestra colección y encuentra tu próxima lectura favorita!
          </p>
          <img src={booksImg} alt="images" style={{ width: '500px', height: '300px' }} />
        </section>
      </div>
    </div>

  )
}

export default Home