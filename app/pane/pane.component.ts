import { Component, OnInit } from '@angular/core';
import { Poinfo } from '../poinfo';

@Component({
  selector: 'app-pane',
  templateUrl: './pane.component.html',
  styleUrls: ['./pane.component.css']
})
export class PaneComponent implements OnInit {

podb = new Map();
orders : Poinfo[];

lavlist = [
{
  codice:'000000010',
  qta:'',
  nome:'Preparazioni materiali (taglio)'
},
{
  codice:'000000020',
  qta:'',
  nome:'Fresatura'
},
{
  codice:'000000030',
  qta:'',
  nome:'Verniciatura'
}];


matlist = [
{
  codice:'LAMSP20',
  qta:'KG 545',
  nome:'LAMIERA SP.20 FE360 '
},
{
  codice:'LAMSP2236',
   qta:'KG 368',
 nome:'LAMIERA SP.22 FE360'
},
{
  codice:'TUB200x200',
   qta:'MT 3.62',
 nome:'TUBOLARE 200x200 X4'
},
{
  codice:'PIA220X8',
   qta:'MT 4.62',
 nome:'PIATTO 200x8 FE360 '
},
];
 


  constructor() { }

  ngOnInit() {
    this.orders = [
    {
      nrpo: '88 A 1223',
      prd_Descr: 'TONDO PROVA AA'
    },
    {
      nrpo: '12 A 1223',
      prd_Descr: 'TONDO PROVA AA'
    },
    {
      nrpo: '1234 A 1223',
      prd_Descr: 'TONDO PROVA AA'
    },
    {
      nrpo: '55 A 1R553',
      prd_Descr: 'TONDO PROVA BB'
    }

  ];
    for (let o = 0 ; o<this.orders.length; o++) {
      this.podb.set(this.orders[o].nrpo, {
        order: this.orders[o],
        matlist: o>0 ? this.matlist :
        [
{
  codice:'UUU1',
  qta:'KG 545',
  nome:'materiale 1 '
},
{
  codice:'UUU2',
  qta:'KG 545',
  nome:'materiale 2 '
},
{
  codice:'PIA220X8',
   qta:'MT 4.62',
 nome:'PIATTO 200x8 FE360 '
},
]
        ,
        lavlist: this.lavlist
      });
    }
  }

  onOrderChanged(indx: number) {
    let newOrder : Poinfo = this.orders[indx];
    console.log('pane ha ricevuto ordine '+indx+' '+newOrder.nrpo);
    let newpo = this.podb
    this.lavlist = this.podb.get(newOrder.nrpo).lavlist;
    this.matlist = this.podb.get(newOrder.nrpo).matlist;
  }
}

