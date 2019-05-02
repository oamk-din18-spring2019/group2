// Import all the stuff we need
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import the components
import StartingPage from "./components/StartingPage/StartingPage";
import SignInPage from "./components/SignUpPage/SignUpPage";

import Preloader from "./components/Preloader/Preloader";
import LogInPage from "./components/LogInPage/LogInPage";
import GameSelect from "./components/GameSelect/GameSelect";
import Classic from "./components/Game/ClassicGame/Game";
import Spree from "./components/Game/SpreeGame/Game";
import Infinite from "./components/Game/InfiniteGame/Game";
import GameFinished from "./components/Game/ClassicGame/GameFinished";
import Error from "./components/Error/Error";
import ClassicMode from "./components/Modes/ClassicMode/ClassicMode";
import SpreeMode from "./components/Modes/SpreeMode/SpreeMode";
import InfiniteMode from "./components/Modes/InfiniteMode/InfiniteMode";
import "./main.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return <Preloader />;
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={StartingPage} exact />
          <Route path="/login" component={LogInPage} exact />
          <Route path="/signup" component={SignInPage} exact />
          <Route path="/gameselect" component={GameSelect} exact />
          <Route path="/classic" component={ClassicMode} exact />
          <Route path="/spree" component={SpreeMode} exact />
          <Route path="/infinite" component={InfiniteMode} exact />
          <Route path="/classic/game" component={Classic} exact />
          <Route path="/spree/game" component={Spree} exact />
          <Route path="/infinite/game" component={Infinite} exact />
          <Route path="/gamefinished" component={GameFinished} exact />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
