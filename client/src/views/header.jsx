
import { Link } from "react-router-dom"

const Header = () => {

return(
    <>
        <div className="topPage">

            <div className="header">
                <Link to={'/book/create'}> <button className="headerButtons marginIssue" >Create</button> </Link>
                <Link to={'/'}> <button className="headerButtons marginIssue" >Home</button> </Link>
            </div>

            <h1> Books Galore!</h1>
        
        </div>
    </>
    
)

}

export default Header;