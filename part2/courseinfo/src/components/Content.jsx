import Part from "./Part"
import Total from "./Total";

const Content = ({ parts }) => {
  return (
    <>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
      <Total parts={parts}/>
    </>
  );
}

export default Content