import { FunctionComponent } from "react";

interface Wellcome1Props {
  isAdmin: boolean;
}

const Wellcome1: FunctionComponent<Wellcome1Props> = ({ isAdmin }) => {
  if (isAdmin) {
    return (
      <>
        <h4>Hello Admin</h4>
        <button className="btn btn-primary">Admin Panel</button>
      </>
    );
  }
  return (
    <>
      <h4>Hello User</h4>
      <button className="btn btn-warning">Products catalog</button>
    </>
  );
};

export default Wellcome1;
