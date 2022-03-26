import React, { useState } from 'react';

const SelectedItems = (props) => {

    const {selectedItems}=props

    let names =[]
    const images=[]

    for (const item of selectedItems){
        const name =item.name
        const image = item.img 

        names.push(name)
        images.push(image)
    }
    let newNames = names.map(name=><li key={name} > {name}</li>)
    const newimgs = images.map(image=>  <img style={{width:'50px'}} src={image} alt="" />)

    const [choose, setChoose] = useState('')

    const chooseOne = ()=>{

        let i = Math.floor(Math.random() * names.length)
        const oneName =names[i]
        setChoose(oneName)
    }


    return (
        <div style={{margin:'30px', border:'2px solid blue', padding:'10px'}}>
             <div>
           <h6 className='text-center bg-primary text-white p-2'> Selected Courses :</h6>
            {newNames}
        

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

