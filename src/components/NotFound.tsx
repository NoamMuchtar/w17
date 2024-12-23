import { FunctionComponent } from "react";

interface NotFoundProps {}

const NotFound: FunctionComponent<NotFoundProps> = () => {
  return <h2 className="display-2">Page Not Found - 404</h2>;
};

export default NotFound;
