import React, { useState } from "react";

const MyOrders = ({ username }) => {
  const [showBuyOrder, setShowBuyOrder] = useState(true);
  const [showSellOrder, setShowSellOrder] = useState(true);

  // Dummy user orders data
  const userOrders = [
    {
      type: "Buy",
      condition: "Buy Order 1",
      buyer: "John Doe",
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
      buyer: "Bob Johnson",
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
      buyer: "Charlie Brown",
      status: "Accepted",
    },
  ];

  // Filter orders based on selected checkboxes
  const filteredOrders = userOrders.filter((order) => {
    if (showBuyOrder && showSellOrder) {
      // If both checkboxes are selected, show all orders
      return true;
    } else if (showBuyOrder) {
      return order.type === "Buy"; // Show only Buy Orders
    } else if (showSellOrder) {
      return order.type === "Sell"; // Show only Sell Orders
    }
    return false;
  });

  return (
    <div className="">
      <div class="bio-graph-heading ">Orders</div>

      <div className="text-center p-1 m-1">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={showBuyOrder}
            className="p-1 m-1"
            onChange={() => setShowBuyOrder(!showBuyOrder)}
          />
          Buy Order
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={showSellOrder}
            className="p-1 m-1"
            onChange={() => setShowSellOrder(!showSellOrder)}
          />
          Sell Order
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={showBuyOrder && showSellOrder}
            className="p-1 m-1"
            onChange={() => {
              setShowBuyOrder(true);
              setShowSellOrder(true);
            }}
          />
          All
        </label>
      </div>

      <div>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Buyer Name</th>
              <th>Product Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.condition}</td>
                <td>{order.buyer}</td>
                <td>{order.status}</td>
                <td>
                  <button className="btn btn-success m-1">Accept</button>
                  <button className="btn btn-danger m-1">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
