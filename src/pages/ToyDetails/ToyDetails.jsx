import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 self-center">
        <img className="m-5 rounded-lg" src={toy.pictureURL} alt="" />
      </div>
      <div className="flex-1 p-10 self-center">
        <h2 className="text-2xl pb-2 font-bold">{toy.name}</h2>
        <p className=" pb-2"><span className="font-bold">Seller Name:</span> {toy.sellerName}</p>
        <p className="pb-2"><span className="font-bold ">Seller Email:</span> {toy.sellerEmail}</p>
        <p className="pb-2"><span className="font-bold">Price:</span> {toy.price}</p>
        <p className="pb-2"><span className="font-bold">Rating:</span> {toy.rating}</p>
        <p className="pb-2"><span className="font-bold">Available Quantity:</span> {toy.availableQuantity}</p>
        <p><span className="font-bold">Description:</span> {toy.description}</p>
      </div>
    </div>
  );
};

export default ToyDetails;
