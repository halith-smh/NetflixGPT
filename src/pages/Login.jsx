import { useRef, useState } from "react";
import logo from "../imgs/logo.png";
import { formValidateLogin } from "../utils/formValidate";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/redux/userSlice";
import useAuthState from "../utils/hooks/useAuthState";
import { SetLoginLoader } from "../utils/redux/globalSlice";
import { GUEST_ID } from "../utils/constants";

const Login = () => {
  useAuthState();

  const LoaderStatus = useSelector((store) => store.global.loginLoader);

  const dispatch = useDispatch();
  const [flagSignIn, setFlagSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleBtnClick = () => {
    setFlagSignIn(!flagSignIn);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleFormSubmit = () => {
    const message = formValidateLogin(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!flagSignIn) {
      // Sign Up
      dispatch(SetLoginLoader());
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          // const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              // ...
              const userInfo = auth.currentUser;
              dispatch(
                addUser({
                  uid: userInfo.uid,
                  email: userInfo.email,
                  name: userInfo.displayName,
                })
              );
              dispatch(SetLoginLoader());
            })
            .catch((error) => {
              // An error occurred
              // ...
              dispatch(SetLoginLoader());
              setErrorMessage(error.message);
              console.error(error);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          dispatch(SetLoginLoader());
          setErrorMessage(errorCode + " - " + errorMessage);
          console.error(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      //SignIn Method
      dispatch(SetLoginLoader());

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          dispatch(
            addUser({
              uid: user.uid,
              email: user.email,
              name: user.displayName,
            })
          );
          dispatch(SetLoginLoader());
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          dispatch(SetLoginLoader());

          setErrorMessage(errorCode + " - " + errorMessage);
          console.error(errorCode + " - " + errorMessage);
        });
    }
  };

  const handleGuestLogin = () => {
    document.querySelector("#email").value = GUEST_ID.email;
    document.querySelector("#password").value = GUEST_ID.password;
    handleFormSubmit();
  };

  return (
    <div className="relative bg-hero-pattern h-screen">
      <div className="absolute inset-0  bg-black h-screen opacity-45"></div>
      <header className="absolute  w-[100%] sm">
        <div className="logo py-8 px-4 md:px-12  mx-auto  sm:mx-1 md:mx-10">
          <img
            className="m-auto sm:m-0"
            src={logo}
            alt="Netflix Logo"
            width={180}
          />
        </div>
      </header>
      <form
        id="loginForm"
        onSubmit={(e) => e.preventDefault()}
        className="p-8 sm:p-16 rounded-md absolute top-[20%] left-1/2 transform  -translate-x-1/2 w-11/12 sm:w-[70%] md:w-4/12 bg-black bg-opacity-80"
      >
        <h1 className="text-white text-4xl pb-8 font-bold">
          {flagSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!flagSignIn && (
          <input
            ref={name}
            type="text"
            className="w-full rounded-md text-white mb-4 text-md p-3 bg-gray-700 focus:outline-none focus:ring focus:ring-white"
            placeholder="Full name"
          />
        )}
        <input
          ref={email}
          type="email"
          id="email"
          className="w-full rounded-md text-white mb-4 text-md p-3 bg-gray-700 focus:outline-none focus:ring focus:ring-white"
          placeholder="Email"
        />
        <input
          ref={password}
          type="password"
          id="password"
          className="w-full mt-2 text-white rounded-md mb-4 text-md p-3 bg-gray-700 focus:outline-none focus:ring focus:ring-white"
          placeholder="Password"
        />

        {errorMessage && (
          <span className="font-bold mb-2 text-red-500">{errorMessage}</span>
        )}

        <button
          onClick={handleFormSubmit}
          className="w-full bg-red-600 py-2 rounded-md text-white text-center"
        >
          {flagSignIn ? "Sign In" : "Sign Up"}
        </button>
        <h2 className="text-white py-5">
          {flagSignIn ? "New to Netflix?" : "Already Registered?"} &nbsp;
          <span
            onClick={handleBtnClick}
            className="font-bold underline cursor-pointer"
          >
            {flagSignIn ? "Sign up now." : "Sign in"}
          </span>
        </h2>
        {flagSignIn && (
          <div className="m-auto text-center">
            <button
              type="button"
              title="No username or password required" 
              onClick={handleGuestLogin}
              className="bg-red-600 py-2 px-4 rounded-md text-white text-center m-auto"
            >
              <i className="bi bi-person-circle mr-2"></i>Guest Login
            </button>
          </div>
        )}
        {LoaderStatus && <div className="loader text-center m-auto"></div>}
      </form>
    </div>
  );
};

export default Login;
