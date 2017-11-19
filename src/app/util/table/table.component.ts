import {Component, Input, OnInit} from '@angular/core';
import {RentHouse} from '../../model/rentHouse';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() houses: RentHouse[];
  constructor() { }

  ngOnInit() {
  }

}
