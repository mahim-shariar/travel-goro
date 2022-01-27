import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogInfo = () => {
    let [blog, setblog] = useState({})
    let { id } = useParams();
    let { title, image, info, category, cost, address, description } = blog;
    useEffect(() => {
        fetch(`https://thawing-woodland-53152.herokuapp.com/blog/${id}`)
            .then(res => res.json())
            .then(data => setblog(data))
    }, [id])
    return (
        <div className='mb-4 col-lg-4 col-md-6 mx-auto mt-5 ' >
            <div className='mx-auto border'>
                <img className='img-fluid' src={image} alt="" />
                <div className='p-2' >
                    <h3> {title} </h3>
                    <h5> {info} </h5>
                    <h6>category: {category} </h6>
                    <p> Travel Cost: ${cost}</p>
                    <p> Loction: {address}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogInfo;