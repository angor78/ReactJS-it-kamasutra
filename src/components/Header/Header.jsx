import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.title}>
        <img
          src="https://imgaz.staticbg.com/images/oaupload/banggood/images/87/68/23897b07-e8a1-4c00-a68f-d9f9adc27ac4.jpg"
          alt=""
        />
        NewSocialNet
      </div>
    </header>
  );
};

export default Header;
