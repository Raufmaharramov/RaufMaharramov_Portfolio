import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Fragment } from "react";
import Particles from "react-particles-js";
// Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";

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
    </Fragment>
  );
}

export default App;
