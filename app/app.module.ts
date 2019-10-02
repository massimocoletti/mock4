import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { OrderheaderComponent }  
       from './orderheader/orderheader.component';
import { LavorazioniComponent }
       from './lavorazioni/lavorazioni.component';
import { LavorazioniActComponent }  
       from './lavorazioni-act/lavorazioni-act.component';


import { AppComponent } from './app.component';
import { CustomMaterialModule } from './material.module';
@NgModule({
  imports:      [ BrowserModule, FormsModule, FlexLayoutModule, CustomMaterialModule ],
  declarations: [ AppComponent , OrderheaderComponent
                  , LavorazioniComponent, LavorazioniActComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
