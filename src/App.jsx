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
      const tempComponentTarjeta = []
      if (res.ok)
        listaPokemon = await res.json();
      console.log(listaPokemon)
      listaPokemon.results.forEach(async pokemon => {
        
        const resPoke = await fetch(pokemon.url)

        const infoPoke = await resPoke.json();
        console.log(infoPoke)
        tempComponentTarjeta.push(
          <Tarjeta
            key={infoPoke.id}
            name={infoPoke.name}
            weight={infoPoke.weight}
            base_experience={infoPoke.base_experience}
          />
        )


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
