import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  public games$!: Observable<GameDto[]>;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.games$ = this.gameService.getAll(150000);
  }

}
