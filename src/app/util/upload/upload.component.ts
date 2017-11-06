import {Component, Input, OnInit} from '@angular/core';
import {File} from '../../model/file';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  @Input() file: File;
  constructor() { }

  ngOnInit() {
  }

}
