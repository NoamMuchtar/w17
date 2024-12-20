import { FunctionComponent } from "react";

interface Wellcome3Props {
  isAdmin: boolean;
}

const Wellcome3: FunctionComponent<Wellcome3Props> = ({ isAdmin }) => {
  return (
    <>
      {isAdmin ? (
        <button className="btn btn-success">Edit product</button>
      ) : (
        <p>Wellcome back user</p>
      )}
    </>
  );
};


export default Wellcome3;
