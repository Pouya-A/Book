import "./assets/css/style.css";
import { ContextPortProvider } from "./context/context";
import SideBar from "./Components/SideBar";
import { Route, Switch } from "react-router";
import { motion } from "framer-motion";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";

import SinglePortfolio from "./Pages/SinglePortfolio";

const loaderAnimate = {
  animateOne: {
    x: [
      Math.floor(Math.random() * window.innerWidth),
      Math.floor(Math.random() * window.innerWidth),
    ],
    y: [
      Math.floor(Math.random() * window.innerWidth),
      Math.floor(Math.random() * window.innerWidth) * -1,
    ],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 20,
      },
      y: {
        yoyo: Infinity,
        duration: 10,
      },
    },
  },
};
const loaderAnimate2 = {
  animateOne: {
    x: [
      Math.floor(Math.random() * window.innerWidth),
      Math.floor(Math.random() * window.innerWidth),
    ],
    y: [
      Math.floor(Math.random() * window.innerWidth),
      Math.floor(Math.random() * window.innerWidth) * -1,
    ],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 20,
      },
      y: {
        yoyo: Infinity,
        duration: 10,
      },
    },
  },
};
const loaderAnimate3 = {
  animateOne: {
    x: [
      Math.floor(Math.random() * window.innerWidth),
      Math.floor(Math.random() * window.innerWidth),
    ],
    y: [
      Math.floor(Math.random() * window.innerWidth),
      Math.floor(Math.random() * window.innerWidth) * -1,
    ],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 20,
      },
      y: {
        yoyo: Infinity,
        duration: 10,
      },
    },
  },
};
const loaderAnimate4 = {
  animateOne: {
    x: [
      Math.floor(Math.random() * window.innerWidth),
      Math.floor(Math.random() * window.innerWidth),
    ],
    y: [
      Math.floor(Math.random() * window.innerWidth),
      Math.floor(Math.random() * window.innerWidth) * -1,
    ],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 20,
      },
      y: {
        yoyo: Infinity,
        duration: 10,
      },
    },
  },
};
function App() {
  return (
    <ContextPortProvider>
      <div className="App">
        <motion.div
          className="circle"
          variants={loaderAnimate}
          animate="animateOne"
        ></motion.div>
        <motion.div
          className="circle1"
          variants={loaderAnimate2}
          animate="animateOne"
        ></motion.div>
        <motion.div
          className="circle2"
          variants={loaderAnimate3}
          animate="animateOne"
        ></motion.div>
        <motion.div
          className="circle3"
          variants={loaderAnimate4}
          animate="animateOne"
        ></motion.div>

        <div className="glass-layer"></div>
        <div className="content">
          <div className="sidebar">
            <SideBar />
          </div>
          <div className="main-content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/portfolio" exact component={Portfolio} />
              <Route path="/portfolio/:id" exact component={SinglePortfolio} />
            </Switch>
          </div>
        </div>
      </div>
    </ContextPortProvider>
  );
}

export default App;
