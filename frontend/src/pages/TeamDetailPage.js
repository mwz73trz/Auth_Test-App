import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TeamAPI from "../api/TeamAPI";

function TeamDetailPage() {
  const [team, setTeam] = useState(null);
  const params = useParams();

  useEffect(() => {
    const getTeam = async () => {
      const data = await TeamAPI.fetchTeamByID(params.teamID);
      if (data) {
        setTeam(data);
      }
    };

    getTeam();
  }, [params.teamID]);

  const renderTeam = () => {
    if (!team) {
      return null;
    }

    return (
      <div>
        <h2>{team.name}</h2>
        <h3>{team.sport}</h3>
      </div>
    );
  };
  return (
    <div>
      <h1>Team Detail Page</h1>
      <br />
      {renderTeam()}
    </div>
  );
}

export default TeamDetailPage;
