import React from "react";

const Dashboard = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userData");
  localStorage.removeItem("expiryTime");

  return <div>Main</div>;
};

export default Dashboard;
