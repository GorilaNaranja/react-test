import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// function Hello(props) {
//   return <h1>{props.title}</h1>
// }

const Hello = (props) => <h3>{props.title}</h3>;

class Hola extends Component {
  render() {
    return <h3>{this.props.title}</h3>;
  }
}

class Text extends Component {
  render() {
    const { isActive, ages, text, number, car } = this.props;
    const info = isActive ? "Show info" : "Dont show info";
    const mappedAges = ages.map((age) => age * 2);
    return (
      <div>
        <p>{text}</p>
        <p>{number}</p>
        <p>{info}</p>
        <p>{mappedAges.join(", ")}</p>
        <p>{car.marca}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Component from function" />
        <Hola title="Component from class" />
        <Text
          car={{ marca: "Toyota", model: "Yaris" }}
          text="My favourite number: "
          number={22}
          isActive={true}
          ages={[20, 30, 40]}
        />
      </header>
    </div>
  );
}

export default App;
