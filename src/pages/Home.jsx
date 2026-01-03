import { NavLink } from "react-router-dom";
import RecycleProductHub_Icon from "../Images/RecycleProductHub_Icon.png";

export function Home() {
    return (
        <div className="relative h-screen w-100% flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 gap-10 bg-gray-50">


            <div className="flex flex-col space-y-4 md:w-1/2">
                <h1 className="text-3xl md:text-5xl text-green-800 font-extrabold">
                    Recycle Waste for Future
                </h1>
                <h4 className="uppercase tracking-wider text-gray-700 md:text-lg">
                    Explore the Products from Industries
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ducimus asperiores animi dolorum illum quisquam ullam maiores, nemo veniam? Corrupti necessitatibus, nostrum quibusdam eveniet ducimus adipisci architecto voluptate distinctio vitae dolore, sit eius. Porro dolore repellendus vero, officiis voluptatibus placeat!
                </p>

               <div className="flex flex-row gap-2">
                <NavLink to={'/product'}>
                    <button className="rounded border border-black font-semibold text-black bg-green-400 hover:border-2 hover:bg-green-500 w-50 h-10">Browse Products</button>
                </NavLink>
                <NavLink to={'/addproduct'}>
                    <button className="rounded border border-black font-semibold text-black bg-green-400 hover:border-2 hover:bg-green-500 w-50 h-10">Sell Products</button>
                </NavLink>
               </div>
            </div>

            <div className="md:w-1/2 flex justify-center shadow-lg shadow-black/20 rounded-3xl bg-green-200">
                <img
                    src={RecycleProductHub_Icon}
                    alt="Brand icon"
                    className="w-64 h-64 md:w-100 md:h-95 object-contain"
                />
            </div>

            {/* Start code for shape divider  */}

            <div class="custom-shape-divider-bottom-1767416435">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>

            {/* end of code for shapeDivider we use this opensource code for our project */}
        </div>
    );
}
