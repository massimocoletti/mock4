import { Component, OnInit } from '@angular/core';
import { Poinfo } from '../poinfo';

@Component({
  selector: 'app-pane',
  templateUrl: './pane.component.html',
  styleUrls: ['./pane.component.css']
})
export class PaneComponent implements OnInit {
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
 
  orders : Poinfo[] = [
    {
      nrpo: '88 A 1223',
      prd_Descr: 'TONDO PROVA AA'
    },
    {
      nrpo: '88 A 1R553',
      prd_Descr: 'TONDO PROVA BB'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}