import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.internalState = false;
  }

  toggleMenu = () => {
    this.internalState = !this.internalState;
  };

  render() {
    return (
      <div className="App">
        <h1>Toggle State</h1>
        <input type="button" onClick={this.toggleMenu} value="Toggle" />
        <div style={{ paddingTop: "25px" }}>
          {" "}
          internalState {this.internalState.toString()}{" "}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
