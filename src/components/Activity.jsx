import { useState, useEffect } from 'react';
import axios from 'axios'
import { AiOutlineEllipsis } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import Article from "./Article";

export default function Activity() {
    const [todata, setTodoData] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [done, setDone] = useState([]);
    const [review, setReview] = useState([]);

    async function getData() {
        try {
            const todoData = await axios.get(`http://localhost:3000/todo`);
            const inProgressData = await axios.get(`http://localhost:3000/inprogress`);
            const doneData = await axios.get(`http://localhost:3000/done`);
            const reviewData = await axios.get(`http://localhost:3000/review`);
            setTodoData(todoData.data);
            setInProgress(inProgressData.data);
            setDone(doneData.data);
            setReview(reviewData.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <main className="main">
            <div className="main-container bg-gray-200">
                <section>
                    <Navs name={"To Do"} />
                    <div className="articles">
                        {todata.map((el) => <Article id={el.id} title={el.title} description={el.description} tags={el.tags} />)}
                    </div>
                </section>
                <section>
                    <Navs name={"In Progress"} />
                    <div className="articles">
                        {inProgress.map((el) => <Article id={el.id} title={el.title} description={el.description} tags={el.tags} />)}
                    </div>
                </section>
                <section>
                    <Navs name={"Needs riview"} />
                    <div className="articles">
                        {review.map((el) => <Article id={el.id} title={el.title} description={el.description} tags={el.tags} />)}
                    </div>
                </section>
                <section>
                    <Navs name={"Done"} />
                    <div className="articles">
                        {done.map((el) => <Article id={el.id} title={el.title} description={el.description} tags={el.tags} />)}
                    </div>
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