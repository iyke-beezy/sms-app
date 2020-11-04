import React from "react";
// import { Link } from "react-router-dom";
import { FormButton } from "../Forms";
import "./styles.scss";

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo"></div>
        <div className="callToActions">
          <ul>
            <li>
              <FormButton>
                Login
              </FormButton>
            </li>
            <li>
                <FormButton>
                    Sign Up
                </FormButton>
              
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
