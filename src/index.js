import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Profile = props => {
  const [profileState, setProfileState] = useState(props);

  useEffect(() => {
    setProfileState(props);
  }, [props]);

  return (
    <div>
      <p>
        <strong>Name: </strong>
        {profileState.name}
      </p>
      <p>
        <strong>Email: </strong>
        {profileState.email}
      </p>
    </div>
  );
};

const App = () => {
  const [state, setState] = useState({
    name: "Param",
    email: "param@gmail.com"
  });

  const handleChange = () => {
    setState({
      name: "Vennila",
      email: "vennila@gmail.com"
    });
  };

  return (
    <div className="App">
      <Profile {...state} />
      <button onClick={handleChange}>Change Profile</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
