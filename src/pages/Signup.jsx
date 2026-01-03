// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { signup } from "../api/fetchTask";

// export default function Signup() {
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         phone: "",
//         location: "",
//         role: "user",
//     });

//     const [message, setMessage] = useState(""); // to show API messages
//     const [error, setError] = useState(""); // to show errors separately

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setMessage("");
//         setError("");

//         try {
//             const res = await signup(formData);

//             if (res.status === 201) {
//                 setMessage(res.data.msg); // success message from backend
//                 alert(res.data.msg);
//                 navigate("/"); 
//             }
//         } catch (error) {
//             if (error.response && error.response.data) {
//                 setError(error.response.data.msg); // show exact backend message
//             } else {
//                 setError("Something went wrong. Try again!");
//             }
//             console.log(error);
//         }
//     };

//     return (
//         <div style={{ maxWidth: "400px", margin: "auto" }}>
//             <h2>Signup</h2>
//             <form onSubmit={handleSubmit}>
//                 <input name="name" placeholder="Name" onChange={handleChange} /><br />
//                 <input name="email" placeholder="Email" onChange={handleChange} /><br />
//                 <input
//                     name="password"
//                     placeholder="Password"
//                     type="password"
//                     onChange={handleChange}
//                 /><br />
//                 <input name="phone" placeholder="Phone" onChange={handleChange} /><br />
//                 <input name="location" placeholder="Location" onChange={handleChange} /><br />
//                 <select name="role" onChange={handleChange}>
//                     <option value="user">User</option>
//                     <option value="admin">Admin</option>
//                 </select>
//                 <br /><br />
//                 <button type="submit">Signup</button>
//             </form>

//             {/* Display messages */}
//             {message && <p style={{ color: "green" }}>{message}</p>}
//             {error && <p style={{ color: "red" }}>{error}</p>}
//         </div>
//     );
// }


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/fetchTask";

export default function Signup() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        location: "",
        role: "user",
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        try {
            const res = await signup(formData);

            if (res.status === 201) {
                setMessage(res.data.msg);
                alert(res.data.msg);
                navigate("/");
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.msg);
            } else {
                setError("Something went wrong. Try again!");
            }
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Signup</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        name="name"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        name="email"
                        required
                        placeholder="Email"
                        onChange={handleChange}
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        name="password"
                        required
                        placeholder="Password"
                        type="password"
                        onChange={handleChange}
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        name="phone"
                        required
                        placeholder="Phone"
                        onChange={handleChange}
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        name="location"
                        required
                        placeholder="Location"
                        onChange={handleChange}
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <select
                        name="role"
                        required
                        onChange={handleChange}
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                    <button
                        type="submit"
                        className="bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                    >
                        Signup
                    </button>
                </form>

                {message && <p className="mt-4 text-green-600 font-medium">{message}</p>}
                {error && <p className="mt-4 text-red-600 font-medium">{error}</p>}
            </div>
        </div>
    );
}
