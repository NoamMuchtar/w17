import { FunctionComponent, useEffect, useState } from "react";
interface DishRaitingProps {}

const DishRaiting: FunctionComponent<DishRaitingProps> = () => {
  let [raiting, setRaiting] = useState(0);
  useEffect(() => {
    console.log("Raiting Changed");
  }, [raiting]);
  return (
    <>
      <p>{raiting}</p>
      <button
        className="btn btn-success"
        onClick={() => {
          setRaiting(raiting + 1);
        }}
      >
        +
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          setRaiting(raiting - 1);
        }}
      >
        -
      </button>
    </>
  );
};

export default DishRaiting;
