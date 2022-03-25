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

    const [selectedItems, setSelectedItems] = useState([])

    const addSelected=(id)=>{

        let newSelectedItems=[]

       
       const newCourse = courses.find(item=>item.id===id)

       if (!selectedItems.includes(newCourse)) {

        
        newSelectedItems=[...selectedItems,newCourse]
           
       }
       else{
        const rest = selectedItems.filter(product=>product.id !==id)
        
        newSelectedItems=[...rest,newCourse]
        alert('You can not slected a course twice, We will remove the previous one and add the last one ')
       }

    //    if (newSelectedItems.indexOf(newCourse)===-1){
    //     newSelectedItems=[...selectedItems,newCourse]
    //    }
       console.log(newSelectedItems);

    //  if (newSelectedItems.in )
       setSelectedItems(newSelectedItems)

    }

    return (
        <div  className='row w-100' >
        <div className='col-10'>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>
            {
                courses.map(course=><Course  key={course.id} handler={addSelected} course={course}> </Course>)
            }
        </div>
        </div>
        <div className='col-2'>
        <SelectedItems selectedItems={selectedItems}  ></SelectedItems>
        </div>
        </div>
    );
};

export default Courses;