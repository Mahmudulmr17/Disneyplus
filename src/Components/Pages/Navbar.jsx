import React, { useState } from "react";
import styled from "styled-components";
import logo from "../Images/logo.svg";
import { NavLink } from "react-router-dom";
import homeIcon from "../Images/home-icon.png";
import searchIcon from "../Images/search-icon.svg";
// import watchlist from "../Images/watchlist-icon.svg";
import original from "../Images/original-icon.svg";
import movie from "../Images/movie-icon.svg";
import seris from "../Images/series-icon.svg";
import admin from "../Images/Untitled-2.jpg";
import shutdown from "../Images/shutdown.png";
import explore from "../Images/explore.svg";
const Navbar = () => {
  const [Toggler, setToggler] = useState(false); //false

  const ifPopupOpen = () => setToggler(!Toggler); //true -> activeState
  return (
    <div>
      <Nav>
        <Navbrand>
          <NavLink to="/">
            <img src={logo} alt="disney+" />
          </NavLink>
        </Navbrand>
        <MenuLinks>
          <li>
            <NavLink to="/home" className="nav-links">
              <img style={{ width: "0.8rem" }} src={homeIcon} alt="" />{" "}
              <span>HOME</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="#" className="nav-links">
              <img src={searchIcon} alt="" /> <span>SEARCH</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="#" className="nav-links">
              <img src={original} alt="" /> <span>ORGINAL</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/movie" className="nav-links">
              <img src={movie} alt="" /> <span>MOVIES</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="nav-links">
              <img src={seris} alt="" /> <span>SERIES</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/explore" className="nav-links">
              <img src={explore} alt="" /> <span>EXPLORE</span>
            </NavLink>
          </li>
        </MenuLinks>
        <UserAuth>
          <img onClick={ifPopupOpen} src={admin} alt="admin/disney" />
        </UserAuth>

        <PopupMenu activeState={Toggler}>
          <li>
            <NavLink to="/home" className="nav-links">
              <img style={{ width: "0.8rem" }} src={homeIcon} alt="" />{" "}
              <span>HOME</span>
            </NavLink>
          </li>
          <li style={{ cursor: "pointer" }}>
            <NavLink to="/" className="nav-links">
              <img style={{ width: "0.8rem" }} src={shutdown} alt="" />{" "}
              <span>Sign Out</span>
            </NavLink>
          </li>
        </PopupMenu>
      </Nav>
    </div>
  );
};

const Nav = styled.nav`
  display: flex;
  min-height: 9vh;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 3rem;
`;
const Navbrand = styled.div`
  width: 100px;
  height: auto;
  object-position: center;

  img {
    width: 100%;
    height: auto;
    object-fit: fill;
  }
`;
const MenuLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: row wrap;
  flex-shrink: 0;
  margin-right: auto;
  margin-left: 3rem;
  @media (max-width: 991px) {
    display: none;
  }
  li {
    list-style: none;
    > .nav-links {
      &:hover {
        span::before {
          width: 100%;
        }
      }
      position: relative;
      display: flex;
      align-items: center;
      img {
        width: 1.3rem;
        height: 1.3rem;
        object-fit: contain;
      }

      span {
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 1px;
        line-height: 1.08;
        padding: 1rem;
        color: #f9f9f9;
        margin-top: 5px;
        position: relative;

        &:before {
          position: absolute;
          content: "";
          top: 100%;
          left: 0;
          right: 0;
          width: 0;
          height: 2px;
          background: #f9f9f9;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }
      }
    }
  }
`;
const UserAuth = styled.div`
  width: 50px;
  height: 50px;
  object-position: center;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 100px;
  }
`;

const PopupMenu = styled.div`
  z-index: 2000;
  position: absolute;
  top: 7vh;
  right: 4rem;
  background-color: #040714;
  border-radius: 0.345rem;
  border: 1.3px solid rgba(151, 151, 151, 1);
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 0.5rem 1rem;
  display: ${(event) => (event.activeState ? "flex" : "none")};
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  li {
    display: flex;
    border-bottom: 1.3px solid rgba(151, 151, 151, 1);
    width: 100%;
    align-items: flex-start;
    list-style: none;
    .nav-links {
      position: relative;
      display: flex;
      align-items: center;
      img {
        width: 1.3rem;
        height: 1.3rem;
        object-fit: contain;
      }

      span {
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 1px;
        line-height: 1.08;
        padding: 0.5rem;
        color: #f9f9f9;
        margin-top: 5px;
        position: relative;
      }
    }
  }
`;

export default Navbar;
