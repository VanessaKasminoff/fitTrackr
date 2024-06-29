import React from "react";
// import "./TogglePanel.css"; // Assuming you have a separate CSS file

const TogglePanel = ({ type, onClick }) => {
  let headerText, paragraphText, buttonText;

  if (type === 'left') {
    headerText = 'Welcome Back!';
    paragraphText = 'Enter your personal details to use all of site features';
    buttonText = 'Sign In';
  } else {
    headerText = 'Hello, Friend!';
    paragraphText = 'Register with your personal details to use all of site features';
    buttonText = 'Sign Up';
  }

  return (
    <div className={`toggle-panel toggle-${type}`} onClick={onClick}>
      <h1>{headerText}</h1>
      <p>{paragraphText}</p>
      <button className="hidden">{buttonText}</button>
    </div>
  );
};

export default TogglePanel;