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

  checks: any[] = [];
  indexs: number[] = [];
  ngOnInit() {
    for (let index in this.houses) {
      this.checks.push({checked:''});
      console.log(index);
      this.indexs.push(Number(index));
    }
  }

  selected(index: number) {
    console.log(index);
    // this.checks[index].checked = 'checked';
    // console.log(this.checks);
  }

}
