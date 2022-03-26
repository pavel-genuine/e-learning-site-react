import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


const Course = (props) => {
    const {name, price, img}=props.course

    return (
        <div style={{margin:'10px', position:'relative', height:'380px'}}  className='border border-primary rounded  '>
            <img className='w-100' src={img} alt="" />
            <h4>{name}</h4>
            <h5>Price : ${price}</h5>
            <button onClick={()=>props.handler(props.course.id)} style={{backgroundColor:'blue',padding:'7px', position:'absolute', bottom:'0', width:'100%', color:'white', border:'0' }} >
            <FontAwesomeIcon icon={faCartPlus} /> <span className='m-2'>Select Course</span> </button>
        </div>
    );
};

export default Course;