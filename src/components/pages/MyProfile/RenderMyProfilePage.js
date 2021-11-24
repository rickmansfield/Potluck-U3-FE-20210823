import React from 'react';
import { Link } from 'react-router-dom';

const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "login";
}


function RenderMyProfilePage(props) {
  return (
    <div className="page">
      <header>
        <h1>POTLUCK PLANNER</h1>
        <nav>
          <Link to="/landing">Home</Link>
          <span className="navspans"></span>
          <Link to="/login"> Login</Link>
          <span className="navspans"></span>
          <Link to="/dashboard">DashBoard</Link>
          <span className="navspans"></span>
          <Link to="/meet-team">Meet&nbsp;our&nbsp;Team</Link>
          <span className="navspans"><Link to href="/" onClick={logout}>logout</Link></span>
        </nav>
      </header>
      <div className="content-container">
        <h1>My Profile</h1>
      </div>
    </div>
  );
}
export default RenderMyProfilePage;
