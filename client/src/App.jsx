
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './views/home'
import ViewBook from './components/bookDetail'
import BookForm from './views/bookForm'
import BookUpdate from './components/bookUpdate'

function App() {


  return (
    <> 
      <BrowserRouter>
        <Link to={'/book/create'}> <button className="headerButtons marginIssue">Add A new Book!</button> </Link>
        <Link to={'/'}> <button className="headerButtons marginIssue" >Home</button> </Link>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/book/:id/details' element={<ViewBook/>}/>
          <Route path='/book/create' element={<BookForm/>}/>
          <Route path='/book/:id/update' element={ <BookUpdate/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
