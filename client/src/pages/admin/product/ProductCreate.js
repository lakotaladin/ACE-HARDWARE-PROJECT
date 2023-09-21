import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createProduct } from "../../../functions/product";
import ProductCreateForm from "../../../components/forms/ProductCreateForm";
import { getCategories, getCategorySubs } from "../../../functions/category";
import FileUpload from "../../../components/forms/FileUpload";
import LoadingIutlined from "@ant-design/icons";

const initialState = {
  title: "",
  description: "",
  price: "",
  categories: [],
  category: "",
  subs: [],
  shipping: "",
  quantity: "",
  fueltypes: [
    "Charcoal",
    "Liquid Propane",
    "Natural Gas",
    "Natural Gas/Propane",
    "Wood Chips",
  ],
  technologyes: ["Bluetooth", "WiFi"],
  thermometers: ["Yes", "No"],
  ignitiontypes: [
    "Continuous Spark",
    "Electrical",
    "Manual",
    "Propane",
    "Single Spark Ignition",
  ],
  numberOfMainBurners: [
    "1 Burner",
    "2 Burner",
    "3 Burner",
    "4 Burner",
    "5 Burner",
    "6 Burner",
  ],
  images: [],
  colors: [
    "Black",
    "Black/Silver",
    "Blue",
    "Copper",
    "Deep Ocean Blue",
    "Fireman Red",
    "GRAY",
    "Green",
    "Indigo",
    "Orange",
    "RED",
    "Silver",
    "Stainless Steel",
    "Titanium",
  ],
  brands: [
    "Weber",
    "Treager",
    "Big Green Egg",
    "Blackstone",
    "Ooni",
    "Gozney",
    "Char-Broil",
    "Meat Chunch BBQ",
  ],
  color: "",
  brand: "",
  numberOfMainBurner: "",
  thermometer: "",
  fueltype: "",
  ignitiontype: "",
  technology: "",
};

const ProductCreate = () => {
  const [values, setValues] = useState(initialState);
  const [subOptions, setSubOptions] = useState("");
  const [showSub, setShowSub] = useState(false);
  const [loading, setLoading] = useState(false);

  // redux
  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    loadCategories();
  }, []);
  const loadCategories = () =>
    getCategories().then((c) => setValues({ ...values, categories: c.data }));
  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(values, user?.token)
      .then((res) => {
        console.log(res);
        window.alert(`${res.data.title} is created!`);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        // if (err.response.status === 400) toast.error(err.response.data);
        toast.error(err.response.data.err);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };
  const handleCategoryChange = (e) => {
    e.preventDefault();
    console.log("Clicked Category", e.target.value);
    setValues({ ...values, subs: [], category: e.target.value });
    getCategorySubs(e.target.value).then((res) => {
      setSubOptions(res.data);
    });
    setShowSub(true);
  };
  return (
    <div className="container-fluid">
      <div className="header-admin justify-content-center d-flex align-items-center w-100 m-0 p-0">
        <h1>Admin Dashboard</h1>
      </div>
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col-md-10">
          {loading ? (
            <LoadingIutlined className="text-danger h1" />
          ) : (
            <h4>Product create</h4>
          )}
          <hr />
          {/* {JSON.stringify(values)} */}
          {/* Image upload input */}
          <div className="p-3">
            <FileUpload
              values={values}
              setValues={setValues}
              setLoading={setLoading}
            />
          </div>

          <ProductCreateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            handleCategoryChange={handleCategoryChange}
            subOptions={subOptions}
            showSub={showSub}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
