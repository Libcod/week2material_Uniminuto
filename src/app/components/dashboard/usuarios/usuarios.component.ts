import { Component } from '@angular/core';
import {Usuario} from "../../../interfaces/usuario";



const listUsuarios: Usuario[] = [
  {usuario: 'admin', nombre: 'admin', apellido: 'admin', sexo: '-'},
  {usuario: 'lsalamanca', nombre: 'libardo', apellido: 'salamanca', sexo: 'M'},
  {usuario: 'psantos', nombre: 'pedro', apellido: 'santos', sexo: 'M',},
  {usuario: 'csalazar', nombre: 'claudia', apellido: 'salazar', sexo: 'F'},


];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  displayedColumns: string[] = ['Usuario', 'Nombre', 'Apellido', 'Sexo','Acciones'];
  dataSource = listUsuarios;
}
