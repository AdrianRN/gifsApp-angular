import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit  {

  constructor(private gifsService: GifsService) { }

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  handleHistoryClick(tag: string): void {
    this.gifsService.searchTag(tag);
  }

  checkIfData() {
    if(this.tags.length > 0) {
      this.gifsService.searchTag(this.tags[0]);
    }
  }

  cleanHistory() {
    this.gifsService.cleanHistory();
    this.gifsService.gifList = [];
  }

  ngOnInit() {
    this.checkIfData();
  }

}
