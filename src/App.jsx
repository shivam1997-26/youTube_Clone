import React, { useState } from 'react'
import Header from './shared/Header'
import './App.css'
import Footer from './shared/Footer'
import MainSidebar from './shared/MainSidebar'
import MainVideoContainer from './component/MainVideoContainer'
import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from './component'

const App = () => {

  const [selectedMenu, setSelectedMenu] = useState('New')

  const handleMenu = (data) => {
    setSelectedMenu(data)
  }
  return (

    <>

      <div className='row'>
        <div className='col-12'>
          <Header />
        </div>
        <div className='col-12 col-md-2'>


          <MainSidebar handleMenu={handleMenu} setSelectedMenu={setSelectedMenu} selectedMenu={selectedMenu} />
        </div>
        <div className='col-12 col-md-10'>
          <h2>{selectedMenu}</h2>
          <MainVideoContainer selectedMenu={selectedMenu} />
        </div>
        <div className='col-12'>
          <Footer />
        </div>
      </div>
      {/* <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id' exact element={<VideoDetail />} />
          <Route path='/channel/:id' exact element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' exact element={<SearchFeed />} />
        </Routes>
      </Box> */}

    </>
  )
}

export default App