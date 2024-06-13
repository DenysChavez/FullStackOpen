import React from 'react'

const Total = ({ parts }) => {
 
    const total = parts.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.exercises;
    }, 0)

  return (
    <>
      <p>Total of exercises {total}</p>
    </>
  );
};

export default Total