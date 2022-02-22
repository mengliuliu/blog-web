import React, { useEffect, useState } from 'react'
import Home from './view/home'
import styled from 'styled-components'

const App = () => {
    return (
        <Box>
            <div>App</div>
            <Home></Home>
        </Box>

    )
}

const Box = styled.div`
`

export default App