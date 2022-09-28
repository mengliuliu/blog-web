import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./view/home"
import Detail from "./view/detail"
import About from "./view/about"
import Header from "./components/header"
import styled from "styled-components"

const App = () => {
  return (
    <Box>
      <Header></Header>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
      <div className="icp">皖ICP备2021015959号-1</div>
    </Box>
  )
}

const Box = styled.div`
  width: 75%;
  @media screen and (max-width: 1024px) {
    width: 75%;
  }
  /* ipad */
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  /* iphone6 7 8 plus */
  @media screen and (max-width: 414px) {
    width: 85%;
  }
  margin: auto;
  .main {
    height: calc(100vh - 110px);
    /* overflow: auto; */
  }
  .icp {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default App
