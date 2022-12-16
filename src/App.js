import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const refresh = () => {
    setPeople(data);
  };
  const addWalter = () => {
    const walter = [
      {
        id: people.length + 1,
        name: "Walter White",
        age: 30,
        image:
          "https://cdnb.artstation.com/p/assets/images/images/014/997/389/large/abdelrahman-kubisi-front-hat.jpg?1546637268",
      },
    ];
    const newList = people.concat(walter);
    setPeople(newList);
    console.log(newList);
  };

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people}></List>
        <button onClick={() => setPeople([])}>clear all</button>
        <button onClick={refresh}>refresh</button>
        <button onClick={addWalter}>add walter</button>
      </section>
    </main>
  );
}

export default App;
