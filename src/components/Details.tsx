import { FunctionComponent } from "react";

interface DetailsProps {}

const Details: FunctionComponent<DetailsProps> = () => {
  //   function handleInput(newInput: string) {
  //     console.log(newInput);
  //   }

  const handleInput = (newValue: string) => console.log(newValue);

  return (
    <>
      <label htmlFor="userName">Enter user name:</label>
      <input
        type="text"
        id="userName"
        onChange={(e) => handleInput(e.target.value)}
      />
    </>
  );
};

export default Details;
