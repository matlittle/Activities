import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component{ 
  state = {
    friends: friends
  }

  removeFriend = (id) => {
    this.setState( {
      friends: this.state.friends.filter(el => (
        el.id !== id
      ))
    });
  }

  render() {
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {this.state.friends.map(f => 
          <FriendCard 
            friend={f} 
            remove={this.removeFriend} 
            key={f.id}
          /> 
        )}

      </Wrapper>
    )
  }

}

export default App;
