
const ToyCard = ({toy}) => {
    return (
 
<div className="card w-96 bg-gray-200 shadow-xl mt-10">
  <figure className="px-10 pt-10">
    <img src={toy.pictureURL} alt="action-fig" className="rounded-xl aspect-square object-cover" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{toy.name}</h2>
    <p>Price: {toy.price} | Rating: {toy.rating}</p>
    <div className="card-actions">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>

    );
};

export default ToyCard;