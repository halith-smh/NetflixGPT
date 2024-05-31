import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase";
import { addUser, removeUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



const useAuthState = (GptPage) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            name: user.displayName,
          })
        );
        GptPage ? navigate('/gpt-search'): navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
};

export default useAuthState;
