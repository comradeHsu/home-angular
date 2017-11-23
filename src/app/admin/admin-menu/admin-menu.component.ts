import {Component, ElementRef, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {
  icon = ['arrow_drop_down', 'arrow_drop_down', 'arrow_drop_down'];
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
        eles.item(i).setAttribute('style', 'background-color:rgba(0, 20, 255, 0.5)');
      });
      eles.item(i).addEventListener('mouseout', data => {
        eles.item(i).setAttribute('style', 'background-color:#eef1f6');
      });
    }
  }
  users = [ 'position', 'name', 'weight', 'symbol'];

  toggle(index: number) {
    if (this.icon[index] === 'arrow_drop_down') {
      this.icon[index] = 'arrow_drop_up';
    } else {
      this.icon[index] = 'arrow_drop_down';
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
      ele.setAttribute('style', 'background-color:rgba(0, 20, 255, 0.5)');
    }
    if (event.type === 'mouseout') {
      ele.setAttribute('style', 'background-color:#eef1f6');
    }
  }

}
