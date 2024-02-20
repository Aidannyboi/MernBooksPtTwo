import { useState, useEffect } from "react";
import axios from "axios"

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
                <div>
                    <div>
                        <h1>{book.Title}</h1>
                        <h2>{book.Author}</h2>
                        <p>{book.Pages}</p>
                        <h2>Is this book avaliable?</h2>
                        <h3>{book.isAvaliable? "Yes" : "No"}</h3>
                    </div>
                </div>
            ))
    )
}

export default Home;