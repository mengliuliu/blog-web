import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Box>
            <div className='name'>
                <a className="logo" href="/">子皿文刀</a>
            </div>
            <div className='category'>
                <div className='home'>首页</div>
                <div className='about'>关于</div>
                <div className='message'>留言</div>
            </div>
        </Box >

    )
}

const Box = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
.name {
display: flex;
align-items: center;
.logo {
    display: block;
    font-size: 25px;
    font-weight: bolder;
    color: #4d444f;
    line-height: 25px;
    text-decoration:none;
}
}
.category{
    display: flex;
    align-items: center;
    .home {
        width: 50px;
    }
    .about {
        width: 50px;
    }
    .message {
        width: 50px;
    }
    
}
`

export default Header