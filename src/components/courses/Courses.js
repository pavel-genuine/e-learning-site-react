import React, { useEffect, useState } from 'react';
import Course from '../Course.js/Course';
import SelectedItems from '../selectedItems/SelectedItems';

const Courses = () => {
   
    const [courses, setCourses]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])

    return (
        <div  className='row w-100' >
        <div className='col-10'>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>
            {
                courses.map(course=><Course  key={course.id} course={course}> </Course>)
            }
        </div>
        </div>
        <div className='col-2'>
        <SelectedItems  ></SelectedItems>
        </div>
        </div>
    );
};

export default Courses;