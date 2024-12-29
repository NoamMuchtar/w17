import { FormEvent, FunctionComponent, useState } from "react";

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let handleRegister = (e: FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };
  return (
    <div className="container w-50">
      <h2 className="display-4">Register</h2>
      <form className="text-center" onSubmit={handleRegister}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            autoComplete="off"
            id="email"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Password</label>
        </div>

        <button className="btn btn-success" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
