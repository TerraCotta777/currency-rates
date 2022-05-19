import "./Nav.css";
import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-nav">
        <div className="container">
          <nav>
            <ul>
              <li>
                <a href="#">Главная</a>
              </li>
              <li>
                <a href="#">Пункты обмена</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
