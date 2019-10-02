import { Component, OnInit } from '@angular/core';

import { lavlist } from '../lavorazioni.data';

@Component({
  selector: 'app-lavorazioni',
  templateUrl: './lavorazioni.component.html',
  styleUrls: ['./lavorazioni.component.css']
})
export class LavorazioniComponent implements OnInit {
    lavorazioni =  [
{
  codice:'000000010',
  nome:'Fresatura'
},
{
  codice:'000000020',
  nome:'Verniciatura'
}
];

  constructor() { 
  }

  ngOnInit() {
  }

}