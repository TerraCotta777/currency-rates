import "./Header.css";
import React from "react";

import Nav from "../Nav/Nav";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="main-header">
          <div className="container">
            <h1 className="site-title">Курсы валют</h1>
          </div>
        </div>
				<Nav/>
      </header>
    );
  }
}

export default Header;
