import { IoIosLink } from "react-icons/io";

export default function Article({id, title, description}) {
    return (
        <article className="bg-gray-50 rounded-xl p-5" key={id}>
            {/* <div className="tags flex gap-2">
                <span className="bg-red-100 py-1 px-2 rounded-sm">Important</span>
                <span className="bg-yellow-100 py-1 px-2 rounded-sm">Frontend Development</span>
            </div> */}

            <h2 className="heading text-lg font-semibold">{title}</h2>
            <p className="discription">{description}</p>

            <div className="info">
                <span className="cursor-pointer flex items-center gap-2"> <IoIosLink /> 2 Attachment</span>
            </div>
        </article>
    )
}