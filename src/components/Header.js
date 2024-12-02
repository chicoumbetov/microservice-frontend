import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const {
    user,
    // profile,
    cart,
  } = useSelector((state) => state.userReducer);

  const {
    // id,
    token,
  } = user;

  // const { address, orders } = profile;

  const cartCount = () => {
    if (Array.isArray(cart)) {
      return cart.length;
    }
    return 0;
  };

  const loginProfile = () => {
    if (token) {
      return (
        <ul className="navbar-nav">
          <li
            className="nav-item"
            style={{ backgroundColor: "#97C885", width: 90, borderRadius: 50 }}
          >
            <Link to="/login" href="#" className="btn-lg nav-link text-white">
              <i className="fas fa-shopping-cart"></i>
              <span
                className="ml-3"
                style={{ fontSize: "1.1rem", fontWeight: "bold" }}
              >
                {cartCount()}
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="btn-lg nav-link text-white">
              <i className="fas fa-user"></i>
              <span className="ml-1"></span>
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" className="btn-lg nav-link text-warning">
              <i class="fas fa-shopping-cart"></i>
            </a>
          </li>
          <li class="nav-item">
            <Link to="/login" className="btn-lg nav-link text-white">
              <i class="fas fa-user"></i>
              <span className="ml-1">Login</span>
            </Link>
          </li>
        </ul>
      );
    }
  };

  return (
    <nav
      class="navbar navbar-expand-sm navbar-light border-bottom"
      style={{ backgroundColor: "#61AB4F" }}
    >
      <div class="container-fluid">
        <a href="#">
          <Link class="navbar-brand text-white" to="/">
            Online Shopping
          </Link>
        </a>
        <button
          class="navbar-toggler btn-lg"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <i
            class="fa fa-bars"
            aria-hidden="true"
            style={{ backgroundColor: "#4DA052", color: "#FFF" }}
          ></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav m-auto"></ul>
          {loginProfile()}
        </div>
      </div>
    </nav>
  );
};
