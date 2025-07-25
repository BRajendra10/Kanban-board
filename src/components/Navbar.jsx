import { NavLink } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
    return (
        <nav className="navbar flex justify-end bg-gray-50 px-5">
            <ul className="w-3/6 lg:w-2/6 h-[60px] hidden md:flex justify-around items-center">
                <NavLink to={"/"} className="text-sm uppercase cursor-pointer hover:border-b-2 hover:border-blue-300">Activty</NavLink>
                <NavLink to={"/team"} className="text-sm uppercase cursor-pointer hover:border-b-2 hover:border-blue-300">Team</NavLink>
                <NavLink to={"/signup"} className="text-sm uppercase cursor-pointer hover:border-b-2 hover:border-blue-300">Sign Up</NavLink>
                <NavLink to={"/add-to-do"} className="text-sm uppercase cursor-pointer hover:border-b-2 hover:border-blue-300">Add to-do</NavLink>
            </ul>

            <User />
        </nav>
    )
}

export function User() {
    return (
        <div className="w-3/6 lg:w-4/6 flex justify-end items-center gap-5">
            <button className="hidden md:block p-2 rounded-full hover:bg-gray-200">
                <IoMdNotificationsOutline size={22} />
            </button>

            <div className="user h-[60px] flex items-center gap-4">
                <span className="hidden lg:block cursor-pointer">Robin Quinn</span>
                <div className="w-[40px] h-[40px] rounded-full">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user_img" className="w-full h-full object-cover rounded-full" />
                </div>
            </div>

            <button className="block md:hidden p-2 rounded-full hover:bg-gray-200">
                <AiOutlineMenu size={22} />
            </button>
        </div>
    )
}