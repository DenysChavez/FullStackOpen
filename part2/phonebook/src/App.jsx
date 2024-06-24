import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

   useEffect(() => {
     axios.get("http://localhost:3001/persons").then((response) => {
       setPersons(response.data);
     });
   }, []);
  

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

    axios.post("http://localhost:3001/persons", personObject)
      .then(response => {
            console.log(response.data);
            setPersons(persons.concat(response.data));
            setNewName("");
            setNewNumber("");
      })

    setPersons(persons.concat(personObject))
    setNewName("")
    setNewNumber("")
    
  }

  const byFilterField = p => p.name.toLowerCase().includes(filter.toLowerCase());

  const personsToShow = filter ? persons.filter(byFilterField) : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add a New</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow}/>
    </div>
  );
};

export default App;
