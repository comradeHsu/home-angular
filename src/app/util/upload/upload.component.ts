import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {File} from '../../model/file';
import {ShareService} from '../../service/share.service';
import {Http, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  @Input() file: File;
  @Output() fileUpload = new EventEmitter<File>();
  @Input() domain: string;
  @Input() token: string;
  constructor(private http: Http) { }

  private opacity = 0;

  ngOnInit() {
  }

  upload(value: FileList) {
    console.log(value);
    let thisFile = value[0];
    this.file.value = thisFile.name;
    this.file.status = true;

    let formData: FormData = new FormData();
    formData.append('file', thisFile, thisFile.name);
    formData.append('token', this.token);
    let headers = new Headers({
      'Accept': 'application/json'
    });
    let options = new RequestOptions(headers);
    this.http.post('http://up-z1.qiniu.com', formData, options)
      .map(res => res.json())
      .subscribe(
        data => this.file.value = `${this.domain}/${data.key}`,
        error => console.log(error)
      );
    this.fileUpload.emit(this.file);
  }

  mouseOver() {
    this.opacity = 1;
  }

  mouseOut() {
    this.opacity = 0;
  }

}
