import { FunctionComponent, useEffect, useState } from "react";

interface DetailsProps {}

const Details: FunctionComponent<DetailsProps> = () => {
  //   function handleInput(newInput: string) {
  //     console.log(newInput);
  //   }
  const handleInput = (newValue: string): void => {
    console.log(newValue);
    setName(newValue);
  };
  const [name, setName] = useState("");
  let counter: number = 1;

  useEffect(() => {
    console.log("Details component was redered!");
  });

  useEffect(() => {
    console.log("Details component was renderd first time");
  }, []);

  useEffect(() => {
    console.log("Name was changed");
  }, [name]);

  useEffect(() => {
    setName("new Name");
  }, [name]);

  return (
    <>
      <label htmlFor="userName">Enter user name:</label>
      <input
        type="text"
        id="userName"
        onChange={(e) => handleInput(e.target.value)}
      />
      <p>{name}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          counter = counter + 1;
          console.log(counter);
        }}
      >
        +
      </button>
    </>
  );
};

export default Details;
