import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { useState, useEffect } from "react";
import axios from "axios";
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

   useEffect(() => {
     personService.getAll()
       .then(response => {
         setPersons(response.data)
       })
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

    personService.create(personObject).then(response => {
          setPersons(persons.concat(response.data));
          setNewName("");
          setNewNumber("");
    })
    
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
