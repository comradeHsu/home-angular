import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {File} from '../../model/file';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  @Input() file: File;
  @Output() fileHander = new EventEmitter<File>();
  constructor() { }

  ngOnInit() {
  }

  upload(value: string) {
    console.log(value);
  }

}
