import { Router } from '@angular/router';
import { ColegioService } from './../../service/colegio.service';
import { Asignatura } from './../../Modelo/Asignatura';
import { Profesor } from './../../Modelo/Profesor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  profesores:Profesor[];
  asignaturas:Asignatura[];
  seleccionado:number;
  constructor(private _colegioService:ColegioService,private router:Router) { }

  ngOnInit(): void {
    this.listarProfesores();
  }
  listarProfesores(){
    this._colegioService.getProfesores()
    .subscribe(data=>{
      console.log(data);
      this.profesores=data;
    })
  }
  obtenerAsignaturas(){
    this._colegioService.getAsignaturasDocente(this.seleccionado)
    .subscribe(data=>{
      this.asignaturas=data;
      //this.asignaturas
      console.log(data);
    })
  }
}
