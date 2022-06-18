import React, { useState } from "react";
import { useWindowSize } from "@react-hook/window-size";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Profile from "../../pages/Profile/Profile";
import Purchase from "../../pages/Purchase/Purchase";
import AddPurchase from "../../pages/AddPurchase/AddPurchase";
import Order from "../../pages/Order/Order";
import AddOrder from "../../pages/AddOrder/AddOrder";
import Inventory from "../../pages/Inventory/Inventory";
import AddStock from "../../pages/AddStock/AddStock";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";

const Main = () => {
  const [width, height] = useWindowSize();
  const [sidebar, setSidebar] = useState(width < 1280 ? true : false);
  return (
    <div>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <Topbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/purchase" element={<Purchase />}></Route>
        <Route path="/purchase/add" element={<AddPurchase />}></Route>
        <Route path="/orders" element={<Order />}></Route>
        <Route path="/orders/add" element={<AddOrder />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/inventory/add" element={<AddStock />}></Route> */
      </Routes>
    </div>
  );
};

export default Main;
