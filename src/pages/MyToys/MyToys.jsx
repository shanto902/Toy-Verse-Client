import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [selectedToy, setSelectedToy] = useState({});
  const [price, setPrice] = useState(selectedToy?.price);
  const [availableQty, setAvailableQty] = useState("");
  const [description, setDescription] = useState("");

  const url = `http://localhost:5000/my-toys?sellerEmail=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      })
      .catch((err) => console.log(err));
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you want to delete this item?");
    if (proceed) {
      fetch(`http://localhost:5000/toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("success fully deleted");
            const remaining = toys.filter((toy) => toy._id !== id);
            setToys(remaining);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  const handleModal = (id) => {
    const selectedToy = toys.find((toy) => toy._id === id);
    setSelectedToy(selectedToy);
    console.log(selectedToy);
  };

  const handleUpdateItem = (id) => {
    const updatedToy = {
      price: parseFloat(price),
      availableQuantity: parseFloat(availableQty),
      description: description,
    };

    if (price === {NaN}) {
        updatedToy.price = parseFloat(selectedToy?.price || 0);
      }
      if (availableQty === "") {
        updatedToy.availableQuantity = parseFloat(selectedToy?.availableQuantity || 0);
      }
      if (description === "") {
        updatedToy.description = selectedToy?.description || "";
      }

    console.log(updatedToy);

    fetch(`http://localhost:5000/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          console.log("Updated");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="overflow-x-auto w-full min-h-screen">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Toy Name & Picture</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          {toys.map((toy) => (
            <tbody key={toy._id}>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={toy.pictureURL} alt="Toy Image" />
                      </div>
                    </div>
                    <div>
                      <div className="">{toy.name}</div>
                    </div>
                  </div>
                </td>

                <td>{toy.subcategory}</td>
                <td>{toy.availableQuantity}</td>

                <td>{toy.price}</td>
                <th>
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-ghost btn-xs"
                    onClick={() => handleModal(toy._id)}
                  >
                    open modal
                  </label>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => handleDelete(toy._id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
    {
        selectedToy && (
            <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">Update item {selectedToy?.name}</h3>
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    defaultValue={selectedToy?.price}
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }}
                    type="text"
                    placeholder="Price"
                    name="price"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available Quantity</span>
                  </label>
                  <input
                    defaultValue={selectedToy?.availableQuantity}
                    onChange={(e) =>{
                        setAvailableQty(e.target.value)
                    }}
                    type="number"
                    placeholder="Available Quantity"
                    name="availableQty"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mb-5">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    defaultValue={selectedToy?.description}
                    onChange={(e) => {
                      
                            setDescription(e.target.value)
                        
                    }}
                    className="textarea textarea-bordered"
                    placeholder="Description"
                    name="description"
                  ></textarea>
                </div>
                <button
                  className="btn block"
                  onClick={() => handleUpdateItem(selectedToy._id)}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )
    }
    </div>
  );
};

export default MyToys;
