import React from "react";
import "./App.css";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveUser,
  setUserLogOutState,
  selectUserName,
  selectUserEmail,
} from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  const handleSignInWithGoogle = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(
        setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email,
        })
      );
    });
  };

  const handleSignOutWithGoogle = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogOutState());
      })
      .catch((err) => alert(err.message));
  };

  const handleSignInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      dispatch(
        setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email,
        })
      );
    });
  };

  const handleSignOutWithFacebook = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogOutState());
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="googleBtn">
          {userName ? (
            <button
              style={{ background: "grey", color: "white" }}
              onClick={handleSignOutWithGoogle}
            >
              Sign out
            </button>
          ) : (
            <button
              style={{ background: "red", color: "white" }}
              onClick={handleSignInWithGoogle}
            >
              Sign in (Google)
            </button>
          )}
        </div>
        <div className="facebookBtn">
          {userName ? (
            <div> </div>
          ) : (
            <button
              style={{ background: "blue", color: "white" }}
              onClick={handleSignInWithFacebook}
            >
              Sign in with Facebook
            </button>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
