import { Asignatura } from './Modelo/Asignatura';
import { ColegioService } from './service/colegio.service';
import { Profesor } from './Modelo/Profesor';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colegio';
  profesores:Profesor[];
  asignaturas:Asignatura[];
  seleccionado:number;
  profesorSeleccionado:Profesor;
  constructor(private _colegioService:ColegioService,private router:Router){

  }

  ngOnInit(): void {
    console.log("entra");
    this._colegioService.getProfesores()
    .subscribe(data=>{
      console.log(data);
      this.profesores=data;
    })
  }
  listar(){
    this.router.navigate(['listar']);
  }
  obtenerProfesor(){
    this._colegioService.getAsignaturasDocente(this.seleccionado)
    .subscribe(data=>{
      this.asignaturas=data;
      console.log(data);
    })
  }
}
