import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-house-add',
  templateUrl: './admin-house-add.component.html',
  styleUrls: ['./admin-house-add.component.css']
})
export class AdminHouseAddComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('')]);

  constructor() { }

  ngOnInit() {
  }

}
