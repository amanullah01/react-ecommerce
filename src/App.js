import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/hompage.component";

const HatsPage = props => {
  console.log(props);
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/topics">Topic Lits</Link>
      <h1>This is Hats page</h1>
    </div>
  );
};

// const TopicsList = props => {
//   return (
//     <div>
//       <Link to="/">Home</Link>
//       <Link to="/topics/12">Topic Details</Link>
//       <Link to={`${props.match.url}/13`}>13 via match url</Link>
//       <Link to={`${props.match.url}/14`}>14 via match url</Link>
//       <Link to={`${props.match.url}/15`}>15 via match url</Link>
//       <button onClick={() => props.history.push("/topics/12")}>
//         Topics details via onclic button
//       </button>
//       <h1>This is TopicsList page</h1>
//     </div>
//   );
// };
// const TopicDetail = props => {
//   console.log(props);
//   return (
//     <div>
//       <Link to="/">Home</Link>
//       <Link to="/topics">Topic List</Link>
//       <h1>This is details of # {props.match.params.topicId}</h1>
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
        {/* <Route exact path="/topics" component={TopicsList} />
        <Route path="/topics/:topicId" component={TopicDetail} />
        <Route exact path="/blogs/topics" component={TopicsList} />
        <Route path="/blogs/topics/:topicId" component={TopicDetail} /> */}
      </Switch>
    </div>
  );
}

export default App;
