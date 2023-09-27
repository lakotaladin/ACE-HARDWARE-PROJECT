import React, { useState, useEffect } from "react";
import AdminNav from "../../components/nav/AdminNav";
import { getOrders, changeStatus } from "../../functions/admin";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Orders from "../../components/order/Orders";
import { Input, Button, Space } from "antd";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () =>
    getOrders(user.token).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setOrders(res.data);
    });

  const handleStatusChange = (orderId, orderStatus) => {
    changeStatus(orderId, orderStatus, user.token).then((res) => {
      toast.success("Status updated");
      loadOrders();
    });
  };

  const handleSearch = () => {
    const filteredOrders = orders.filter(
      (order) =>
        order._id.toLowerCase().includes(searchText.toLowerCase()) ||
        order.orderStatus.toLowerCase().includes(searchText.toLowerCase())
    );

    setOrders(filteredOrders);
  };

  const handleResetSearch = () => {
    setSearchText("");
    loadOrders();
  };

  return (
    <div className="dashcontainer container-fluid">
      <div className="adminnav row">
        <div className="admincol col-md-2">
          <AdminNav />
        </div>

        <div className="admdiv col-md-10">
          <h4 className="mb-5">Admin Dashboard</h4>
          <Space
            direction="horizontal d-flex flex-wrap justify-content-end"
            className="mb-4"
          >
            <Input
              style={{ border: "1px solid grey" }}
              className="searchadmin mb-2"
              placeholder="Search for Status or ID"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              allowClear
              autoFocus
            />
            <Space className="mb-2" style={{ justifyContent: "flex-end" }}>
              <Button type="primary" onClick={handleSearch}>
                Search
              </Button>
              <Button onClick={handleResetSearch}>Reset search</Button>
            </Space>
          </Space>
          <div className="showordersdiv w-75 p-0 m-0 m-auto">
            <Orders orders={orders} handleStatusChange={handleStatusChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
