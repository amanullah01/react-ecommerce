import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/hompage.component";

const HatsPage = props => {
  console.log(props);
  return (
    <div>
      <h1>This is Hats page</h1>
    </div>
  );
};

const TopicsList = () => {
  return (
    <div>
      <h1>This is TopicsList page</h1>
    </div>
  );
};
const TopicDetail = props => {
  console.log(props);
  return (
    <div>
      <h1>This is details of # {props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/topics" component={TopicsList} />
        <Route path="/topics/:topicId" component={TopicDetail} />
      </Switch>
    </div>
  );
}

export default App;
