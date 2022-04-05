import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './view/home'
import Detail from './view/detail'
import Header from './components/header'
import styled from 'styled-components'

const App = () => {
    return (
        <Box>
            <Header></Header>
            <div className='main'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/detail/:id' element={<Detail />} />
                </Routes>
            </div>

            {/* <Home></Home> */}
        </Box>

    )
}

const Box = styled.div`
    width: 80%;
    margin: auto;
    .main {
        height: calc(100vh - 80px);
        /* overflow: auto; */
    }
`

export default App