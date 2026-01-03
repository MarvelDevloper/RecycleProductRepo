// import { useState } from "react";
// import { storeProduct } from "../api/fetchTask";

// export function AddProduct() {
//   const [productData, setProductData] = useState({
//     productname: "",
//     productprice: "",
//     description: "",
//     category: "",
//     photo: null,
//     status: "",
//     userlocation: "",
//   });

//   const handleChange = (e) => {
//     setProductData({ ...productData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setProductData({ ...productData, photo: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   const formData = new FormData();

//   formData.append("productname", productData.productname);
//   formData.append("productprice", productData.productprice);
//   formData.append("description", productData.description);
//   formData.append("category",productData.category)
//   formData.append("status", productData.status);
//   formData.append("userlocation", productData.userlocation);
//   formData.append("photo", productData.photo);

//   try {
//     const response = await storeProduct(formData);
//     console.log("Product stored:", response.data);
//     alert(response.data.msg || "Product added successfully");
//   } catch (error) {
//     console.error(error);
//     alert(
//       error?.response?.data?.msg || "Failed to add product"
//     );
//   }
// };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-green-100 shadow-xl p-10 rounded-2xl flex flex-col gap-3 w-100"
//       >
//         <input
//           type="text"
//           name="productname"
//           placeholder="Product Name"
//           onChange={handleChange}
//           className="border p-2 rounded"
//           required
//         />

//         <input
//           type="number"
//           name="productprice"
//           placeholder="Product Price"
//           onChange={handleChange}
//           className="border p-2 rounded"
//           required
//         />

//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="border p-2 rounded"
//           required
//         />

//         <input
//           type="text"
//           name="status"
//           placeholder="Status"
//           onChange={handleChange}
//           className="border p-2 rounded"
//           required
//         />

//         <input
//           type="text"
//           name="userlocation"
//           placeholder="Your Location"
//           onChange={handleChange}
//           className="border p-2 rounded"
//           required
//         />

//          <input
//           type="text"
//           name="description"
//           placeholder="Description"
//           onChange={handleChange}
//           className="border p-2 rounded"
//           required
//         />

//          <input
//           type="text"
//           name="category"
//           placeholder="category"
//           onChange={handleChange}
//           className="border p-2 rounded"
//           required
//         />

//         <button className="bg-green-700 text-white p-2 rounded hover:bg-green-600">
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// }


import { useState } from "react";
import { storeProduct } from "../api/fetchTask";

export function AddProduct() {
  const [productData, setProductData] = useState({
    productname: "",
    productprice: "",
    description: "",
    category: "",
    photo: null,
    status: "",
    userlocation: "",
  });

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setProductData({ ...productData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productname", productData.productname);
    formData.append("productprice", productData.productprice);
    formData.append("description", productData.description);
    formData.append("category", productData.category);
    formData.append("status", productData.status);
    formData.append("userlocation", productData.userlocation);
    formData.append("photo", productData.photo);

    try {
      const response = await storeProduct(formData);
      console.log("Product stored:", response.data);
      alert(response.data.msg || "Product added successfully");
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.msg || "Failed to add product");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl p-10 rounded-3xl flex flex-col gap-5 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Add New Product
        </h2>

        <input
          type="text"
          name="productname"
          placeholder="Product Name"
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <input
          type="number"
          name="productprice"
          placeholder="Product Price"
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <input
          type="text"
          name="status"
          placeholder="Status"
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <input
          type="text"
          name="userlocation"
          placeholder="Your Location"
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <button className="bg-green-600 text-white font-semibold p-3 rounded-lg hover:bg-green-500 transition duration-300">
          Add Product
        </button>
      </form>
    </div>
  );
}




