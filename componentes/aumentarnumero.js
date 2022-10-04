Vue.component('contador',{
  template: `
    <div class="m-4 bg-success p-3">
        <h3>{{numero}}</h3>
        <button @click="numero++">+</button>
    </div>
  ` ,
  data() {
    return {
        numero: 0,
        totalFrutas : 0,

    }
  }
})

Vue.component('navbar',{
  template:
  `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
  `
})

Vue.component('tabla',{
  template : 
  `
   <div id="area" class="container mt-4">
   <table class="table">
   <thead class="thead-dark">
     <tr>
       <th scope="col">Hola</th>
       <th scope="col">First</th>
       <th scope="col">Last</th>
       <th scope="col">Handle</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <th scope="row">1</th>
       <td>Mark</td>
       <td>Otto</td>
       <td>@mdo</td>
     </tr>
   </tbody>
 </table>
   </div>

  `
})

new Vue ({
    el : '#area',
    data : {
      personas : [
        {nombre: 'Miguel', apellidos: 'Delgado Ruiz', edad: '19'},
        {nombre: 'Miguel', apellidos: 'Delgado Ruiz', edad: '19'},
        {nombre: 'Miguel', apellidos: 'Delgado Ruiz', edad: '19'},
        {nombre: 'Miguel', apellidos: 'Delgado Ruiz', edad: '19'},
        {nombre: 'Miguel', apellidos: 'Delgado Ruiz', edad: '19'},
      ]
    }
})


