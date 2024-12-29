import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { getAllUsers, getUserById } from "../services/userService";

interface UserDetailsProps {}

const UserDetails: FunctionComponent<UserDetailsProps> = () => {
  let { id }: any = useParams();
  let [user, setUser] = useState<any>([]);
  let [users, setUsers] = useState<any>([]);

  useEffect(() => {
    getUserById(id)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));

    getAllUsers()
      .then((res) => setUsers(res.data))
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
