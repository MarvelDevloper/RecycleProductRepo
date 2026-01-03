import { NavLink } from "react-router-dom";

export function Header() {
    const navClass = ({ isActive }) =>
        isActive
            ? "text-green-400 font-semibold border-b-2"
            : "text-gray-200 hover:text-green-400 transition";

    return (
        <header className="bg-slate-900 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">


                <h1 className="text-2xl font-bold text-green-400">
                    UpCycleProduct
                </h1>

                <nav>
                    <ul className="flex gap-6 text-sm sm:text-base">
                        <li>
                            <NavLink to="/" className={navClass}>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/product" className={navClass}>
                                Product
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/about" className={navClass}>
                                About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/addproduct" className={navClass}>
                                AddProduct
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/profile" className={navClass}>
                                Profile
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
