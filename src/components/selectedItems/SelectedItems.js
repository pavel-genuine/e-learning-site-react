import React from 'react';

const SelectedItems = (props) => {

    const {selectedItems}=props

    const names =[]
    const images=[]

    for (const item of selectedItems){
        const name =item.name
        const image = item.img 

        names.push(name)
        images.push(image)
    }
    const newNames = names.map(name=><li key={name} > {name}</li>)
    const newimgs = images.map(image=>  <img style={{width:'50px'}} src={image} alt="" />)

    return (
        <div>
            Selected Items :
        {newNames}
        </div>
    );
};

export default SelectedItems;

