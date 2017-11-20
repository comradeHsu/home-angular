import { Component, OnInit } from '@angular/core';
import {RentHouse} from '../../model/rentHouse';

@Component({
  selector: 'app-admin-rent-list',
  templateUrl: './admin-rent-list.component.html',
  styleUrls: ['./admin-rent-list.component.css']
})
export class AdminRentListComponent implements OnInit {
  houses: RentHouse[] =  [
    {title: '碧桂园一期', author: '', floor: 0, desc: '', fangxiang: '', huxing: '',
      image: null, isPublic: '1', price: 10, rentStyle: '', yewuyuanPhone: 0, checked: '',
      zhuangxiu: '',  mianji: 20, fangdongPhone: 18330032576, status: 1, address: '龙东大道123号'},
    {title: '碧桂园一期', author: '', floor: 0, desc: '', fangxiang: '', huxing: '',
      image: null, isPublic: '1', price: 10, rentStyle: '', yewuyuanPhone: 0, checked: '',
      zhuangxiu: '',  mianji: 20, fangdongPhone: 18330032576, status: 1, address: '龙东大道123号'},
    {title: '碧桂园一期', author: '', floor: 0, desc: '', fangxiang: '', huxing: '',
      image: null, isPublic: '1', price: 10, rentStyle: '', yewuyuanPhone: 0, checked: '',
      zhuangxiu: '',  mianji: 20, fangdongPhone: 18330032576, status: 1, address: '龙东大道123号'},
    {title: '碧桂园一期', author: '', floor: 0, desc: '', fangxiang: '', huxing: '',
      image: null, isPublic: '1', price: 10, rentStyle: '', yewuyuanPhone: 0, checked: '',
      zhuangxiu: '',  mianji: 20, fangdongPhone: 18330032576, status: 1, address: '龙东大道123号'},
    {title: '碧桂园一期', author: '', floor: 0, desc: '', fangxiang: '', huxing: '',
      image: null, isPublic: '1', price: 10, rentStyle: '', yewuyuanPhone: 0, checked: '',
      zhuangxiu: '',  mianji: 20, fangdongPhone: 18330032576, status: 1, address: '龙东大道123号'},
    ]
  constructor() { }

  ngOnInit() {
  }

}
