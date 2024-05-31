import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

import logo from "../imgs/logo.png";
import profile from "../imgs/profile.jpg";

import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/redux/userSlice";
import useAuthState from "../utils/hooks/useAuthState";
import { useNavigate } from "react-router-dom";

const Header = ({ GptPage }) => {
  useAuthState(GptPage);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        // nav("/");
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
  };

  return (
    // bg-gradient-to-r from-black
    <div className="absolute w-full text-white py-1 px-0 sm:px-4 z-[80]">
      <div className="flex flex-col sm:flex-row md:flex-row w-11/12 items-center justify-between m-auto py-2">
        <div className="logo">
          <img className="py-2" src={logo} alt="Netflix Logo" width={110} />
        </div>
        <div className="info flex justify-between mt-4 sm:mt-0 w-full sm:w-auto">
          {GptPage ? (
            <button
              onClick={() => navigate("/browse")}
              className="text-[#f6f6f6] text-sm sm:text-base sm:font-semibold bg-purple-700 rounded-md mr-0 sm:mr-5 px-3 sm:px-4 py-1 sm:py-0 hover:bg-opacity-90"
            >
              <i className="bi bi-house-door-fill pr-1"></i>Home
            </button>
          ) : (
            <button
              onClick={() => navigate("/gpt-search")}
              className="text-[#f6f6f6] text-sm sm:text-base sm:font-semibold bg-purple-700 rounded-md mr-5 px-3 sm:px-4 py-1 sm:py-0 hover:bg-opacity-90"
            >
              <i className="bi bi-stars pr-1"></i>GPT Search
            </button>
          )}

          <img
            title={user?.name}
            className="hidden sm:block rounded-sm cursor-pointer"
            src={profile}
            alt="user profile"
            width={28}
          />
          <button
            className="mx-1 md:px-2 px-2 sm:mx-4 bg-black rounded-lg sm:px-1 text-sm"
            onClick={handleLogout}
            title="Logout"
          >
            <i className="bi bi-box-arrow-right mr-1"></i>Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
