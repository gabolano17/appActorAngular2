import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from '../model/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  url = `http://localhost:3000/actor/listar`;

  constructor(private http: HttpClient) { }

  getAllActors(): Observable<Actor[]>{
    return this.http.get<Actor[]>(this.url)
  }
  getActorId(id:number): Observable<Actor[]>{
    return this.http.get<Actor[]>(`${this.url}/${id}`)
  }
}
