import React from 'react';

const Bonus = () => {
    return (
<div style={{marginTop:'50px'}} className='mx-auto container '>
            <h6 className='m-4'>Props vs State:</h6>
<li>	Props are read-only but States are asynchronous.</li>
<li>	Props are immutabl on the other hand State is mutable. </li>
<li>      Props allow you to pass data from one component to other components as an argument.	State holds information about the components.</li>
<li> 	Props can be accessed by the child component but State cannot be accessed by child components.</li>
<li> 	Props are used to communicate between components but States can be used for rendering dynamic changes with the component.</li>
<li> 	Stateless component can have Props.In Stateless components, there is no State. </li>
<li> 	Props make components reusable but State cannot make components reusable.</li>
<li> 	Props are external and controlled by whatever renders the component but The State is internal and controlled by the React Component itself.</li>
       
 <h6 className='m-4'>How useState works:</h6>   
 useState is a reactjs Hook that allows you to have state variables in functional components. 
 You pass the initial state to this function and it returns a variable with
  the current state value (not necessarily the initial state) 
  and another function to update this value.The squre bracket means array destructuring whose 2nd element is a function which determine the value of 1st element
</div>
    );
};

export default Bonus;