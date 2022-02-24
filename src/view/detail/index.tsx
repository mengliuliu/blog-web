import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Detail = () => {
    return (
        <Box>
            <div>Detail</div>
            <div><Link to="/home">首页</Link></div>
        </Box>

    )
}

const Box = styled.div`
`

export default Detail