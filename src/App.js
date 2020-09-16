import React, { useState, useEffect } from 'react';

// componentes
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'

function App() {


  const [categoria, guardarCategoria] = useState('')
  const [noticias, guardarNoticias] = useState({})

  useEffect(() => {
    const consultarAPI = async () => {
      const apiKey = '18a1dcac7e37400f888221af6b98b3d2'
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${apiKey}`
      const respuesta = await fetch(url)
      const noticias = await respuesta.json()
      guardarNoticias(noticias.articles)      
    }
    consultarAPI()
  }, [categoria])

  return (
    <>
      <Header titulo='Buscador de Noticias' />
      <div className="container white">
          <Formulario guardarCategoria={guardarCategoria} />
          <ListadoNoticias noticias={noticias} />
      </div>
    </>
  );
}

export default App;
