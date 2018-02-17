import React from "react";

const List = props => (
  <ul className="list-group">
    { 
      props.groceries.map(g => (
        <li key={g.id}>{g.name}</li>
      ))
    }
  </ul>
);

export default List;
