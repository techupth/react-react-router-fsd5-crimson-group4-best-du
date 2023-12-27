import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function CreateProductForm() {
  const [name, setName] = useState("");
  const [image, setimage] = useState("");
  const [price, setprice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const createSingleProduct = async () => {
    try {
      await axios.post("http://localhost:4001/products", {
        name,
        description,
        image,
        price,
      });
      navigate("/");
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createSingleProduct();
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={image}
            onChange={(event) => {
              setimage(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={price}
            onChange={(event) => {
              setprice(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
