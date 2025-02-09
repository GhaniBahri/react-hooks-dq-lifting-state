// import React, { useState } from "react";
import Menu from "./Menu";

function Header({darkMode, setDarkMode}) {
  // const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu mode={darkMode} setDarkMode={setDarkMode}/>
      </div>
    </div>
  );
}

export default Header;
