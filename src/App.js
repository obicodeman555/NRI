import { useState, useEffect } from "react";
import Login from "pages/auth/login";
import ContentManagement from "./pages/contentManagement";

function App() {
  const [isLoggedIn, setIsLoggedin] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedin(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    //check email and password

    //store to local srorage
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedin(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedin(false);
  };
  return (
    <div className="App">
      {isLoggedIn && <ContentManagement onLogout={logoutHandler} />}
      {!isLoggedIn && <Login onLogin={loginHandler} />}
    </div>
  );
}

export default App;
