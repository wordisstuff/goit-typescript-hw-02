import { useState } from "react";

import CSS from "./SearchBar.module.css";
import { Toaster } from "react-hot-toast";

const SearchBar = ({ setSearchBarQuery, isError }) => {
  const [value, setValue] = useState("");
  const [btnOff, setBtnOff] = useState(true);

  const handleChenge = ({ target }) => {
    setBtnOff(true);
    setValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnOff(false);
    setSearchBarQuery(value.trim());
  };

  return (
    <header className={CSS.header}>
      <form onSubmit={handleSubmit}>
        <input
          className={CSS.input}
          name="query"
          onChange={handleChenge}
          value={value}
          type="text"
          placeholder="Search..."
        />
        <Toaster />
        {btnOff && value !== "" && !isError && (
          <div className={CSS.btncontainer}>
            <button type="submit" className={CSS.slidebtn}>
              🔍
            </button>
          </div>
        )}
      </form>
    </header>
  );
};

export default SearchBar;
