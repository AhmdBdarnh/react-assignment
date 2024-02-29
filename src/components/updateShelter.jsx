import React, { useState } from "react";
import TutorialDataService from "../http-common";
import { useParams, Link, useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "./header";
import "../style.css";

const UpdateShelter = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleUpdateShelter = async () => {
    try {
      const data = { name, location, capacity };
      if (name && location && capacity) {
        await TutorialDataService.update(id, data);
        navigate("/"); // Use navigate instead of history.push
      } else {
        console.log("Fill all the buttons!");
        alert("Fill all the buttons!");
      }
    } catch (error) {
      console.error("Error updating shelter:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateShelter();
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Shelter name"
        />

        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter Shelter Location"
        />
        <input
          type="text"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          placeholder="Enter Shelter Capacity"
        />
        <input type="submit" value="Update Shelter" />
      </form>
    </>
  );
};

export default UpdateShelter;
