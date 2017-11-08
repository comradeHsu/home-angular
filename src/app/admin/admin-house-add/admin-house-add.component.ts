import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {File} from '../../model/file';
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

  files: File[] = [
    new File()
  ];

  constructor(private render: Renderer2) { }

  ngOnInit() {
    const eles = document.getElementsByClassName('upload-item');
    for(let ele of eles) {

    }
  }

  uploadSuccess(file: File) {
    let oldFile = this.files.pop();
    this.files.push(file);
    this.files.push(new File());
  }

  // mouseOver(item: ElementRef) {
  //   item.nativeElement.addAttribute('style', 'border: 1px dashed #8824DA');
  // }

}

