import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatSidenavModule, MatToolbarModule, MatTabsModule, MatListModule, MatGridListModule, MatCardModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatSnackBarModule } from '@angular/material';
import { InViewportModule } from 'ng-in-viewport';
import { InViewportMetadata } from 'ng-in-viewport';
import { OrderheaderComponent } from './orderheader.component';

/*
InViewport documentation
https://k3nsei.gitbook.io/ng-in-viewport/
*/

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrderheaderComponent
  ],
  exports: [
       InViewportModule
       , MatCardModule,
       , OrderheaderComponent
   ],
})
export class OrderheaderModule { }