import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Fragment } from "react";
import Particles from "react-particles-js";
// Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <Aboutme />
      <Experience />
      <Portfolio />
      <Footer />
    </Fragment>
  );
}

export default App;
