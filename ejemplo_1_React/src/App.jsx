import { useState } from 'react'
import img from "./assets/imgs/igor.jpg"
import About from './assets/componentes/about'



import './App.css'


function UserName(props){

  console.log(props)

  return(

     <>

     <div style={{backgroundColor:props.color}}>

     <h2> Nombre:{props.nombre} </h2>
     <p> Descripción:{props.Descripción} </p>
     <p> Ubicación:{props.ubicación} </p>


     </div>

    

     </>
  )


}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className="maincontainer">
      <h1>Video Juegos</h1>
      <img src={img} alt="" />

      <nav>
        <p className="navItem">Inicio</p>
        <p className="navItem">Consolas</p>
        <p className="navItem">Juegos</p>
        <p className="navItem">Contactanos</p>




      </nav>



    </header>

    <UserName nombre = " Victor" Descripción="Desarrollador backend" ubicación= " Cali, Colombia" color = "red" /> 
    <UserName nombre = " Manuel" Descripción="Desarrollador web fullstack" ubicación= " Bogota, Colombia" color = "black" /> 
    <UserName nombre = " David" Descripción="Administrador" ubicación= " Bucaramanga, Colombia" color = "blue"/> 

    <About/>
      


    </>
  )
}

export default App
