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
        <div>
             <div>
            Selected Items :
            {newNames}
        

        </div>

      <button onClick={chooseOne} >Choose One For Me</button>

       <button onClick={props.empty} >Choose Again</button>


         <h6>Choosed One : {choose}</h6>


       
        </div>
    );
};

export default SelectedItems;

