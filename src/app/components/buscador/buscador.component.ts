import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/service/actor.service';
import { CapdataService } from 'src/app/service/capdata.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  actors: any;
  keyword = 'first_name';

  constructor(private capData: CapdataService, private actorService: ActorService) { }

  ngOnInit(): void {
    this.actorService.getAllActors().subscribe(res => this.actors = res);
  }

  getIdValue(obj: any){
    const {actor_id} = obj;
    this.capData.getData(actor_id);
  }

  inputVacio(){
    this.capData.getData(0);
  }

}
