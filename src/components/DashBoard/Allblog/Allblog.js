import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import OneBlog from '../OneBlog/OneBlog';

const Allblog = () => {
    let [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:8888/blog')
            .then(res => res.json())
            .then(data => {
                setBlogs(data.blog)
            })
    }, [])

    return (
        <Container>
            <div className='row justify-content-center'>
                <h1 className='text-tr my-5 t-color text-center'> Manege All Blog  </h1>
                {
                    blogs.map(blog => <OneBlog key={blog._id} blog={blog} ></OneBlog>)
                }
            </div>
        </Container>
    );
};

export default Allblog;