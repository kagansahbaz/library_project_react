import React from "react";
import "../style/nav.scss";
import logo from "../images/library_logo.png";

function Nav({ categories, setSelectedCategory }) {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="library logo" />
        <h3>Library</h3>
      </div>
      <ul>
        <li onClick={() => setSelectedCategory()}>All Books</li>
        {categories.map((value) => (
          <li
            onClick={() => setSelectedCategory(value.categoryId)}
            key={value.categoryId}
          >
            {value.categoryName}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
