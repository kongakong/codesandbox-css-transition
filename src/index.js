import React from "react";
import ReactDOM from "react-dom";
import mobx, { observable, action, decorate } from "mobx";
import { observer } from "mobx-react";

import "./styles.css";

const Main = observer(
  class Main extends React.Component {
    // @observable internalState = false;
    constructor(props) {
      super(props);
      this.internalState = false;
    }

    toggleMenu = () => {
      console.log("Toggle button");
      this.internalState = !this.internalState;
    };

    render() {
      return (
        <div className="App">
          <h1>Toggle State</h1>
          <input type="button" onClick={this.toggleMenu} value="Toggle" />
          <div style={{ paddingTop: "25px" }}>
            internalState {this.internalState.toString()}{" "}
          </div>
        </div>
      );
    }
  }
);

decorate(Main, {
  internalState: observable,
  toggleMenu: action
});

function App() {
  return <Main />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
