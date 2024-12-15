import "./App.css";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Wellcome1 from "./components/Wellcome1";
import Wellcome2 from "./components/Wellcome2";
import Wellcome3 from "./components/Wellcome3";

function App() {
  let myName: string = "Webify";
  let seriesImageUrl: string =
    "https://image.tmdb.org/t/p/original/u2ekcvwO0AdSwUxFFhnLd9SV4Rh.jpg";
  let num: number = 10;
  return (
    <>
      <Wellcome1 isAdmin={false} />
      <Wellcome2 isAdmin={false} />
      <Wellcome3 isAdmin={false} />
      <Navbar />
      <Home />
      <p style={{ backgroundColor: "green", color: "#fff" }}>{myName}</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus
        similique cum vero. Exercitationem repellat aliquam delectus, veritatis
        magni asperiores harum officiis fugit eligendi rem praesentium modi ad,
        nobis, eos sequi?
      </p>
      <img className="my-image" src={seriesImageUrl} alt="סנגור במבחן" />
      <p>Clac 10 + 5 = {num + 5}</p>
      <p>{Math.floor(Math.random() * 100)}</p>
      <Details />
      <Products />
      <Footer devName={myName} />
    </>
  );
}

export default App;
