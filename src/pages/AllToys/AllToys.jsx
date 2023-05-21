import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toys = useLoaderData();
  return (
    <div>
     
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Toy Name & Picture</th>
              <th>Seller</th>
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
                   <img
                     src={toy.pictureURL}
                     alt="Toy Image"
                   />
                 </div>
               </div>
               <div>
                 <div className="">{toy.name}</div>
               </div>
             </div>
           </td>
           <td>
             {toy.sellerName}
 
           </td>
           <td>{toy.subcategory}</td>
           <td>{toy.availableQuantity}</td>

           <td>{toy.price}</td>
           <th>
             <Link className="btn btn-ghost btn-xs" to={`/toy/${toy._id}`} >Details</Link>
           </th>
         </tr>
       </tbody>
      ))}
        </table>
      </div>
    </div>
  );
};

export default AllToys;
