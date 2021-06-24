import "./App.css";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegistrationPage from "./RegistrationPage";
import ForgotPass from "./ForgotPass";
import { useState } from "react";
import DashBoard from "./DashBoard";
import useToken from "./useToken";

function App() {
  // const [token, setToken] = useState();
  const { token, setToken } = useToken();
  const [isLogout, setisLogout] = useState(true);

  if (!token) {
    return <Login setToken={setToken} setisLogout={setisLogout} />;
  }

  console.log(token);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <DashBoard />
          </Route>
          <Route path="/register">
            <RegistrationPage />
          </Route>

          <Route exact path="/forgotpass">
            <ForgotPass />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
