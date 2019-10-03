import { Component } from '@angular/core';


//import { lavlist } from './lavorazioni.data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  { 

lavlist = [
{
  codice:'000000010',
  nome:'Fresatura'
},
{
  codice:'000000020',
  nome:'Verniciatura'
}
];

}


