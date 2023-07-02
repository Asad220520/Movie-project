import React, { useState } from "react";
import { Link } from "react-router-dom";
function Footer() {
  const [state, setState] = useState(0);
  const [text, setText] = useState(false);
  const bio =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste culpa incidunt optio commodi. Corrupti officia doloremque cum excepturi. Consequatur harum facilis dolor minus! Illum, eaque iure pariatur praesentium unde corporis.";
    const [coun, setCoun] = useState(0)

    
  return (
    <div id="footer">
      <button
        onClick={() => {
          setState((pref) => pref + 1);
        }}
      >
        +
      </button>
      <p>{state}</p>
      <button onClick={() => setState(state === 0 ? state : state - 1)}>
        -
      </button>
      <p>
        {text ? bio : bio.slice(0, 10)}
        <span
          onClick={() => {
            setText(!text);
          }}
        >
          {text ? "back" : "...more"}
        </span>
      </p>
      <div id="header">
        <div className="container">
          <div className="header">
            <nav className="nav">
              <ul className="menu">
                <li className="menu__item">
                  <Link className="menu__link"></Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
