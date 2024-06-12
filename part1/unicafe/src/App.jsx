import { useState } from "react";

const Title = ({ text }) => (<h2>{text}</h2>);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  return (
    <div>
      <Title text={"Give Feedback"} />
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      <Title text={"Statistics"} />
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {good + neutral + bad}</p>
      <p>Average {total / 3}</p>
      <p>Positive {(good / total) * 100} </p>
    </div>
  );
};

export default App;
