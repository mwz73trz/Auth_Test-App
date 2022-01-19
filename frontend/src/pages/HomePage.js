import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TeamAPI from "../api/TeamAPI";
import TeamsList from "../components/TeamsList";
import UserContext from "../contexts/UserContext.js";

const HomePage = ({ isLoggedIn, handleLogout }) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const getTeams = async () => {
      const data = await TeamAPI.fetchTeams();
      if (data) {
        setTeams(data);
      }
    };

    getTeams();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {user && (
        <div>
          Hi {user.username}
          <TeamsList teams={teams} />
        </div>
      )}
      {!isLoggedIn ? (
        <div>
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
};

export default HomePage;
