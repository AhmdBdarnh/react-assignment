import React, { useState, useEffect } from "react";
import TutorialDataService from "../http-common";
import "../style.css"; // Import CSS file
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import { Link } from "react-router-dom";

const GetShelters = () => {
  const [shelters, setShelters] = useState([]);

  const handleGetAllShelters = async () => {
    try {
      const sheltersData = await TutorialDataService.getAll();
      setShelters(sheltersData.data);
    } catch (error) {
      console.error("Error fetching shelters:", error);
    }
  };

  useEffect(() => {
    handleGetAllShelters();
  }, []);

  const handleDeleteShelter = async (id) => {
    try {
      await TutorialDataService.delete(id);
      setShelters(shelters.filter((shelter) => shelter._id !== id));
    } catch (error) {
      console.error("Error deleting shelter:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="shelters-container">
        {shelters.map((shelter) => (
          <div key={shelter._id} className="cardd">
            <p>
              <strong>Shelter Name:</strong> {shelter.name}
            </p>
            <p>
              <strong>Location:</strong> {shelter.location}
            </p>
            <p>
              <strong>Capacity:</strong> {shelter.capacity}
            </p>
            <Link to={`/shelter/update/${shelter._id}`}>
              <button className="update">update</button>
            </Link>
            <button
              className="delete"
              onClick={() => handleDeleteShelter(shelter._id)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetShelters;
