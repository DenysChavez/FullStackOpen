import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const person = persons.find(p => p.name === newName);
    
    if (person) {
      alert(`${person.name} is already added to phonebook`);
      return
    } 

    const personObject = {
      name: newName
    }

    setPersons(persons.concat(personObject))
    setNewName("");
    
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value);

  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input value={newName} onChange={handlePersonChange} />
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
