import React from "react";
//className="display-4">{props.match.params.id}
export default props => {
  return (
    <div>
      <h1 className="display-4">About Contact manager</h1>
      <p className="lead"> Simple App to manage Contacts</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
};
