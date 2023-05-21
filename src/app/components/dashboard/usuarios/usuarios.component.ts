import {Component, OnInit, ViewChild} from '@angular/core';
import {Usuario} from "../../../interfaces/usuario";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  listUsuarios: Usuario[] = [
    {usuario: 'admin', nombre: 'admin', apellido: 'admin', sexo: '-'},
    {usuario: 'lsalamanca', nombre: 'libardo', apellido: 'salamanca', sexo: 'M'},
    {usuario: 'psantos', nombre: 'pedro', apellido: 'santos', sexo: 'M',},
    {usuario: 'csalazar', nombre: 'claudia', apellido: 'salazar', sexo: 'F'},

  ];

  displayedColumns: string[] = ['Usuario', 'Nombre', 'Apellido', 'Sexo', 'Acciones'];

  dataSource = new MatTableDataSource(this.listUsuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
  }

  ngOnInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
