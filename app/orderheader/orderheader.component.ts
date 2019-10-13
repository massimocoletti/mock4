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
  highlightTile(event) {
    //const { [InViewportMetadata]: { entry }, target, visible } = event;
    console.log('Ora è visibile '
    //+entry.toString()
    );
  }

}