import React from "react";
import AdminNav from "../../components/nav/AdminNav";

const AdminDashboard = () => {
  return (
    <>
      <div className="container-fluid h-100 p-0 m-0 d-flex flex-column">
        <div className="header-admin justify-content-center d-flex align-items-center w-100 m-0 p-0">
          <h1>Admin Dashboard</h1>
        </div>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-2">
              <AdminNav />
            </div>
            <div className="col">Admin dashboard</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
