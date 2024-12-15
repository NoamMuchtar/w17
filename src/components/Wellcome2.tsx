import { FunctionComponent } from "react";

interface Wellcome2Props {
  isAdmin: boolean;
}

const Wellcome2: FunctionComponent<Wellcome2Props> = ({ isAdmin }) => {
  return (
    <>
      {isAdmin && (
        <>
          <h4>Hello admin from wellcome 2</h4>
          <button className="btn btn-danger">Go to admin panel</button>
        </>
      )}
    </>
  );
};

export default Wellcome2;
