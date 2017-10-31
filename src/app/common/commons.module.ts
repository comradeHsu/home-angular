import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';
import {MatRadioModule} from '@angular/material';
import {MatSidenavModule, MatListModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule
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
    MatIconModule,
    MatToolbarModule,
    MatTableModule
  ]
})
export class CommonsModule { }
