import React from "react";
import { Select } from "antd";
const { Option } = Select;

const ProductCreateForm = ({
  handleSubmit,
  handleChange,
  values,
  handleCategoryChange,
  setValues,
  subOptions,
  showSub,
}) => {
  // destructure
  const {
    title,
    description,
    price,
    categories,
    category,
    subs,
    shippings,
    quantity,
    fueltypes,
    thermometers,
    ignitiontypes,
    numberOfMainBurners,
    technologyes,
    frontSideShelfs,
    primaryOutputBurners,
    assemblys,
    gateSurfaceMaterials,
    isFreePickups,
    recommendeds,
    images,
    colors,
    brands,
    color,
    brand,
  } = values;

  return (
    <form onSubmit={handleSubmit} className="w-50 justify-ceontent-start">
      <div className="form-group gap-2">
        <label className="m-0 p-0">Product title</label>
        <input
          type="text"
          name="title"
          className="form-control mb-4"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="m-0 p-0">Description</label>
        <input
          type="text"
          name="description"
          className="form-control mb-4"
          value={description}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="m-0 p-0">Category</label>
        <select
          name="category"
          className="form-control mb-4"
          onChange={handleCategoryChange}
        >
          <option>Please select</option>
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>
      {showSub && (
        <div>
          <label className="m-0 p-0">Sub Categories</label>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
            value={subs}
            onChange={(value) => setValues({ ...values, subs: value })}
          >
            {subOptions.length &&
              subOptions.map((s) => (
                <Option key={s._id} value={s._id}>
                  {s.name}
                </Option>
              ))}
          </Select>
        </div>
      )}
      <div className="form-group mt-4">
        <label className="m-0 p-0">Price</label>
        <input
          type="number"
          name="price"
          className="form-control mb-4"
          value={price}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="m-0 p-0">Shipping</label>
        <select
          name="shipping"
          className="form-control mb-4"
          onChange={handleChange}
        >
          <option>Please select</option>
          {shippings.map((sh) => (
            <option key={sh} value={sh}>
              {sh}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="m-0 p-0">Free Pickup</label>
        <select
          name="isFreePickup"
          className="form-control mb-4"
          onChange={handleChange}
        >
          <option>Please select</option>
          {isFreePickups.map((frp) => (
            <option key={frp} value={frp}>
              {frp}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="m-0 p-0">Recommended</label>
        <select
          name="recommended"
          className="form-control mb-4"
          onChange={handleChange}
        >
          <option>Please select</option>
          {recommendeds.map((rec) => (
            <option key={rec} value={rec}>
              {rec}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="m-0 p-0">Front Side Shelf</label>
        <select
          name="frontSideShelf"
          className="form-control mb-4"
          onChange={handleChange}
        >
          <option>Please select</option>
          {frontSideShelfs.map((rec) => (
            <option key={rec} value={rec}>
              {rec}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="m-0 p-0">Assembly</label>
        <select
          name="assembly"
          className="form-control mb-4"
          onChange={handleChange}
        >
          <option>Please select</option>
          {assemblys.map((rec) => (
            <option key={rec} value={rec}>
              {rec}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="m-0 p-0">Primary Output Burner</label>
        <select
          name="primaryOutputBurner"
          className="form-control mb-4"
          onChange={handleChange}
        >
          <option>Please select</option>
          {primaryOutputBurners.map((rec) => (
            <option key={rec} value={rec}>
              {rec}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="m-0 p-0">Gate Surface Material</label>
        <select
          name="gateSurfaceMaterial"
          className="form-control mb-4"
          onChange={handleChange}
        >
          <option>Please select</option>
          {gateSurfaceMaterials.map((rec) => (
            <option key={rec} value={rec}>
              {rec}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="m-0 p-0">Quantity</label>
        <input
          type="number"
          name="quantity"
          className="form-control mb-4"
          value={quantity}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="m-0 p-0">Color</label>
        <select
          name="color"
          className="form-control mb-4"
          onChange={handleChange}
        >
          <option>Please select</option>
          {colors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="m-0 p-0">Thermometer</label>
        <select
          name="thermometer"
          className="form-control mb-4"
          onChange={handleChange}
        >
          <option>Please select</option>
          {thermometers.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="m-0 p-0">Fuel Type</label>
        <select
          name="fueltype"
          className="form-control mb-4"
          onChange={handleChange}
        >
          <option>Please select</option>
          {fueltypes.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="m-0 p-0">Ignition Type</label>
        <select
          name="ignitiontype"
          className="form-control mb-4"
          onChange={handleChange}
        >
          <option>Please select</option>
          {ignitiontypes.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="m-0 p-0">Number Of Main Burners</label>
        <select
          name="numberOfMainBurner"
          className="form-control mb-4"
          onChange={handleChange}
        >
          <option>Please select</option>
          {numberOfMainBurners.map((numb) => (
            <option key={numb} value={numb}>
              {numb}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Technology</label>
        <select
          name="technology"
          className="form-control mb-4"
          onChange={handleChange}
        >
          <option>Please select</option>
          {technologyes.map((tec) => (
            <option key={tec} value={tec}>
              {tec}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="m-0 p-0">Brand</label>
        <select
          name="brand"
          className="form-control mb-4"
          onChange={handleChange}
        >
          <option>Please select</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <button className="btn w-100 bg-danger text-white border-0 p-3 mt-5 mb-5 btn-outline-info">
        Save
      </button>
    </form>
  );
};

export default ProductCreateForm;
