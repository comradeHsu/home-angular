import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RentHouse} from '../../model/rentHouse';
import {House} from '../../model/house';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() houses: House[];
  @Output() edit = new EventEmitter<House>();
  @Output() deletedHouse = new EventEmitter<string>();
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

  openEdit<T extends House>(house: T) {
    this.edit.emit(house);
  }

  deleted(id: string) {
    this.deletedHouse.emit(id);
  }

}
