import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LanguageContext } from "../../context";

function Header() {
  const [value, setValue] = useState("");
  const { language } = useContext(LanguageContext);
  const { setLanguage } = useContext(LanguageContext);
  const nav = useNavigate();
  const getValue = (e) => {
    setValue(e.target.value);
  };
  const input = () => {
    if (value.trim() === "") {
      return null;
    } else {
      nav(`/movie/search/${value}`);
    }
  };
  console.log(language);
  
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <nav className="header__nav">
            <Link to={"/"} className="header__logo">
              Logo
            </Link>
            <ul className="header__menu">
              <li className="header__item">
                <NavLink to={"/"} className="header__link">
                  Home
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink to={"/Popular"} className="header__link">
                  Popular
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink to={"/TopRated"} className="header__link">
                  TopRate
                </NavLink>
              </li>
            </ul>
          </nav>
          <div class="header__btn">
            <input type="text" onChange={getValue} />
            <button onClick={input}>search</button>
          </div>
          <select onChange={(e) => setLanguage(e.target.value)}>
            <option value="en-US">English</option>
            <option value="ru-RU">Русский</option>
            <option value="fr-FR">France</option>
          </select>
          <div className="header__login">
            <Link to={"/Login"}>
              <button>sign up</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

// https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}
