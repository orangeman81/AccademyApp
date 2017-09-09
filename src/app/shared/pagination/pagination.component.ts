import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  private limit: number = 12
  public canLoad: boolean = true;
  @Input() lenght: number;
  @Output() limitCount: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  add() {
    this.limit += 12;
    this.limitCount.emit(this.limit);
    if (this.lenght < this.limit) {
      this.canLoad = false;
    }
  }

}
