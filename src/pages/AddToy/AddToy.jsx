import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddToy = () => {
    const user = useContext(AuthContext);


    const handleAddToCollection = (event) => {
        event.preventDefault();
        
        const form = event.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const price = parseFloat(form.price.value);
        const rating = parseFloat(form.rating.value);
        const quantity = form.availableQty.value;
        const picUrl = form.picUrl.value;
        const category = form.subCategory.value;
        
        const description = form.description.value;

        const newToy = {
            pictureURL: picUrl,
            name: name,
            sellerName: sellerName,
            sellerEmail: sellerEmail,
            subcategory: category,
            price: price,
            rating: rating,
            availableQuantity: quantity,
            description: description,
        }

        console.log(newToy)
        form.reset();

        fetch('http://localhost:5000/new-toy',{
            method:  'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(data => {
            console.log(data)
        })


    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <form onSubmit={handleAddToCollection}>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input
                
                  type="text"
                  placeholder="Seller Name"
                  name="sellerName"
                  defaultValue={user?.user?.displayName}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <input
                defaultValue={ user?.user?.email}
                disabled
                  type="email"
                  placeholder="Seller Email"
                  name="sellerEmail"
                  className="input input-bordered"
                  style={{ border: "1px solid #ccc" }}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  placeholder="Rating"
                  name="rating"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Available Quantity"
                  name="availableQty"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Picture URL</span>
                </label>
                <input
                  type="url"
                  placeholder="Picture URL"
                  name="picUrl"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control mb-5">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Description"
                name="description"
              ></textarea>
            </div>
            <div className="form-control flex flex-col">
    
              <select name="subCategory" className="select select-bordered w-full" defaultValue="Marvel" required>
                <option value="Marvel">Marvel</option>
                <option value="DC">DC</option>
                <option value="One Piece">One Piece</option>
              </select>
         
            </div>
            <div className="form-control mt-6">
         <input type="submit" value="Add to Collection" className="btn"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
