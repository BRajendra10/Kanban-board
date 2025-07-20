import { IoMdNotificationsOutline } from "react-icons/io";

export default function Navbar() {
    return (
        <nav className="w-full flex bg-gray-50 px-5">
            <ul className="w-2/5 h-[60px] flex justify-evenly items-center">
                <li className="text-sm uppercase cursor-pointer hover:border-b-2 hover:border-blue-300 transition-700">Activty</li>
                <li className="text-sm uppercase cursor-pointer hover:border-b-2 hover:border-blue-300 transition-700">Team</li>
                <li className="text-sm uppercase cursor-pointer hover:border-b-2 hover:border-blue-300 transition-700">Messages</li>
                <li className="text-sm uppercase cursor-pointer hover:border-b-2 hover:border-blue-300 transition-700">Settings</li>
            </ul>
            
            <div className="w-3/5 flex justify-end items-center gap-8">
                <button className="p-2 rounded-full hover:bg-gray-200">
                    <IoMdNotificationsOutline size={22} />
                </button>

                <div className="user h-[60px] flex items-center gap-4">
                    <span className="cursor-pointer">Robin woodword</span>
                    <div className="w-[40px] h-[40px] rounded-full">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user_img" className="w-full h-full object-cover rounded-full" />
                    </div>
                </div>
            </div>
        </nav>
    )
}