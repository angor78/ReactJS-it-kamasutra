import React from "react";
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
  let friendsItems = props.state.friends.map((f) => (
    <Friends name={f.name} id={f.id} />
  ));
  return(
       <div>
           <div><h3>Friends</h3></div>
           {friendsItems}
           </div>);
};

export default Sidebar