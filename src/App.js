import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import PrivateRoute from "./utils/Private.js";
import LoginPage from "./components/pages/Login/LoginContainer";
import Registration from "./components/Registration";
import RenderLandingPage from "./components/pages/Landing/RenderLandingPage";
import Home from "./components/Home";
import Team from "./components/Team";
import MyProfilePage from "./components/pages/MyProfile/RenderMyProfilePage";
import DashboardPage from "./components/pages/Dashboard/RenderDashboardPage";

// const logout = () => {
//   localStorage.removeItem("token");
//   window.location.href = "login";
// };

const StyledBody = styled.div`
  background-color: ${({ theme }) => theme.secondaryColor};
  header {
    background-color: ${({ theme }) => theme.primaryColor};
  }

  header nav a {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
  header nav a:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;

function App() {
  return (
    <Router>
      <div className="App">
        <StyledBody className="App">
          <Switch>
            <PrivateRoute path="/dashboard">
              <DashboardPage />
            </PrivateRoute>

            <PrivateRoute path="/my-profile">
              <MyProfilePage />
            </PrivateRoute>

            <Route path="/login">
              <LoginPage />
            </Route>

            <Route path="/landing">
              <RenderLandingPage />
            </Route>

            <Route path="/register">
              <Registration />
            </Route>

            <Route path="/meet-team">
              <Team />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </StyledBody>
      </div>
    </Router>
  );
}

export default App;
