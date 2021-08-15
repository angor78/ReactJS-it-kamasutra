import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
<<<<<<< HEAD
      <Header />
      <Navbar />
      <Profile />
=======
      <header className="header">
        <img
          alt="logo"
          src="https://www.pngjoy.com/pngs/275/5267454_audience-icon-facebook-audience-icon-hd-png-download.png"
        />
      </header>{" "}
      <nav className="nav">
        <div>
          <a href="#s">Profile</a>
        </div>
        <div>
          <a href="#s">Mesagges</a>
        </div>
        <div>
          <a href="#s">News</a>
        </div>
        <div>
          <a href="#s">Music</a>
        </div>
        <div>
          <a href="#s">Setings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img
            alt="content"
            src="https://pbs.twimg.com/profile_banners/2882905954/1416337076/1500x500"
          />
        </div>
        <div>
          ava + description
          <img
            width="300"
            alt="avatar"
            src="https://yt3.ggpht.com/a/AGF-l7-hPMNZV0jJsCFwwC4W6QUiN8bwykm_jTFX5w=s900-c-k-c0xffffffff-no-rj-mo"
          />
        </div>
        <div>
          My posts
          <div>New post</div>
          <div></div>
        </div>
      </div>
>>>>>>> 50d3ee042c5a68620413a1b03e1cd81dfbb6a8db
    </div>
  );
};

export default App;