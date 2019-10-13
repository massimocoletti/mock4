import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InViewportModule } from 'ng-in-viewport';
import { InViewportMetadata } from 'ng-in-viewport';

/*
InViewport documentation
https://k3nsei.gitbook.io/ng-in-viewport/
*/

@NgModule({
  imports: [
    CommonModule
  ],
   exports: [
       InViewportModule
   ],
  declarations: []
})
export class OrderheaderModule { }