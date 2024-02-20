import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const ViewBook = () => {

const [book, setBook] = useState([]);
const {id} = useParams();

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
        <h1>{book.Title}</h1>
    </div>
)}

export default ViewBook