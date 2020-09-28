import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoe: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/shoe")
      .then((res) => res.json())
      .then((data) => this.setState({ shoe: data }));
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.shoe.map((p) => {
            return (
              <div>
                <li>
                  <u>{p.brand_name}</u>
                </li>
                <p>{p.shoe_type}</p>
                <p>Made by: {p.manufacturer}</p>
                <p>Size: {p.size}</p>
                <p>Color: {p.color}</p>
                <p>Made from: {p.material}</p>
                <p>Closure: {p.fasten_type}</p> <br />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
