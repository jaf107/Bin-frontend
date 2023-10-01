import React, { useState } from "react";

const MyOrders = ({ username }) => {
  // Dummy user orders data
  const userOrders = [
    {
      type: "Buy",
      condition: "Buy Order 1",
      seller: "John Doe",
      status: "Pending",
    },
    {
      type: "Sell",
      condition: "Sell Order 1",
      buyer: "Alice Smith",
      status: "Accepted",
    },
    {
      type: "Buy",
      condition: "Buy Order 2",
      seller: "Bob Johnson",
      status: "Rejected",
    },
    {
      type: "Sell",
      condition: "Sell Order 2",
      buyer: "Eve Adams",
      status: "Pending",
    },
    {
      type: "Buy",
      condition: "Buy Order 3",
      seller: "Charlie Brown",
      status: "Accepted",
    },
  ];

  const [activeTab, setActiveTab] = useState("Buy");

  const BuyRequests = () => (
    <div className="container">
      <h2>Buy Requests</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Seller Name</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          {userOrders.map(
            (order, index) =>
              order.type === "Buy" && (
                <tr key={index}>
                  <td>{order.condition}</td>
                  <td>{order.seller}</td>
                  <td>
                    <b>
                      <span className={getStatusColorClass(order.status)}>
                        {order.status}
                      </span>
                    </b>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );

  const SellRequests = () => (
    <div className="">
      <h2>Sell Requests</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Buyer Name</th>
            <th>Order Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userOrders.map(
            (order, index) =>
              order.type === "Sell" && (
                <tr key={index}>
                  <td>{order.condition}</td>
                  <td>{order.buyer}</td>
                  <td>
                    <b>
                      <span className={getStatusColorClass(order.status)}>
                        {order.status}
                      </span>
                    </b>
                  </td>
                  <td>
                    {order.status === "Pending" && (
                      <>
                        <button className="btn btn-success m-1">Accept</button>
                        <button className="btn btn-danger m-1">Reject</button>
                      </>
                    )}
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );

  const getStatusColorClass = (status) => {
    switch (status) {
      case "Accepted":
        return "text-success";
      case "Rejected":
        return "text-danger";
      case "Pending":
        return "text-warning";
      default:
        return "";
    }
  };

  return (
    <div className="">
      <div className="bio-graph-heading">Orders</div>

      <div className="text-center p-1 m-1">
        <button
          className={`btn ${
            activeTab === "Buy" ? "btn-primary" : "btn-secondary"
          } m-1 p-2 tab-button`}
          onClick={() => setActiveTab("Buy")}
        >
          Buy Requests
        </button>
        <button
          className={`btn ${
            activeTab === "Sell" ? "btn-primary" : "btn-secondary"
          } m-1 p-2 tab-button`}
          onClick={() => setActiveTab("Sell")}
        >
          Sell Requests
        </button>
      </div>

      {activeTab === "Buy" && <BuyRequests />}
      {activeTab === "Sell" && <SellRequests />}
    </div>
  );
};

export default MyOrders;
