import React, { useState } from 'react';

const SelectedItems = (props) => {

    const {selectedItems}=props

    let content =[]
    

    for (const item of selectedItems){
        const name =item.name
        const image = item.img

        const obj = [name,image]
        content.push(obj)
      
    }

  
    let newContent = content.map(element=><li key={element} ><img style={{width:'40px'}} src={element[1]} alt="" />  {element[0]}</li>)

    const [choose, setChoose] = useState('')

    const chooseOne = ()=>{

        let i = Math.floor(Math.random() * content.length)
        // let  = content.map(element=><li key={element} ><img style={{width:'40px'}} src={element[1]} alt="" />  {element[0]}  </li>)

        const oneName =newContent[i]
        setChoose(oneName)
    }


    return (
        <div style={{margin:'30px', border:'2px solid blue', padding:'10px'}}>
             <div>
           <h6 className='text-center bg-primary text-white p-2'> Selected Courses :</h6>
           {newContent}
        

        </div>

      <button style={{margin:'10px', padding:'4px', border:'0', color:'white', backgroundColor:'blue'}} onClick={chooseOne} >Choose One</button>

       <button style={{margin:'10px', padding:'4px', border:'0', color:'white', backgroundColor:'blue'}} onClick={props.empty} >Choose Again</button>


         <div>
             <h6>Choosed One :</h6> 
             <h6>{choose} </h6>
         </div>


       
        </div>
    );
};

export default SelectedItems;

