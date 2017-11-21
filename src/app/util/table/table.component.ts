import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RentHouse} from '../../model/rentHouse';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() houses: RentHouse[];
  @Output() edit = new EventEmitter<boolean>();
  constructor() { }

  select = false;
  singleSelect = '';
  ngOnInit() {
  }

  selected(house: RentHouse) {
    if(house.checked === 'checked') {
      house.checked = '';
    } else {
      house.checked = 'checked';
    }
  }

  selectedAll() {
    for(let house of this.houses) {
      if (this.select === false) {
        house.checked = 'checked';
      } else {
        house.checked = '';
      }
    }
    this.select = this.select === false ? true : false;
    this.singleSelect = this.select === true ? 'checked' : '';
  }

  openEdit() {
    this.edit.emit(true);
  }

}
