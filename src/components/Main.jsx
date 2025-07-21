import { useState } from 'react';
import Article from "./Article";
import { AiOutlineEllipsis } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";

export default function Main() {
    const [isClicked, setisClicked] = useState(false);

    return (
        <main className="main">
            <div className="main-container bg-gray-200">
                <section>
                    <Navs name={"To Do"} />
                    <div className="articles">
                        <Article />

                        <button className="flex items-center gap-2 w-full h-[90px] bg-gray-100 text-gray-500 p-5" onClick={() => setisClicked(!isClicked)}>
                            Add <FaPlus />
                        </button>
                    </div>
                </section>
                <section>
                    <Navs name={"In Progress"} />
                </section>
                <section>
                    <Navs name={"Needs riview"} />
                </section>
                <section>
                    <Navs name={"Done"} />
                </section>
            </div>
        </main>
    )
}

export function Navs({ name }) {
    return (
        <div className="flex justify-between items-center px-5">
            <h2 className="text-lg font-bold uppercase">{name}</h2>
            <button><AiOutlineEllipsis size={30} style={{ color: "gray" }} /></button>
        </div>
    )
}