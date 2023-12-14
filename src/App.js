
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import data from './components/data';
import Movielists from './components/Movielist';
import Navbar1 from './components/Navbar';
import { useEffect, useState } from 'react';

function App() {
  console.log(data)
  const [movies,setmovies]=useState(data)
  useEffect(()=>{
    const obj=JSON.parse(localStorage.getItem("movie"))
    if (obj!==null){
      setmovies([...movies,obj])
    }
  },[])
  

  const navtitle="Movie app"
  return (
    <div className="App">
     <Navbar1/>
     <Movielists movies={movies}/>
    </div>
  );
}

export default App;