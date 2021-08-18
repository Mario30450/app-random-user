import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./profile.css";

export const Profile = () => {
  const { idProfile } = useParams();
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    //fetch("https://randomuser.me/api/?results=50")
    //.then((response) => response.json())
    //.then((data) => {
    //let profile = data.results.find((item) => item.login.uuid === idProfile);
    setLoading(true);
    const profiles = JSON.parse(localStorage.getItem("Profiles"));
    let perfil = profiles.find((item) => item.login.uuid === idProfile);
    setProfile(perfil);
    console.log(perfil);
    setLoading(false);
  }, [idProfile]);
  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div className="containerProfile">
      <div>
        <img
          className="pictureProfile"
          src={profile.picture?.large}
          alt={profile.name?.last}
        />
      </div>
      <h3>{`${profile.name?.title} ${profile.name?.last} ${profile.name?.first}`}</h3>
      <h3>{`${profile.gender}`}</h3>
      <h3>
        Location: {`${profile.location?.city} ${profile.location?.country}`}
      </h3>
      <h3>
        Street:
        {` ${profile.location?.street.name} ${profile.location?.street.number}`}
      </h3>
      <h3>Postcode: {`${profile.location?.postcode}`}</h3>
      <h3>Email: {`${profile.email}`}</h3>
      <h3>User: {`${profile.login?.username}`}</h3>

      <Link className="buttom" to={`/`}>
        Back
      </Link>
    </div>
  );
};
