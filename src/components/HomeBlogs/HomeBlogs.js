import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blogs.css'


const HomeBlogs = () => {
    let [blogs, setBlogs] = useState([])
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch(`https://thawing-woodland-53152.herokuapp.com/blog?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data.blog);
                setDisplayProducts(data.blog);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            })
    }, [page])
    const size = 10;
    return (
        <Container>
            <h1 className='text-tr my-5 t-color text-center'> Our Blog </h1>
            <div className='row justify-content-center' >
                {
                    displayProducts.map(blog => <div key={blog._id} className='mb-4 col-lg-4 col-md-6' >
                        <div className='mx-auto border'>
                            <img className='img-fluid' src={blog.image} alt="" />
                            <div className='p-2' >
                                <h3> {blog.title.slice(0,30)} </h3>
                                <h5> {blog.info} </h5>
                                <h6>category: {blog.category} </h6>
                                <p> Travel Cost: ${blog.cost}</p>
                                <p> Loction: {blog.address}</p>
                                <p className='' >{blog.description.slice(0,120)}</p>
                            </div>
                            <Link className=' btn btn-outline-primary' to={`/blog/${blog._id}`} > Read More </Link>
                        </div>
                    </div>)
                }
                <div className="pagination">
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button
                                className={number === page ? 'selected' : ''}
                                key={number}
                                onClick={() => setPage(number)}
                            >{number + 1}</button>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default HomeBlogs;