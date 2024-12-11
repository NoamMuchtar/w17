import { FunctionComponent } from "react";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const sayHello = () => {
    console.log("Hello user");
  };

  const sayHolla = (username: string) => {
    console.log("Holla " + username);
  };
  return (
    <>
      <h1>Home page</h1>
      <button className="btn btn-primary" onClick={sayHello}>
        Say Hello
      </button>
      <button
        className="btn btn-warning"
        onClick={() => {
          sayHolla("David");
        }}
      >
        Say Holla
      </button>
    </>
  );
};

export default Home;
