import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RecentPosts from "./screens/RecentPosts";
import PostById from "./screens/PostById";
import NewPost from "./screens/NewPost";
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
        <Route path="/new" exact component={NewPost} />
        <Route path="/recent" exact component={RecentPosts} />
        <Route path="/:id" exact component={PostById} />
        <Route path="/" exact component={RecentPosts} />
      </Switch>
    </div>
  );
};

export default App;
