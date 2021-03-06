import logo from "../images/Logo_PolSl.png";
import styles from "./Navbar.module.css";
import { Modal } from "../modal/modal";
import useModal from "../modal/useModal";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
import React from "react";
import Toggle from "react-toggle";

const Navbar = () => {
  const [loginIsVisible, toggleLoginVisibility] = useModal();

  const [registerIsVisible, toggleRegisterVisibility] = useModal();

  const handleLogin = () => {
    toggleLoginVisibility();
  };

  const handleRegister = () => {
    toggleRegisterVisibility();
  };

  //const content = <React.Fragment>Hey, I'm a model.</React.Fragment>;

  return (
    <nav className="bg-gray-800 border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-00">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex items-center">
          <img src={logo} className={styles.logo} alt="Logo Polsl" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Informacja turystyczna
          </span>
        </a>
        <div className="flex md:order-2">
          <div className="flex space-x-4 ...">
            <button
              onClick={handleLogin}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              Zaloguj się
            </button>
            <Modal
              isShown={loginIsVisible}
              hide={handleLogin}
              headerText="Login"
              modalContent={<Login />}
            />

            <button
              onClick={handleRegister}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              Zarejestuj się
            </button>
            <Modal
              isShown={registerIsVisible}
              hide={handleRegister}
              headerText="Register"
              modalContent={<Register />}
            />
          </div>
          <button
            data-collapse-toggle="mobile-menu-4"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="mobile-menu-4"
            aria-expanded="false"
          >
            <span className="sr-only">Otwórz głowne menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-4"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 text-white"
                aria-current="page"
              >
                Strona główna
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                O nas
              </a>
            </li>
            <Link
              className="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              to="/blog"
            >
              Blog
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
