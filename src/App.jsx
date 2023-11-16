import { useEffect } from 'react';
import './App.css'
import Boton from './componentes/boton';

/* const API = "https://pokeapi.co/api/v2/pokemon/ditto";
 */
function App() {


  useEffect(() => {
    console.log("Effect");


    async function pedirPokemon() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20  ")
/* 
      .then(response => response.json())

        .then(data => console.log(data)) */
      let listaPokemon = "def 0"
      if (res.ok)

        listaPokemon = await res.json();
      console.log(listaPokemon)

      listaPokemon.results.forEach(async pokemon => {
        
        const resPoke = await fetch(pokemon.url)

        const infoPoke = await resPoke.json();
        console.log(infoPoke)
      });

    }

    pedirPokemon()

    return () => {
      console.log("limpiando efecto")
    }
  }, []);


  return (
    <>
      <Boton></Boton>
    </>
  )
}

export default App
