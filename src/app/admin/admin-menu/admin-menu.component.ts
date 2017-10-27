import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {
  icon = 'keyboard_arrow_up';
  hide = false;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'down',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/down.svg'));
  }

  ngOnInit() {
  }

  toggle() {
    if (this.icon === 'keyboard_arrow_up') {
      this.icon = 'keyboard_arrow_down';
    } else {
      this.icon = 'keyboard_arrow_up';
    }
    this.hide = !this.hide;
    console.log(this.hide);
  }

}
