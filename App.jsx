import { useEffect, useState } from 'react';
import './App.css'
import Tarjeta from './componentes/Tarjeta';

const DEF_TARJETA = <Tarjeta
  key={"def key"}
  name="def nombre"
  weight="def peso"
  base_experience="exp base"
/>;

function App() {

  const [listaPokemon, setListaPokemon] = useState([]);

  useEffect(() => {
    console.log("Effect");


    async function pedirPokemon() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20");

      if (res.ok) {
        const listaPokemon = await res.json();
        console.log(listaPokemon);

        const tempComponentTarjeta = [];

        listaPokemon.results.forEach(async (pokemon, i, vect) => {
          const tempPokeRes = await fetch(pokemon.url);
          const tempPoke = await tempPokeRes.json();

          tempComponentTarjeta.push(
            <Tarjeta
              key={tempPoke.id}
              name={tempPoke.name}
              weight={tempPoke.weight}
              base_experience={tempPoke.base_experience}
            />
          );

          if (i === vect.length - 1) {
            setListaPokemon(tempComponentTarjeta)
          }
        });
      }
    }

    pedirPokemon();

    return () => {
      console.log("limpiando efecto");
    }
  }, []);


  return (
    <>
      {listaPokemon}
    </>
  );
}

export default App;
