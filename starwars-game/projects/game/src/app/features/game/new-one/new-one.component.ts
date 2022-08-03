import { Component, OnInit } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import {SearchService} from "../../../shared/services/search.service";

@Component({
  selector: 'game-new-one',
  templateUrl: './new-one.component.html',
  styleUrls: ['./new-one.component.css']
})
export class NewOneComponent implements OnInit {
  tiles: Tile[] = [];

  constructor(private tileService: TileService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.tileService.loadAll()
    .subscribe(tiles => this.tiles = tiles);

    // this.searchService.store.subscribe(item => );
  }

}
