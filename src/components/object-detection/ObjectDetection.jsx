import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./ObjectDetection.css";
import { Link } from "react-router-dom";

function ObjectDetection() {
  const [image, setImage] = useState(null);
  const [detectedObjects, setDetectedObjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const performObjectDetection = async () => {
    setIsLoading(true);

    // Simulate object detection results
    let objects = ["laptop", "tupperware", "cup", "bottle"];

    setDetectedObjects(objects);
    setIsLoading(false);
  };

  // Suggestions for detected objects including price ranges
  const objectSuggestions = {
    laptop: {
      suggestion: "Check Marketplace",
      minPrice: "30000",
      maxPrice: "100000",
    },
    tupperware: {
      suggestion: "Go for Recycling",
      minPrice: "10",
      maxPrice: "500",
    },
    cup: {
      suggestion: "Check Marketplace",
      minPrice: "20",
      maxPrice: "100",
    },
    bottle: {
      suggestion: "Check Marketplace",
      minPrice: "1",
      maxPrice: "10",
    },
  };

  return (
    <div>
      <Header />
      <div className="container object_detection_page shadow-sm center mb-3">
        <h4 className="text-center bg-light p-4">OBJECT DETECTION</h4>

        <br />
        {image && (
          <div>
            <img
              id="input-image"
              src={image}
              alt="Uploaded"
              width="600"
              height="auto"
            />
          </div>
        )}
        <br />
        <label htmlFor="file-input" className="custom-upload-button">
          Upload Image
        </label>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <br />
        {image && (
          <button
            id="detect-button"
            className="m-3 mb-5"
            onClick={performObjectDetection}
            disabled={!image || isLoading}
          >
            Detect Objects
          </button>
        )}
        <br />
        <div>
          {isLoading && <p>Loading...</p>}
          {!isLoading && detectedObjects.length > 0 && (
            <div>
              <h2>Detected Objects:</h2>
              <ul>
                {detectedObjects.map((obj, index) => (
                  <li key={index} className="detected-object">
                    Detected Object: <strong>{obj}</strong>
                    <br />
                    Suggestion: <em>{objectSuggestions[obj].suggestion}</em>
                    <br />
                    Price Range: {objectSuggestions[obj].minPrice} -{" "}
                    {objectSuggestions[obj].maxPrice}
                  </li>
                ))}
              </ul>

              <Link className="btn btn-info w-30" to={"/addProduct"}>
                Add Product
              </Link>
              <div />
            </div>
          )}
        </div>
        <div></div>
      </div>

      <Footer />
    </div>
  );
}

export default ObjectDetection;
