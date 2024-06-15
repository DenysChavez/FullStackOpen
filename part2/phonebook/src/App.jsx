import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newPerson, setNewPerson] = useState("");

  const addNames = (event) => {
    event.preventDefault();
    const personObject = {
      name: newPerson
    }

    setPersons(persons.concat(personObject))
    setNewPerson("")
    
  }

  const handlePersonChange = (event) => {
    setNewPerson(event.target.value);

  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNames}>
        <div>
          name:
          <input value={newPerson} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>{person.name}</div>
      ))}
    </div>
  );
};

export default App;
