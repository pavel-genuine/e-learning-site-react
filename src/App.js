import logo from './logo.svg';
import './App.css';
import Courses from './components/courses/Courses';
import Bonus from './components/bonus-section/Bonus';

function App() {
  return (
    <div  >
    <h1 className='text-primary text-center m-4' >  World of e-Learning</h1>
      <Courses></Courses>
      <Bonus></Bonus>
      
    </div>
  );
}

export default App;
