import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  pageActual:number = 1
  actors: Actor[] = [];

  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.actorService.getAllActors().subscribe(data => {
      this.actors = data
      console.log(data);
    });
  }

}
