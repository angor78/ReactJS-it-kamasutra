import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {

  return (
    <header className={s.header}>
      <div className={s.title}>
        <img
          src="https://imgaz.staticbg.com/images/oaupload/banggood/images/87/68/23897b07-e8a1-4c00-a68f-d9f9adc27ac4.jpg"
          alt=""
        />
        NewSocialNet
      </div>
      <div className={s.loginBlock}>
        {props.isAuth?props.login:<NavLink to={"/login"}>LogIn</NavLink>}
      
      </div>
    </header>
  );
};

export default Header;
