import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface NotFoundProps {}

const NotFound: FunctionComponent<NotFoundProps> = () => {
  let navigate = useNavigate();
  return (
    <>
      <h2 className="display-2">Page Not Found - 404</h2>
      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        Go back
      </button>
      <button className="btn btn-warning" onClick={() => navigate("/")}>
        Go Home
      </button>
    </>
  );
};

export default NotFound;
