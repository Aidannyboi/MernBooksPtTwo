import { useState } from "react"
import axios from "axios";

import { useNavigate } from "react-router-dom";


const BookForm = () => {
    
    const [Title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");

    const [Author, setAuthor] = useState("");
    const [authorError, setAuthorError] = useState("");

    const [Pages, setPages] = useState("");
    const [pagesError, setPagesError] = useState("");

    const [isAvaliable, setIsAvaliable] = useState(false);

    const navigate = useNavigate();


    const handleTitle = (e) => {
        setTitle(e.target.value)
        if(e.target.value.length < 1) {

            setTitleError("The book has to be called something!")

        }else if (e.target.value.length < 2){
            setTitleError("Title must be at least 2 characters long!")
            
        }else if (e.target.value.length > 255){
            setTitleError("The authors name must be less than 255 characters!")

        } else{ 
            setTitleError("")
        }
    }

    const handleAuthor = (e) => {
        setAuthor(e.target.value)
        if(e.target.value.length < 1) {

            setAuthorError("The books has to have an author!")

        }else if (e.target.value.length < 2){

            setAuthorError("The authors name must have at least 5 characters!")

        }else if (e.target.value.length > 255){

            setAuthorError( "The authors name must be less than 255 characters!")

        } else{ 
            setAuthorError("")
        }
    }

    const handlePages = (e) => {
        setPages(e.target.value)
        if(e.target.value <= 0) {

            setPagesError("A book obviously has to have pages!")

        }else{ 
            setPagesError("")
        }
    }
    const handleAvaliable = (e) => {
        console.log(e.target.checked)
        setIsAvaliable(e.target.checked)
    }

    const SubmitHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:9999/api/books', {
            Title,
            Author,
            Pages,
            isAvaliable
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            navigate("/")
        })
    }
    return (
        <div className="formSpacing"> 
            <form onSubmit={SubmitHandler} className="formDetail">

                <label>Title:</label>
                <p className="error">{titleError}</p>
                <input type="text" onChange={handleTitle} value={Title}/>

                <label>Author:</label>
                <p className="error">{authorError}</p>
                <input type="text" onChange={handleAuthor} value={Author}/>

                <label>Pages:</label>
                <p className="error">{pagesError}</p>
                <input type="number" onChange={handlePages} value={Pages}/>

                <label>Is it avaliable?</label>
                <input type="checkbox" onChange={handleAvaliable} value={isAvaliable}/>

                <button> Submit Book!</button>

            </form>
        </div>
    )
}

export default BookForm