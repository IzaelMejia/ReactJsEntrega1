//Cración del Nav 
import React from 'react'

const  nav=()=>{
  return <div className='Navbar'>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        <a class="nav-link" href="#">Productos</a>
        <a class="nav-link" href="#">Nosotros</a>
        <a class="nav-link" href="#">Carrito</a>
      </div>
    </div>
  </div>
</nav>

  </div>
};

export default nav