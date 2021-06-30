import { Observable } from 'rxjs';
import { ServiceBase } from './../service-base';
import { Colegio } from './../Modelo/Colegio';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profesor } from '../Modelo/Profesor';
import config from '../configuracion/config';

@Injectable({
  providedIn: 'root'
})
export class ColegioService extends ServiceBase{

  /**
   * Constructor de ProfesorService
   * @param http variable para acceder a HttpClient
   */
   constructor(protected http: HttpClient) {
    super(http);
    this.ApiUrl = [config.ApiUrl].join('/');
  }
  Url='http://localhost:8090/colegio/listar'
  UrlPro="http://localhost:8090/profesor/listar"
  UrlProId="http://localhost:8090/profesor/obtenerid/"
  getColegio(){
    console.log('entra 3')
    return this.http.get<Colegio[]>(this.Url);
  }
  /**
   * Función que contiene la ruta para acceder a la información de los profesores
   * @returns retorna los profesores
   */
   getProfesores(): Observable<any>{
    const ruta = [this.ApiUrl, 'profesor'].join('/');
    return this.http.get(ruta);
  }
    /**
   * Función que contiene la ruta para acceder a las asignaturas de cada profesor
   * @param prof contiene el id del profesor selecionado
   * @returns retorna las asignaturas de los docentes
   */
     getAsignaturasDocente(prof): Observable<any>{
      const ruta = [this.ApiUrl, 'asignatura/profesor',prof].join('/');
      return this.http.get(ruta);
    }
  getProfesor(id){
    return this.http.get<Profesor>(this.UrlProId+id);
  }
}
