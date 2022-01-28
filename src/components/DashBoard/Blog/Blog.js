import { Typography, } from '@mui/material';
import { Alert } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const style = {
    margin: '3px',
    padding: '14px',
    border: `1px solid gray`,
    borderRadius: '7px',
    marginTop: '2%',
}

const Blog = () => {
    const [success, setSuccess] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        let allData = {...data,status:true,isPending:true}
        fetch('https://thawing-woodland-53152.herokuapp.com/blog', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    setSuccess(true)
                    reset()
                }
            })
    };
    return (
        <div>
            <Typography variant='h3' className='text-center mb-3' sx={{ fontWeight: '900' }}>
                Add Your BLOG
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: 'column', width: '40%', margin: 'auto' }}>
                <input type="text"  {...register("image")}
                    style={style}
                    placeholder='Add image'
                />
                <input type="text"  {...register("title")}
                    style={style}
                    placeholder='Add title'
                />
                <input type="text" {...register("category")}
                    style={style}
                    placeholder='Add category'
                />
                <input type="number"  {...register("cost")}
                    style={style}
                    placeholder='Add travel cost'
                />
                <input type="text" {...register("address")}
                    style={style}
                    placeholder='Location & address'
                />
                <textarea type="text" {...register("info")}
                    style={style}
                    placeholder='Add your info'
                />
                <textarea type="text" {...register("description")}
                    style={style}
                    placeholder='Add description'
                />
                <input type="submit"
                    style={{ color: 'withe', fontWeight: 'bold', fontSize: '15px' }} className='btn btn-primary mt-3 ' value='Add' />
                {success && <Alert severity='success'> Blog Added Successfully </Alert>}
            </form>
        </div>
    );
};

export default Blog;