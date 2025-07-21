import { AiOutlineEllipsis } from "react-icons/ai";

export default function Main() {
    return (
        <main className="main">
            <div className="main-container bg-gray-200">
                <section>
                    <Navs name={"To Do"} />
                </section>
                <section>
                    <Navs name={"Progress"} />
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

export function Navs({name}) {
    return (
        <div className="w-full h-[50px] flex justify-between items-center px-5">
            <h2 className="text-xl">{name}</h2>
            <button><AiOutlineEllipsis size={30} style={{ color: "gray" }} /></button>
        </div>
    )
}