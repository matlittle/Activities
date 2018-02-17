import React from "react";
import search from '../utils/search';

class Discover extends React.Component{

  state = {
    friends: 0,
    currentImage: ""
  }

  componentDidMount = () => {
    this.getNewImage();
  }

  getNewImage = () => {
    search.search()
      .then(res => {
        this.setState({ currentImage: res.message })
      })
      .catch(err => console.error(err) );
  }

  render() {
    return (
      <div>
        <h1>Discover Page</h1>
        <div className="row">
        <div className="col-xs-6 col-xs-offset-3">
          <img src={this.currentImage} alt="doggo"/>
        </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-4"><button>upvote</button></div>
          <div className="col-xs-2"><button>downvote</button></div>

        </div>
      </div>
    )
  };
}


export default Discover;
