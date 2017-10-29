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
  }

  ngOnInit() {
  }

  toggle(index: number) {
    if (this.icon[index] === 'keyboard_arrow_up') {
      this.icon[index] = 'keyboard_arrow_down';
    } else {
      this.icon[index] = 'keyboard_arrow_up';
    }
    this.hide[index] = !this.hide[index];
  }

  mouseMove(item: Element) {
    item.setAttribute('style', 'background-color:#6b9dae');
  }

  mouseOut(item: Element) {
    item.setAttribute('style', 'background-color:#eef1f6');
  }

}
