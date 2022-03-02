import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ModuleApi from '@src/network/index'
// const getArticles = require('@src/network')
import styled from 'styled-components'

const List = () => {
    useEffect(() => {
        getArticleList()
    }, [])

    const getArticleList = async () => {
        console.log('getArticles', ModuleApi)
        const res = await ModuleApi.getArticles()
        console.log('res', res)
    }


    return (
        <Box>
            {/* <div>List</div> */}
            {/* <nav>
                <Link to="/detail">Detail</Link>
            </nav> */}

            <div className='item'>
                <h2><Link to="/detail">基于PromisesA+规范手写Promise</Link></h2>
                <div className='description'>Promise 对象用于表示一个异步操作的最终完成 (或失败)及其结果值。一个 Promise 对象代表一个在这个 promise 被创建出来时不一定已知的值。它让您能够把异步操作最终的成功返回值或者失败原因和相应的处理程序关联起来。 这样使得异步方法可以像同步方法那样返回值：异步方法并不会立即返回最终的值，而是会返回一个 promise，以便在未来某个时候把值交给使用者。Promise 可以让异步操作写起来，就像在写同步操作的流程，而不必一层层地嵌套回调函数。</div>
                <div className='date'>发布时间：2021-09-14 评论(10)</div>
            </div>

            <div className='item'>
                <h2><Link to="/detail">基于PromisesA+规范手写Promise</Link></h2>
                <div className='description'>Promise 对象用于表示一个异步操作的最终完成 (或失败)及其结果值。一个 Promise 对象代表一个在这个 promise 被创建出来时不一定已知的值。它让您能够把异步操作最终的成功返回值或者失败原因和相应的处理程序关联起来。 这样使得异步方法可以像同步方法那样返回值：异步方法并不会立即返回最终的值，而是会返回一个 promise，以便在未来某个时候把值交给使用者。Promise 可以让异步操作写起来，就像在写同步操作的流程，而不必一层层地嵌套回调函数。</div>
                <div className='date'>发布时间：2021-09-14 评论(10)</div>
            </div>
        </Box>

    )
}

const Box = styled.div`
.item {
    margin-bottom: 15px;
    h2 {
        a {
          color: #3e3b3f;  
        }
        display: inline-block;
        white-space: nowrap; 
        width: 100%; 
        overflow: hidden;
        text-overflow:ellipsis;
    }
    .description {
        /* display: block;
        line-height: 25px;
        font-size: 14px; */
        color: #666;
        display: inline-block;
        white-space: nowrap; 
        width: 100%; 
        overflow: hidden;
        text-overflow:ellipsis;
    }
    .date {
        text-align: right;
    }
}

`

export default List