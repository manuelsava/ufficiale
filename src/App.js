import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const squadre = ["Alla Juve", "Alla Spal", "Alla Sampdoria", "Alla Salernitana", "Alla Grigliata", "Portami a Monza", "Al PSG", "Al Real Madrid", "Al Monza", "Al Pisa", "Al Manchester City", "Al Manchester United", "Al Napoli", "Al Foggia", "Al Benevento", "Al KG", "Alla Pizzeria del Centro", "Alla Locanda Martina", "Al Bayern Monaco", "Al Barcellona", "Al Sassuolo", "Al Genoa", "Alla Cremonese", "Al Vedano", "A Marveggia", "Al Milan", "All'Inter", "Al Catanzaro", "Al Messina", "Al Perugia", "Alla gara di Minimoto", "Al Piacenza", "Alle Befane", "All'en3", "Al Carosello", "Ai Tubi", "Ai Portici", "Al Q8", "Al Gigante", "Alla SPAL", "Al Beer Sheva", "Alla Roma", "Al Bar in Domi", "Al Tiki Taka", "All'Effemarket", "Al Liverpool", "Al Piemonte Calcio", "All'Atalanta", "Al Napoli", "Alla Reggina", "Al Palermo", "Al Catania", "Al Lecce", "All'Iperal", "Al Roadhouse", "In Russia", "Alla Apple", "Alla Piscina di Lissone", "All'u2", "Alla Pegaso", "A Mykonos", "Al Vergnano", "A Finale Ligure", "In Via", "Alla Decathlon", "Al Mondo Convenienza"];
  const nomi = ["Manu", "Andre", "Fede", "Comi", "Lillo", "Greta", "Angie", "Pess", "Simo", "Dina", "Fabritos", "Ema", "Margot", "Melissa Macrì", "Sam Sordi"];

  const [nome, setNome] = useState("");
  const [squadra, setSquadra] = useState("");

  useEffect(() => {
    generate();
  }, [])

  const generate = () => {
    console.log("gen");
    setNome(nomi[Math.floor(Math.random()*nomi.length)]);
    setSquadra(squadre[Math.floor(Math.random()*squadre.length)]);
  }

  return (
    <div className="App">
      <h1>Generatore di Ufficialità</h1>
      <h2>Ufficiale: {nome + " " + squadra + " AHAHAHAHAHAHA"}</h2>
      <button className='myButton' onClick={(e) => {e.preventDefault(); generate()}}>Genera</button>
    </div>
  );
}

export default App;
