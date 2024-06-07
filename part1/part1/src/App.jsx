const Hello = (props) => {
  console.log(props);
  return (
    <div>
      Hello {props.name}, you are {props.age} years old
    </div>
  );
};

// const App = () => {
//     const name = "Peter";
//     const age = 10;
//   return (
//     <>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </>
//   );
// };

// const App = () => {
//   const friends = [
//     { name: "Peter", age: 4 },
//     { name: "Maya", age: 10 },
//   ];
//   console.log(friends[0]);
//   console.log(friends[1]);

//   return (
//     <div>
//       <p>
//         {friends[0].name} {friends[0].age}
//       </p>
//       <p>
//         {friends[1].name} {friends[1].age}
//       </p>
//     </div>
//   );
// };

const App = () => {
  const friends = ["Peter", "Maya"];

  return (
    <div>
      <p>{friends}</p>
    </div>
  );
};

export default App;
