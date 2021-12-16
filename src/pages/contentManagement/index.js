import React from "react";

const Index = (props) => {
  return (
    <div>
      <h2>Content Management page</h2>
      <button onClick={props.onLogout}>Logout</button>
    </div>
  );
};

export default Index;
