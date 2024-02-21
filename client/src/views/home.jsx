import { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9999/api/books")
            .then((res) => {
                console.log(res.data);
                setBooks(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (
            books.map((book, index) =>(

                    <div className="mainBorder">
                        <h1 className="mainText">Name: {book.Title}</h1>
                        <h2 className="mainText">Author: {book.Author}</h2>
                        <p className="mainText">Pages: {book.Pages}</p>
                        <h2 className="mainText">Is this book avaliable?</h2>
                        <h3 className="mainText">{book.isAvaliable? "Yes" : "No"}</h3>
                        <div className="buttonRow">
                            <a href={'/book/'+ book._id +'/details'}>
                                <button className="view"> View Book! </button>
                            </a>
                        </div>
                    </div>
                    
            ))
    )
}

export default Home;