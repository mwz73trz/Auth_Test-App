const login = async (userObject) => {
  const res = await fetch("http://localhost:8000/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObject),
  });
  return res;
};

const getLoggedInUser = async (token) => {
  const res = await fetch("http://localhost:8000/auth/current-user/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    },
  });
  return res;
};

const signupUser = async (userObject) => {
  const res = await fetch("http://localhost:8000/auth/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObject),
  });
  return res;
};

export { login, getLoggedInUser, signupUser };
