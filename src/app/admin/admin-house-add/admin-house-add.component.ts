import {Component, ElementRef, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {File} from '../../model/file';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Constant} from '../../common/constant';
import {DealHouse} from '../../model/dealHouse';

@Component({
  selector: 'app-admin-house-add',
  templateUrl: './admin-house-add.component.html',
  styleUrls: [
    './admin-house-add.component.css',
    './admin-house-add-noDialog.component.css'
  ]
})
export class AdminHouseAddComponent implements OnInit {
  // appModule中导入的模块并不能在子模块中直接使用，还需要导入
  // formControl指令需要FormsModule, ReactiveFormsModule 的支持
  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(Constant.PHONE_REGX)]);

  secondFromControl = new FormControl('', [
    Validators.required,
    Validators.pattern(Constant.PHONE_REGX)]);

  status = [
    {viewValue: '已打电话', value: '0'},
    {viewValue: '交易中', value: '1'},
    {viewValue: '已付款', value: '2'},
    {viewValue: '已完成', value: '3'}
  ];

  house: DealHouse = new DealHouse();
  noDialog = true;
  files: File[] = [
    new File()
  ];
  private domain: string;
  private token: string;
  constructor(private render: Renderer2,
              @Inject('share')private share,
              public dialog: MatDialog) {
    this.share.getDomin().subscribe(res => this.domain = res);
    this.share.getQiniuToken().subscribe(res => this.token = res);
  }

  ngOnInit() {
  }

  uploadSuccess(file: File) {
    let oldFile = this.files.pop();
    this.files.push(file);
    this.files.push(new File());
    console.log(file);
  }

  deleteFile(file: File) {
    let index = this.files.indexOf(file);
    this.files.splice(index, 1);
  }

  cancel() {
    this.house = new DealHouse();
  }

  // mouseOver(item: ElementRef) {
  //   item.nativeElement.addAttribute('style', 'border: 1px dashed #8824DA');
  // }
  openDialog(): void {
    let dialogRef = this.dialog.open(UploadDialogComponent, {
      width: '250px',
      data: { src: this.files[this.files.length - 2 ].value }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'app-upload-dialog',
  template: '<div class="dialog"><img [src]="src" alt="图片已失效" class="image"></div>',
  styles: [`.dialog{
  width: 200px;
  height: 200px;
  position: relative;
}
.image{
  position:absolute;
  width: 100%;
  height: 100%;
}`]
})
export class UploadDialogComponent {
  src: string;
  constructor(
    public dialogRef: MatDialogRef<UploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.src = data.src;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

