import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Link href="/">
        <Logo src="logo.svg" />
      </Link>

      <NavMenu>
        <Link href="/">
          <a>
            <img src="home-icon.svg" alt="" />
            <span>HOME</span>
          </a>
        </Link>

        <a>
          <img src="search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>

        <a>
          <img src="watchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </a>

        <a>
          <img src="original-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </a>

        <a>
          <img src="movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>

        <a>
          <img src="series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
      </NavMenu>

      <Link href="/login">
        <UserImg src="keita.JPG" />
      </Link>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
