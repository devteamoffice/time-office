import React from "react";
import StatsRow from "../components/Statistics/StatsRow";
import Conversions from "../components/Statistics/Conversions";
import RecentOrders from "../components/Statistics/RecentOrders";

const Dashboard = () => {
  return (
    <div class="container-fluid">
      <StatsRow />

      <Conversions />

      <RecentOrders />
    </div>
  );
};

export default Dashboard;
