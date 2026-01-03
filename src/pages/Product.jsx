// import { useLoaderData } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// export function Product() {
//   const data = useLoaderData(); // backend returns { status: true, result: [...] }

//   // Ensure we have an array
//   const initialProducts = Array.isArray(data?.result) ? data.result : [];
//   const [products, setProducts] = useState(initialProducts);

//   if (products.length === 0) {
//     return (
//       <div className="text-center mt-10 text-lg">
//         No products available
//       </div>
//     );
//   }

//   const handleClaim = async (productId) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/product/claim", // backend route
//         { productId },
//         { withCredentials: true } // send cookie for auth
//       );

//       alert(response.data.msg || "Product claimed successfully!");

//       // Update product status locally
//       setProducts((prev) =>
//         prev.map((p) =>
//           p._id === productId ? { ...p, status: "claim" } : p
//         )
//       );
//     } catch (error) {
//       alert(
//         error?.response?.data?.msg || "Failed to claim product"
//       );
//     }
//   };

//   return (
//     <div className="p-5">
//       <h2 className="text-2xl font-bold mb-5 text-center">Product List</h2>

//       <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {products.map((product) => (
//           <li
//             key={product._id}
//             className="flex flex-col gap-3 border p-4 rounded shadow hover:shadow-lg"
//           >
//             {product.photo && (
//               <img
//                 src={product.photo}
//                 alt={product.productname}
//                 className="w-full h-48 object-cover rounded"
//               />
//             )}
//             <div className="flex flex-col gap-1">
//               <span className="font-semibold text-lg">{product.productname || "N/A"}</span>
//               <span>Price: ₹{product.productprice || "N/A"}</span>
//               <span>Status: {product.status || "N/A"}</span>
//               <span>Category: {product.category || "N/A"}</span>
//               <span>Location: {product.userlocation || "N/A"}</span>
//               <p className="text-gray-600 text-sm">{product.description || "No description"}</p>
//             </div>

//             {/* Claim Button */}
//             {product.status === "not claim" && (
//               <button
//                 onClick={() => handleClaim(product._id)}
//                 className="mt-2 bg-green-700 text-white p-2 rounded hover:bg-green-600"
//               >
//                 Book
//               </button>
//             )}
//             {product.status === "claim" && (
//               <span className="mt-2 text-center text-white bg-gray-500 p-2 rounded">
//                 Booked
//               </span>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// import { useLoaderData } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// export function Product() {
//   const data = useLoaderData(); // backend returns { status: true, result: [...] }

//   // Ensure we have an array
//   const initialProducts = Array.isArray(data?.result) ? data.result : [];
//   const [products, setProducts] = useState(initialProducts);

//   // ✅ Search state
//   const [search, setSearch] = useState("");

//   if (products.length === 0) {
//     return (
//       <div className="text-center mt-10 text-lg">
//         No products available
//       </div>
//     );
//   }

//   const handleClaim = async (productId) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/product/claim",
//         { productId },
//         { withCredentials: true }
//       );

//       alert(response.data.msg || "Product claimed successfully!");

//       // Update product status locally
//       setProducts((prev) =>
//         prev.map((p) =>
//           p._id === productId ? { ...p, status: "claim" } : p
//         )
//       );
//     } catch (error) {
//       alert(
//         error?.response?.data?.msg || "Failed to claim product"
//       );
//     }
//   };

//   // ✅ Search logic (frontend filter)
//   const filteredProducts = products.filter((product) => {
//     const searchText = search.toLowerCase();

//     return (
//       product.productname?.toLowerCase().includes(searchText) ||
//       product.category?.toLowerCase().includes(searchText) ||
//       product.userlocation?.toLowerCase().includes(searchText)
//     );
//   });

//   return (
//     <div className="p-5">
//       <h2 className="text-2xl font-bold mb-5 text-center">Product List</h2>

//       {/* ✅ Search Input */}
//       <input
//         type="text"
//         placeholder="Search by name, category or location..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="w-full mb-5 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
//       />

//       <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {filteredProducts.map((product) => (
//           <li
//             key={product._id}
//             className="flex flex-col gap-3 border p-4 rounded shadow hover:shadow-lg"
//           >
//             {product.photo && (
//               <img
//                 src={product.photo}
//                 alt={product.productname}
//                 className="w-full h-48 object-cover rounded"
//               />
//             )}

//             <div className="flex flex-col gap-1">
//               <span className="font-semibold text-lg">
//                 {product.productname || "N/A"}
//               </span>
//               <span>Price: ₹{product.productprice || "N/A"}</span>
//               <span>Status: {product.status || "N/A"}</span>
//               <span>Category: {product.category || "N/A"}</span>
//               <span>Location: {product.userlocation || "N/A"}</span>
//               <p className="text-gray-600 text-sm">
//                 {product.description || "No description"}
//               </p>
//             </div>

//             {/* Claim Button */}
//             {product.status === "not claim" && (
//               <button
//                 onClick={() => handleClaim(product._id)}
//                 className="mt-2 bg-green-700 text-white p-2 rounded hover:bg-green-600"
//               >
//                 Book
//               </button>
//             )}

//             {product.status === "claim" && (
//               <span className="mt-2 text-center text-white bg-gray-500 p-2 rounded">
//                 Booked
//               </span>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export function Product() {
  const data = useLoaderData();

  const initialProducts = Array.isArray(data?.result) ? data.result : [];
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");

  const handleClaim = async (productId) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/product/claim",
        { productId },
        { withCredentials: true }
      );

      alert(response.data.msg || "Product claimed successfully!");

      setProducts((prev) =>
        prev.map((p) =>
          p._id === productId ? { ...p, status: "claim" } : p
        )
      );
    } catch (error) {
      alert(error?.response?.data?.msg || "Failed to claim product");
    }
  };

  const filteredProducts = products.filter((product) => {
    const searchText = search.toLowerCase();
    return (
      product.productname?.toLowerCase().includes(searchText) ||
      product.category?.toLowerCase().includes(searchText) ||
      product.userlocation?.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="p-5 min-h-screen">
      <h2 className="text-2xl font-bold mb-5 text-center">Product List</h2>

      <input
        type="text"
        placeholder="Search by name, category or location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-100 mb-5 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
      />

      {filteredProducts.length === 0 ? (
        <div className="flex justify-center items-center h-64 text-gray-600 text-lg">
          No products found
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <li
              key={product._id}
              className="flex flex-col gap-3 border p-4 rounded shadow hover:shadow-lg"
            >
              {product.photo && (
                <img
                  src={product.photo}
                  alt={product.productname}
                  className="w-full h-48 object-cover rounded"
                />
              )}

              <div className="flex flex-col gap-1">
                <span className="font-semibold text-lg">
                  {product.productname || "N/A"}
                </span>
                <span>Price: ₹{product.productprice || "N/A"}</span>
                <span>Status: {product.status || "N/A"}</span>
                <span>Category: {product.category || "N/A"}</span>
                <span>Location: {product.userlocation || "N/A"}</span>
                <p className="text-gray-600 text-sm">
                  {product.description || "No description"}
                </p>
              </div>

              {product.status === "not claim" && (
                <button
                  onClick={() => handleClaim(product._id)}
                  className="mt-2 bg-green-700 text-white p-2 rounded hover:bg-green-600"
                >
                  Book
                </button>
              )}

              {product.status === "claim" && (
                <span className="mt-2 text-center text-white bg-gray-500 p-2 rounded">
                  Booked
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
