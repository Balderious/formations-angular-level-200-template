import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import {SearchService} from "../../../shared/services/search.service";

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: GameDto[] = [];
  searchItem = '';

  constructor(private gameService: GameService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.store.subscribe(items => this.searchItem = items);
    this.gameService.getAll(3).subscribe(items => this.games = items);
  }

}
