import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

/* import SpongeBobCard from "./components/SpongeBobCard";
import SquidwardCard from "./components/SquidwardCard";
import MrKrabsCard from "./components/MrKrabsCard"; */

import FriendCard from './components/FriendCard';
import friends from "./friends.json";

const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    <FriendCard friend={friends[0]} />
    <FriendCard friend={friends[1]} />
    <FriendCard friend={friends[2]} />
  </Wrapper>
);

export default App;
