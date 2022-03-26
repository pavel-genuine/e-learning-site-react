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
  and another function to update this value.The square bracket means array destructuring whose second element is a function which determine the value of first element.

  <h6 className='m-4'>How react works:</h6>   

  React is a very popular JavaScript library which is component based , declarative. At its very core,React virtual DOM (a representation of UI synced with real DOM)  maintains a tree with efficient diff algorithms and fiber architecture on the nodes to make changes easy .
  JSX (JavaScript XML), a syntactic sugar for creating very specific JavaScript objects works almost like HTML through babel. 
</div>
    );
};

export default Bonus;