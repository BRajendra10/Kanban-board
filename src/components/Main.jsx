import { AiOutlineEllipsis } from "react-icons/ai";
import { IoIosLink } from "react-icons/io";

export default function Main() {
    return (
        <main className="main">
            <div className="main-container bg-gray-200">
                <section>
                    <Navs name={"To Do"} />
                    <div className="articles">
                        <Article />
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

export function Article() {
    return (
        <article className="bg-gray-50 rounded-xl p-5">
            <div className="tags flex gap-2">
                <span className="bg-red-100 py-1 px-2 rounded-sm">Important</span>
                <span className="bg-yellow-100 py-1 px-2 rounded-sm">Frontend Development</span>
            </div>

            <h2 className="heading text-lg font-semibold">Kanban project</h2>
            <p className="discription">Create a kanban project. Make simple version with 4 section, todo, in progress, need rivew, done.</p>

            <div className="info">
                <span className="cursor-pointer flex items-center gap-2"> <IoIosLink /> 2 Attachment</span>
            </div>
        </article>
    )
}