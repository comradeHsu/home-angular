import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatRadioModule} from '@angular/material';
import {MatSidenavModule, MatListModule} from '@angular/material';
import {MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ]
})
export class CommonsModule { }
