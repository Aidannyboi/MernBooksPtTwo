
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './views/home'
import ViewBook from './components/bookDetail'
import BookForm from './views/bookForm'

function App() {


  return (
    <> 
      <BrowserRouter>
        <Link to={'/book/create'}> Add a new book! </Link>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/book/:id/details' element={<ViewBook/>}/>
          <Route path='/book/create' element={<BookForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
