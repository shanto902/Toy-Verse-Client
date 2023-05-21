import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

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
                  <Link className="btn btn-ghost btn-xs" to={`/toy/${toy._id}`}>
                    Details
                  </Link>
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
    </div>
  );
};

export default MyToys;
