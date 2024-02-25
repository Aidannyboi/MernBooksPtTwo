
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './views/home'
import ViewBook from './components/bookDetail'
import BookForm from './views/bookForm'
import BookUpdate from './components/bookUpdate'
import Header from './views/header'

function App() {


  return (
    <> 
      <BrowserRouter>
        <>
          <Header/>
        </>
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
