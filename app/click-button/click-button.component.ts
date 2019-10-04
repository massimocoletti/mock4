import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-click-button',
  templateUrl: './click-button.component.html',
  styleUrls: ['./click-button.component.css']
})
export class ClickButtonComponent implements OnInit {
  @Input() label: string;
  @Input() reference: Object;
  @Input() section: string;
  @Input() prodOrder: Object;
  @Input() action: string;
  @Input() color: string;

  constructor(private router:Router) { }

  ngOnInit() {
    console.log("sono qui "+this.label);
  }

  onClickMe() {
    console.log("premuto bottone "+this.action);
    this.router.navigate(['../acq']);
  }

}