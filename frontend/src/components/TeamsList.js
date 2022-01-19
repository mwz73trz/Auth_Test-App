import { Link } from "react-router-dom";

function TeamsList(props) {
  const renderTeams = () => {
    if (!props.teams) {
      return null;
    }

    return props.teams.map((team, index) => {
      return (
        <li key={index}>
          <Link to={`/teams/${team.id}`}>{team.name}</Link>
        </li>
      );
    });
  };

  return (
    <div>
      <ul>{renderTeams()}</ul>
    </div>
  );
}
export default TeamsList;
