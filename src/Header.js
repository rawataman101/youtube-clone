import React, { useState } from "react";
import "./Header.css";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import Avatar from "@mui/material/Avatar";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo-768x480.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchSharpIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__right">
        <VideoCallSharpIcon />
        <AppsSharpIcon />
        <NotificationsSharpIcon />
        <Avatar className="header__avatar" alt="AR" src="" />
      </div>
    </div>
  );
}

export default Header;
