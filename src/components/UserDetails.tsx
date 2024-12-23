import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

interface UserDetailsProps {}

const UserDetails: FunctionComponent<UserDetailsProps> = () => {
  let { id } = useParams();
  let [user, setUser] = useState<any>([]);
  let [users, setUsers] = useState<any>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((user) => setUser(user))
      .catch((err) => console.log(err));

    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {id <= users.length ? (
        <>
          <h2 className="display-2 my-3">User {user.id} Details</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default UserDetails;
