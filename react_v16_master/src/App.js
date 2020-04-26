import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";

/**
 * 5. setting state null
 */

const MAX_PIZZA = 20;
const eatPizza = (state, props) => {
  const { pizzas } = state;
  if (pizzas < MAX_PIZZA) {
    return {
      pizzas: pizzas + 1,
    };
  } else {
    return null;
  }
};

class Controlled extends Component {
  state = {
    pizzas: 0,
  };
  render() {
    const { pizzas } = this.state;
    return (
      <button onClick={this._handleClick}>
        {`I have eaten ${pizzas} ${pizzas === 1 ? "pizza" : "pizzas"}`}
      </button>
    );
  }
  _handleClick = () => {
    this.setState(eatPizza);
  };
}

/**
 * 4. Higher Order Component
 */

const BoundaryHOC = (ProtectedComponent) =>
  class Boundary extends Component {
    state = {
      hasError: false,
    };
    componentDidCatch = (error, info) => {
      console.log(
        `HOC catched ${error} thie info i have is ${JSON.stringify(info)}`
      );
      this.setState({
        hasError: true,
      });
    };
    render() {
      const { hasError } = this.state;
      if (hasError) {
        return <ErrorCallBack />;
      } else {
        return <ProtectedComponent />;
      }
    }
  };

/**
 * 3. error boundaries
 */

class ErrorMaker extends Component {
  state = {
    friends: ["jisu", "flynn", "dal"],
  };
  componentDidMount() {
    setTimeout(
      this.setState({
        friends: undefined,
      }),
      2000
    );
  }
  render() {
    const { friends } = this.state;
    return friends.map((friend) => ` ${friends} `);
  }
}

const ErrorCallBack = () => "Sorry something went wrong.";

const Message = () => "just touched it!";

/**
 * 2. portal
 */

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("touchme"));
  }
}

/**
 * 1. Render() Return에 관한 기능
 */

class ReturnTypes extends Component {
  render() {
    return "string";
  }
}

const PErrorMaker = BoundaryHOC(ErrorMaker);

class App extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch = (error, info) => {
    console.log(
      `App catched ${error} thie info i have is ${JSON.stringify(info)}`
    );
    this.setState({
      hasError: true,
    });
  };

  render() {
    const { hasError } = this.state;
    return (
      <Fragment>
        <div className="App">
          <ReturnTypes />
          {hasError || true ? <ErrorCallBack /> : <ErrorMaker />}
          <br />
          <Portals />
          <PErrorMaker />
          <br />
          <Controlled />
        </div>
      </Fragment>
    );
  }
}

export default App;
