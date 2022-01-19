const BASE_URL = "http://localhost:8000/api/";

const getInit = (token) => {
  return {
    headers: {
      "Content-Type": "application/json",
      authorization: `JWT ${token}`,
    },
  };
};

const tryCatchFetch = async (url, init) => {
  try {
    const response = await fetch(url, init);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(
        `Bad response: ${response.status} ${response.statusText}`
      );
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

const fetchTeams = async () => {
  const token = localStorage.getItem("auth-user");
  const url = `${BASE_URL}teams/`;
  return await tryCatchFetch(url, getInit(token));
};

const fetchTeamByID = async (teamID) => {
  const token = localStorage.getItem("auth-user");
  const url = `${BASE_URL}teams/${teamID}/`;
  return await tryCatchFetch(url, getInit(token));
};

const myExports = {
  fetchTeams,
  fetchTeamByID,
};

export default myExports;
