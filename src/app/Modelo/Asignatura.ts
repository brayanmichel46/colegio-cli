import { Profesor } from './Profesor';
import { Estudiante } from './Estudiante';
import { Curso } from './Curso';
export interface Asignatura{
  id?: number,
  nombre: string,
  profesor:Profesor
  estudiante?:{},
  curso:Curso,
}
