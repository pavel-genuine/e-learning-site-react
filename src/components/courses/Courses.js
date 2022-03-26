import React, { useEffect, useState } from 'react';
import Course from '../Course.js/Course';
import SelectedItems from '../selectedItems/SelectedItems';
import './courses.css'

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
     if(newSelectedItems.indexOf(newCourse)>3){
         newSelectedItems.pop()
         alert('Selecting more than 4 courses at a time is not allowed')
     }

       
    
       console.log(newSelectedItems);



   
       setSelectedItems(newSelectedItems)

    

    }

    const empty = ()=>{
        setSelectedItems([])
    }

    return (
        <div  className='row w-100' >
        <div className='col-8'>
        <div className='courses'>
            {
                courses.map(course=><Course  key={course.id} handler={addSelected} course={course}> </Course>)
            }
        </div>
        </div>
        <div className='col-2'>
        <SelectedItems empty={empty} selectedItems={selectedItems}  ></SelectedItems>
        </div>
        </div>
    );
};

export default Courses;