import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// function Hello(props) {
//   return <h1>{props.title}</h1>
// }

const Hello = (props) => <h3>{props.title}</h3>;

class Counter extends Component {
  state = { count: 1 };
  render() {
    return <span>{this.state.count}</span>;
  }
}

class Hola extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <h3>{this.props.defautlName}</h3>
      </div>
    );
  }
}

Hola.defaultProps = {
  title: "My default title",
  defautlName: "Felipe",
};

class Text extends Component {
  render() {
    const {
      isActive,
      ages,
      text,
      number,
      car,
      multiply,
      description,
    } = this.props;
    const info = isActive ? "Show info" : "Dont show info";
    const mappedAges = ages.map((age) => age * 2);
    return (
      <div>
        <p>{text}</p>
        <p>{number}</p>
        {description}
        <p>{info}</p>
        <p>{mappedAges.join(", ")}</p>
        <p>{car.marca}</p>
        <p>{multiply(5)}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Hello title="Component from function" />
        <Hola title="Component from class" />
        <Text
          text="My favourite number: "
          description={<p>My description</p>}
          number={22}
          car={{ marca: "Toyota", model: "Yaris" }}
          isActive={true}
          ages={[20, 30, 40]}
          multiply={(number) => number * 2}
        />
      </header>
    </div>
  );
}

export default App;
