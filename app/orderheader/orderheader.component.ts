import { Component, OnInit, Input } from '@angular/core';
import { InViewportModule } from 'ng-in-viewport';
import { InViewportMetadata } from 'ng-in-viewport';

import { Poinfo } from '../poinfo';

@Component({
  selector: 'app-orderheader',
  templateUrl: './orderheader.component.html',
  styleUrls: ['./orderheader.component.css']
})
export class OrderheaderComponent implements OnInit {
  @Input() orders: Poinfo[];
  currentOrder: Poinfo;

  constructor() {
    rog: InViewportMetadata ;
   }

  ngOnInit() {
     console.log('Ordini in pancia header '+this.orders.length);
    // all'inizio mostra il primo ordine
    try {
      this.currentOrder = this.orders[0];
    } catch (e) {
      this.currentOrder = {
          nrpo: 'n.a.',
          prd_Descr: 'nessun prodotto'
      };
    }

  }

    public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
      console.log(target.innerHTML+ visible ? ' visibile': 'nascosto');
    //this.renderer.addClass(target, visible ? 'active' : 'inactive');
    //this.renderer.removeClass(target, visible ? 'inactive' : 'active');
  }

}