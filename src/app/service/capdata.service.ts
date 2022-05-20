import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CapdataService {

  private contenido = new BehaviorSubject(0);
  public valorCompartido = this.contenido.asObservable();

  constructor() { }

  getData(id: number){
    this.contenido.next(id);
  }
}
