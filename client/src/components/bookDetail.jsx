import axios from "axios";
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";

const ViewBook = () => {

const navigate = useNavigate();
const [book, setBook] = useState([]);
const {id} = useParams();

const DeleteBook = () => {
    axios.delete('http://localhost:9999/api/book/' + id)
        .then((res) => {
            console.log(res.data);
            navigate("/")
        })
}
useEffect(() => {
    axios.get('http://localhost:9999/api/book/' + id)
        .then((res) => {
            console.log(res.data);
            setBook(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
}, [])

return ( 
    <div>
        <h1>Books Name: {book.Title}</h1>
        <h2>Authors Name: {book.Author}</h2>
        <h3>Pages: {book.Pages}</h3>
        <h3>{book.isAvaliable? "This Book is Avaliable!" : "This Book is not Avaliable."}</h3>
        <button className="view" onClick={DeleteBook}>Delete Book?</button>
    </div>
)}

export default ViewBook