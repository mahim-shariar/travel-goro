import React from 'react';
import { Dropdown } from 'react-bootstrap';

const OneBlog = (props) => {
    let { _id, image, title, info, category, cost, address, description } = props.blog;
    const handleSubmit = (e) => {
        const id = { _id }
        fetch(`https://thawing-woodland-53152.herokuapp.com/blog?role=${'panding'}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(id)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                }
            })
        e.preventDefault()
    }
    return (
        <div className='mb-4 col-lg-4 col-md-6' >
            <div className='mx-auto'>
                <img className='img-fluid' src={image} alt="" />
                <div className='p-2' >
                    <h3> {title} </h3>
                    <h5> {info} </h5>
                    <h6>{category} </h6>
                    <p>${cost}</p>
                    <p>{address}</p>
                    <p className='' >{description}</p>
                    <Dropdown >
                        <Dropdown.Toggle className='btn btn-primary nav-link mx-auto' variant="success" id="dropdown-basic">
                            All thing
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={handleSubmit} >panding</Dropdown.Item>
                            <Dropdown.Item onClick={handleSubmit} >accept</Dropdown.Item>
                            <Dropdown.Item onClick={handleSubmit} >cancel</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};

export default OneBlog;