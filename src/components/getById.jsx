import React, { useState, useEffect } from "react";
import TutorialDataService from '../http-common';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from "./header";
import "../style.css"; // Import CSS file

const GetShelters = () => {
  const [shelters, setShelters] = useState([]);
  const [id, setId] = useState('');

  const handleGetShelterById = async (id) => {
    try {
      const shelterData = await TutorialDataService.getById(id);
      setShelters([shelterData.data]); // Ensure to set shelterData.data as an array
    } catch (error) {
      console.error("Error fetching shelter:", error);
    }
  };

  useEffect(() => {
    if (id.trim() !== '') { // Check if id is not empty before fetching
      handleGetShelterById(id);
    } else {
      setShelters([]); // Reset shelters when id is empty
    }
  }, [id]); // Trigger useEffect when id changes

  const handleSubmit = (event) => {
    event.preventDefault();
    handleGetShelterById(id);
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter Shelter ID"
        />
      </form>
      <div className="shelters-container">
        {shelters.map((shelter) => (
          <div key={shelter._id} className="cardd">
            <p><strong>Shelter Name:</strong> {shelter.name}</p>
            <p><strong>Location:</strong> {shelter.location}</p>
            <p><strong>Capacity:</strong> {shelter.capacity}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetShelters;
