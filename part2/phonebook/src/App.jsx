import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { useState, useEffect } from "react";
import axios from "axios";
import personService from './services/persons'
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [info, setInfo] = useState({message: null})

   useEffect(() => {
     personService.getAll()
       .then(response => {
         setPersons(response.data)
       })
   }, []);
  
  const messageNotification = (message, type = 'info') => {
    setInfo({ message, type })

  }
  
  const cleanForm = () => {
      setNewName("");
      setNewNumber("");
  };
  
  const updatePerson = (person) => {
    const confirm = window.confirm(
      `${person.name} is already added to phonebook, replace the old number with a new one?`
    )
    if (confirm) {
      personService.update(person.id, { ...person, number: newNumber })
        .then((updatedPerson) => {
          setPersons(
            persons.map((p) => (p.id !== person.id ? p : updatedPerson))
          );
        })
        .catch((error) => {
          console.log(error);
        })
           cleanForm();
    }
  }

  const addPerson = (event) => {
    event.preventDefault();
    const person = persons.find(p => p.name === newName);
    
    if (person) {
      updatePerson(person)
      return
    } 

    const personObject = {
      name: newName,
      number: newNumber
    }

    personService.create(personObject).then(createdPerson => {
      setPersons(persons.concat(createdPerson));
      setNewName("");
      setNewNumber("");

      messageNotification(`${createdPerson.name} added!`);
      

    })
    
  }

  const byFilterField = p => p.name.toLowerCase().includes(filter.toLowerCase());

  const personsToShow = filter ? persons.filter(byFilterField) : persons

  const toggleDelete = (person) => {
    const confirm = window.confirm(`remove ${person.name} from phonebook?`)
    if (confirm) {
      personService.remove(person.id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== person.id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification info={info} />
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
      <Persons persons={personsToShow} toggleDelete={toggleDelete} />
    </div>
  );
};

export default App;
