import React from "react";
import { Select } from "antd";
const { Option } = Select;

const ProductUpdateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCategoryChange,
  categories,
  subOptions,
  arrayOfSubs,
  setArrayOfSubs,
  selectedCategory,
}) => {
  // destructure
  const {
    title,
    description,
    price,
    category,
    subs,
    shipping,
    quantity,
    fueltypes,
    thermometers,
    ignitiontypes,
    numberOfMainBurners,
    technologyes,
    images,
    colors,
    brands,
    color,
    brand,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={price}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Shipping</label>
        <select
          name="shipping"
          value={shipping === "Yes" ? "Yes" : "No"}
          className="form-control"
          onChange={handleChange}
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          className="form-control"
          value={quantity}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Color</label>
        <select
          value={color}
          name="color"
          className="form-control"
          onChange={handleChange}
        >
          {colors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Thermometer</label>
        <select
          value={thermometers}
          name="thermometer"
          className="form-control"
          onChange={handleChange}
        >
          {thermometers.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Fuel Type</label>
        <select
          value={fueltypes}
          name="fueltype"
          className="form-control"
          onChange={handleChange}
        >
          {fueltypes.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Ignition Type</label>
        <select
          value={ignitiontypes}
          name="ignitiontype"
          className="form-control"
          onChange={handleChange}
        >
          {ignitiontypes.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Number Of Main Burners</label>
        <select
          value={numberOfMainBurners}
          name="numberOfMainBurner"
          className="form-control"
          onChange={handleChange}
        >
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
          value={technologyes}
          name="technology"
          className="form-control"
          onChange={handleChange}
        >
          {technologyes.map((tec) => (
            <option key={tec} value={tec}>
              {tec}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Brand</label>
        <select
          value={brand}
          name="brand"
          className="form-control"
          onChange={handleChange}
        >
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Category</label>
        <select
          name="category"
          className="form-control"
          onChange={handleCategoryChange}
          value={selectedCategory ? selectedCategory : category._id}
        >
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label>Sub Categories</label>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Please select"
          value={arrayOfSubs}
          onChange={(value) => setArrayOfSubs(value)}
        >
          {subOptions.length &&
            subOptions.map((s) => (
              <Option key={s._id} value={s._id}>
                {s.name}
              </Option>
            ))}
        </Select>
      </div>
      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default ProductUpdateForm;
