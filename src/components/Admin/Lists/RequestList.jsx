import React, { useState, useEffect } from "react";

const RequestList = () => {
  // Mock data for requests (replace this with actual data from your backend)
  const [requests, setRequests] = useState([
    { id: 1, username: "User1", type: "Recycler" },
    { id: 2, username: "User2", type: "Organization" },
    { id: 3, username: "User3", type: "Recycler" },
    { id: 4, username: "User4", type: "Organization" },
    // Add more requests here
  ]);

  // State to manage the filter options
  const [filterOptions, setFilterOptions] = useState({
    showRecyclers: true,
    showOrganizations: true,
  });

  // Function to handle approval of a request (you can implement your actual logic here)
  const handleApprove = (id) => {
    // Implement your approval logic and update the request status in the backend
    console.log(`Request with ID ${id} approved.`);
  };

  // Function to handle rejection of a request (you can implement your actual logic here)
  const handleReject = (id) => {
    // Implement your rejection logic and update the request status in the backend
    console.log(`Request with ID ${id} rejected.`);
  };

  // Function to filter requests based on the filter options
  const filteredRequests = requests.filter((request) => {
    const isRecycler = request.type === "Recycler";
    const isOrganization = request.type === "Organization";

    return (
      (filterOptions.showRecyclers && isRecycler) ||
      (filterOptions.showOrganizations && isOrganization)
    );
  });

  return (
    <div>
      <h2 className="text-center bg-light p-4">APPROVAL REQUESTS</h2>

      <div className="btn-group mb-3 d-flex align-items-center">
        <button
          className={`btn  m-1 ${
            filterOptions.showRecyclers ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() =>
            setFilterOptions({
              ...filterOptions,
              showRecyclers: !filterOptions.showRecyclers,
            })
          }
        >
          Show Recyclers
        </button>
        <button
          className={`btn  m-1 ${
            filterOptions.showOrganizations ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() =>
            setFilterOptions({
              ...filterOptions,
              showOrganizations: !filterOptions.showOrganizations,
            })
          }
        >
          Show Organizations
        </button>
      </div>
      <table className="table mt-3">
        <thead className="thead-dark">
          <tr>
            <th>Username</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((request) => (
            <tr key={request.id}>
              <td>{request.username}</td>
              <td>{request.type}</td>
              <td>
                <button
                  className="btn btn-success m-1"
                  onClick={() => handleApprove(request.id)}
                >
                  Approve
                </button>
                <button
                  className="btn btn-danger m-1"
                  onClick={() => handleReject(request.id)}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestList;
