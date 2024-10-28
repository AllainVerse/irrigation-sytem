import { useEffect, useState } from "react";

const getUsername = (response) => {
  const { data } = response;
  console.log(data);
  return data.username;
};

export const useLogin = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const name = localStorage.getItem("name");
    name
      ? setUsername(getUsername({ data: { username: name } }))
      : (window.location.href = "/login");
  }, []);
  return username;
};
