import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './components/RootLayOut'
import Homepages from './pages/Homepages'
import Detail from './pages/Detail'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Video from './pages/Video'
import Detail1 from './pages/Detail1'
import Search from './pages/Search'
// import pageMeal from './pages/pageMeal'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayOut />} >
          <Route index element={<Homepages />} />
          <Route path='/meals/detail/:id' element={<Detail />} />
          <Route path='meals/Header' element={<Header />} />
          <Route path='about' element={<About />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='Home' element={<Home />} />
          <Route path='video' element={<Video />} />
          <Route path='Searchmeal/:search' element={<Search />} />
          {/* <Route path='/searchmeal/:page:page' element={pageMeal />} /> */}


          <Route path='meals/Detail1/:id1' element={<Detail1 />} />

        </Route>





      </Routes>
    </>
  )
}

export default App
