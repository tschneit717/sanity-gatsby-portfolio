import styled from "styled-components";

export const ButtonStyles = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 101;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    div {
      position: relative;
      height: 30px;
      width: 30px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
    }
    .bar {
      width: 30px;
      min-height: 3px;
      background-color: black;
      display: block;
      transition: transform 0.2s ease-in-out;
    }
    &.dark .bar {
      background-color: white;
    }
    &.active {
      color: black;
      .bar {
        display: none;
        &:first-child {
          transform: rotate(45deg) translate3D(5px, 5px, 0);
        }
        &:last-child {
          transform: rotate(-45deg) translate3D(5px, -5px, 0);
        }
        &:first-child,
        &:last-child {
          display: block;
        }
      }
    }
  }
`;

export const NavStyles = styled.nav`
  position: fixed;
  top: 0;
  width: 200px;
  height: 100%;
  background: #1d2d50;
  left: -200px;
  z-index: 100;
  transition: left 0.2s ease-in-out;

  div {
    display: flex;
    flex-direction: column;
    padding-top: 100px;
  }
  a {
    text-decoration: none;
    color: white;
    margin: 8px 0;
  }
  &.active {
    left: 0;
  }
  @media (min-width: 769px) {
    left: 0%;
    width: 100%;
    height: auto;
    div {
      flex-direction: row;
      width: 90%;
      padding: 0;
      margin: 0 auto;
    }
    a {
      padding: 6px 12px;
      color: white;
      text-decoration: none;
      position: relative;
      &:after {
        content: "";
        width: 0%;
        height: 2px;
        background: white;
        position: absolute;
        left: 12px;
        bottom: 5px;
        transition: width 0.25s ease-in-out;
      }
      &:first-child {
        padding-left: 0;
        &:after {
          left: 0;
        }
      }
      &:hover {
        &:after {
          width: calc(100% - 24px);
        }
        &:first-child {
          &:after {
            width: calc(100% - 12px);
          }
        }
      }
      &.contact-button {
        border-radius: 20px;
        border: 2px solid white;
        margin-left: auto;
        transition: 0.2s background ease-in-out;
        background: #ffffff00;
        &:after {
          content: none;
        }
        &:hover {
          background: #ffffffff;
          color: black;
        }
      }
    }
  }
`;
