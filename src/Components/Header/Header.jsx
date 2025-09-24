import React from "react";
import styles from "./header.module.css";
import NetflixLogo from "../../assets/Netflix_Logo_RGB.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <div className={styles.header_outer_container}>
      <div className={styles.header_container}>
        <div className={styles.header_left}>
          <ul>
            <li className={styles.list_image}>
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browes By Languages</li>
          </ul>
        </div>

        <div className={styles.header_right}>
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
