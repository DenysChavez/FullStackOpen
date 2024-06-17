import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: '123-456789' }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("")

  const addPerson = (event) => {
    event.preventDefault();
    const person = persons.find(p => p.name === newName);
    
    if (person) {
      alert(`${person.name} is already added to phonebook`);
      return
    } 

    const personObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    setNewName("");
    setNewNumber("")
    
  }

  // const handlePersonChange = (event) => {
  //   setNewName(event.target.value);
  //   setNewNumber(event.target.value);

  // }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input
            value={newName}
            onChange={({ target }) => setNewName(target.value)}
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={({ target }) => setNewNumber(target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>{person.name} {person.number}</div>
      ))}
    </div>
  );
};

export default App;
