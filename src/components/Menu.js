import React from "react";

function Menu({mode, setDarkMode}) {
  const setDark =()=>{setDarkMode(!mode)}
  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="public"
          checked={mode}
          onChange={setDark}
        />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu;
