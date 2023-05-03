import axios from "axios";

export const setProfile = async (clerkId) => {
  const user = await axios.get(
    "http://localhost:5000/api/v1/representantes/" + clerkId
  );
  const strProfile = JSON.stringify(user.data.representante);
  localStorage.setItem("profile", strProfile);
};

export const getProfile = () => {
  const strProfile = localStorage.getItem("profile");
  if (strProfile) {
    return JSON.parse(strProfile);
  }
  return null;
};

export const deleteProfile = () => {
  localStorage.removeItem("profile");
};
