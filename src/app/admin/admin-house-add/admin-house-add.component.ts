import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
const PHONE_REGX = /^1(3|4|5|7|8)\d{9}$/;

@Component({
  selector: 'app-admin-house-add',
  templateUrl: './admin-house-add.component.html',
  styleUrls: ['./admin-house-add.component.css']
})
export class AdminHouseAddComponent implements OnInit {
  // appModule中导入的模块并不能在子模块中直接使用，还需要导入
  // formControl指令需要FormsModule, ReactiveFormsModule 的支持
  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(PHONE_REGX)]);

  secondFromControl = new FormControl('', [
    Validators.required,
    Validators.pattern(PHONE_REGX)]);

  status = [
    {viewValue: '已打电话', value: '0'},
    {viewValue: '交易中', value: '1'},
    {viewValue: '已付款', value: '2'},
    {viewValue: '已完成', value: '3'}
  ];

  files = [
    {value: '', status: false}
  ];

  constructor() { }

  ngOnInit() {
  }

  upload(file: any) {
    console.log(file);
    this.files.push({value: '', status: false});
    console.log(this.files);
  }

}

