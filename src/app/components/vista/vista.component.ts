import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor';
import { ActorService } from 'src/app/service/actor.service';
import { CapdataService } from 'src/app/service/capdata.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  pageActual:number = 1;
  actors: Actor[] = [];
  actorById: Actor = new Actor();
  id: number = 0;
  searched: boolean = false;

  constructor(private actorService: ActorService, private capData: CapdataService ) { }

  ngOnInit(): void {
    this.getAllActors();
    this.capData.valorCompartido.subscribe(x => this.id = x)
  }

  getAllActors(){
    this.actorService.getAllActors().subscribe(data => this.actors = data);
  }

  getActorId(){
    this.actorService.getActorId(this.id).subscribe(data => {
      this.actorById = data;
    })
  }

  refrescarPage(){
    window.location.reload();
  }

  submitear(){
    if(!this.id){
      this.searched = false;
    }else{
      this.searched = true;
      this.getActorId();
    }
  }

}
