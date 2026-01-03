import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-gray-200 px-6 pt-12 pb-6">
            <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-4">

                <div>
                    <h3 className="text-xl font-semibold text-green-400 mb-3">
                        UpCycle Connect
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-300">
                        UpCycle Connect is a hyper-local sustainability platform that helps
                        colleges and small industries redistribute reusable lab and
                        industrial waste to students and innovators, reducing landfill
                        waste and carbon emissions.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-medium text-green-400 mb-3">
                        Quick Links
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                  <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-green-400 font-semibold" : "hover:text-green-400"
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/product"
                                className={({ isActive }) =>
                                    isActive ? "text-green-400 font-semibold" : "hover:text-green-400"
                                }
                            >
                                Browse Materials
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/addproduct"
                                className={({ isActive }) =>
                                    isActive ? "text-green-400 font-semibold" : "hover:text-green-400"
                                }
                            >
                                Request Material
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? "text-green-400 font-semibold" : "hover:text-green-400"
                                }
                            >
                                Impact Dashboard
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/profile"
                                className={({ isActive }) =>
                                    isActive ? "text-green-400 font-semibold" : "hover:text-green-400"
                                }
                            >
                                My Account
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-medium text-green-400 mb-3">
                        Sustainability Impact
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>♻️ Materials Reused: <span className="font-semibold">120 kg</span></li>
                        <li>🌱 CO₂ Reduced: <span className="font-semibold">45 kg</span></li>
                        <li>🏫 Active Providers: <span className="font-semibold">18</span></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-medium text-green-400 mb-3">
                        Contact & Support
                    </h4>
                    <p className="text-sm text-gray-300">📧 support@upcycleconnect.in</p>
                    <p className="text-sm text-gray-300">📍 VESIT Campus</p>
                    <p className="text-sm text-gray-300 mt-1">🛠 Report an Issue</p>
                </div>

            </div>
            <div className="border-t border-slate-700 mt-10 pt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 max-w-7xl mx-auto">
                <p>© 2026 <span className="font-bold text-red-600">UpCycle Connect.</span> All rights reserved.</p>
                <p className="mt-2 sm:mt-0">
                    Built for Sustainability ♻️
                </p>
            </div>
        </footer>
    );
}
