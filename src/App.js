import './App.css';
import { useState } from 'react';
import AnimalShow from "./AnimalShow";

const getRandomAnimal = () => {
  const animals = ['bird', 'cat', 'cow' , 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
};

const App = () => {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const rederedAnimals = animals.map((animal, idx) => {
    return <AnimalShow type={animal} key={idx} />
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div class="animal-list">{rederedAnimals}</div>
    </div>
  );
}

export default App;