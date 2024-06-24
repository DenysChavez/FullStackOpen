import React from 'react'

const Persons = ({ persons, toggleDelete }) => {

  return (
    <>
      {persons.map((person) => (
        <div key={person.id}>
          <p>
            {person.name} {person.number}
          </p>
          <button onClick={() =>toggleDelete(person)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Persons;