import {Component, ElementRef, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {
  icon = ['keyboard_arrow_up', 'keyboard_arrow_up', 'keyboard_arrow_up'];
  hide = [false, false, false];
  color = '#eef1f6';
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'down',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/down.svg'));
    // const eles = ele.getElementsByClassName('able');
    // for (let i = 0; i < eles.length; i++) {
    //   eles.item(i).addEventListener('mouseover', data => {
    //     const target = (<Element>event.target) || event.srcElement;
    //     target.setAttribute('style', 'background-color:#6b9dae');
    //   });
    // }
  }

  ngOnInit() {
    // angular中document代表本页面元素
    const eles = document.getElementsByClassName('able');
    for (let i = 0; i < eles.length; i++) {
      eles.item(i).addEventListener('mouseover', data => {
        eles.item(i).setAttribute('style', 'background-color:#6b9dae');
      });
      eles.item(i).addEventListener('mouseout', data => {
        eles.item(i).setAttribute('style', 'background-color:#eef1f6');
      });
    }
  }

  toggle(index: number) {
    if (this.icon[index] === 'keyboard_arrow_up') {
      this.icon[index] = 'keyboard_arrow_down';
    } else {
      this.icon[index] = 'keyboard_arrow_up';
    }
    this.hide[index] = !this.hide[index];
  }

  // mouseMove(item: Element) {
  //   item.setAttribute('style', 'background-color:#6b9dae');
  // }
  //
  // mouseOut(item: Element) {
  //   item.setAttribute('style', 'background-color:#eef1f6');
  // }

  mouse(event: MouseEvent, ele: Element) {
    const target = (<Element>event.target) || event.srcElement;
    if (event.type === 'mouseover') {
      ele.setAttribute('style', 'background-color:#6b9dae');
    }
    if (event.type === 'mouseout') {
      ele.setAttribute('style', 'background-color:#eef1f6');
    }
  }



}
