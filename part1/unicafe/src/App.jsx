import { useState } from "react";

const Title = ({ text }) => (<h2>{text}</h2>);

const Button = ({handleFuntion, text}) => {
  return (
    <button onClick={handleFuntion}>{ text }</button>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total / 3;
  const positive = (good / total) * 100;

  if (total === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <StatisticLine text={"Good"} value={good} />
      <StatisticLine text={"Neutral"} value={neutral} />
      <StatisticLine text={"Bad"} value={bad} />
      <StatisticLine text={"All"} value={total} />
      <StatisticLine text={"Average"} value={average} />
      <StatisticLine text={"Positive"} value={positive} />
    </>
  );

}

const StatisticLine = ({text, value}) => {
  
  return (
    <>
      <p>{text} {value}</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Title text={"Give Feedback"} />
      <Button handleFuntion={() => setGood(good + 1)} text={"Good"} />
      <Button handleFuntion={() => setNeutral(neutral + 1)} text={"Neutral"} />
      <Button handleFuntion={() => setBad(bad + 1)} text={"Bad"} />
      <Title text={"Statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
