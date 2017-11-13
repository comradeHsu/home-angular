import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatProgressSpinnerModule,
  MatSelectModule, MatSortModule,
  MatTableModule, MatTooltipModule
} from '@angular/material';
import {MatRadioModule} from '@angular/material';
import {MatSidenavModule, MatListModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatToolbarModule, MatCardModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

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
    MatTableModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatCardModule,
    MatSortModule
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
    MatTableModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatCardModule,
    MatSortModule
  ]
})
export class CommonsModule { }
