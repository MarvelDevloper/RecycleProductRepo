import { useState } from "react"

export function AddProduct() {

    let [productData, setProductData] = useState({
        productname: "",
        productprice: "",
        productimage: null,
        productavailability: "",
        status: "",
        userlocation: ""
    })
    let handleSubmit = (e) => {
        e.prevendDefault()

    }
    return (
        <div className="flex flex-col h-screen w-screen">
            <form onSubmit={handleSubmit}>
                <div className="bg-green-100 shadow-lg shadow-black/20 flex flex-col justify-center items-center content-center m-20 rounded-2xl p-10 gap-3">
                    <input
                        type="text"
                        name="productname"
                        placeholder="Product Name"
                        value={productData.productname}
                        onChange={(e) => {
                            setProductData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                        }}
                        className="border-2 p-2 w-100 rounded border-green-500"
                        required
                    />
                    <input
                        type="number"
                        name="productprice"
                        placeholder="Product Price"
                        value={productData.productprice}
                        onChange={(e) => {
                            setProductData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                        }}
                        className="border-2 p-2 w-100 rounded border-green-500"
                        required
                    />
                    <input
                        type="file"
                        name="productimage"
                        accept="image/*"
                        onChange={(e) => {
                            setProductData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                        }}
                        className="border-2 p-2 w-100 rounded border-green-500"
                        required
                    />
                    <input
                        type="text"
                        name="productavailability"
                        placeholder="Availability (e.g., In Stock)"
                        value={productData.productavailability}
                        onChange={(e) => {
                            setProductData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                        }}
                        className="border-2 p-2 w-100 rounded border-green-500"
                        required
                    />
                    <input
                        type="text"
                        name="status"
                        placeholder="Status (e.g., Active)"
                        value={productData.status}
                        onChange={(e) => {
                            setProductData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                        }}
                        className="border-2 p-2 w-100 rounded border-green-500"
                        required
                    />
                    <input
                        type="text"
                        name="userlocation"
                        placeholder="Your Location"
                        value={productData.userlocation}
                        onChange={(e) => {
                            setProductData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                        }}
                        className="border p-2 border-green-500 rounded w-100"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-green-700 text-white p-2 rounded w-100 hover:bg-green-600"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    )
}