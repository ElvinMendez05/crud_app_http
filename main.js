import './style.css'
import { UsersApp } from './src/User-app';


document.querySelector('#app').innerHTML = `
  <div>
    <h1 class="crud-h1">CRUD-APP-HTTP</h1>
    <div class="card">
    </div>
  </div>
`

const element = document.querySelector('.card');
UsersApp(element);