import { useEffect, useState } from 'react';
import './App.css'
import Tarjeta from './componentes/Tarjeta';

const DEF_TARJETA = <Tarjeta
  key={"def key"}
  name="def nombre"
  weight="def peso"
  base_experience="exp base"
/>
function App() {

  const [listaPokemon, setListaPokemon] = useState([DEF_TARJETA]);

  useEffect(() => {
    console.log("Effect");


    async function pedirPokemon() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20");
      let listaPokemon = "def 0";
      let tempComponentTarjeta = []
      if (res.ok)
        listaPokemon = await res.json();
      console.log(listaPokemon)
      let tempPoke = "def pokemon"
      listaPokemon.results.forEach(async (pokemon, i , vect) => {
        tempPoke = await fetch(pokemon.url)
        tempPoke = await tempPoke.json();
        const resPoke = await fetch(pokemon.url)

/*         const infoPoke = await resPoke.json(); */
        console.log(infoPoke)
        tempComponentTarjeta.push(
          <Tarjeta
            key={tempPoke.id}
            name={tempPoke.name}
            weight={tempPoke.weight}
            base_experience={tempPoke.base_experience}
          />
        )
          if (i == vec.length-1){
            setListaPokemon (tempComponentTarjeta)
          }

      });
      setListaPokemon(tempComponentTarjeta);
    }

    pedirPokemon()

    return () => {
      console.log("limpiando efecto")
    }
  }, []);


  return (
    <>
 {listaPokemon}
    </>
  )
}

export default App
