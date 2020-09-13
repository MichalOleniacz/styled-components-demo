import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import RecentPosts from "./screens/RecentPosts/RecentPosts";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar
        height={"10vh"}
        width={"100%"}
        flex={["row", "center", "flex-end"]}
      />
      <Switch>
        <Route path="/new" exact component={RecentPosts} />
        <Route path="/recent" exact component={RecentPosts} />
        <Route path="/" exact component={RecentPosts} />
      </Switch>
    </div>
  );
};

export default App;
