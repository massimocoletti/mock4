import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrderheaderComponent }  
       from './orderheader/orderheader.component';
import { LavorazioniComponent }
       from './lavorazioni/lavorazioni.component';
import { LavorazioniActComponent }  
       from './lavorazioni-act/lavorazioni-act.component';
import { ClickButtonComponent } from './click-button/click-button.component';
import { MaterialiActComponent } from './materiali-act/materiali-act.component';
import { AcquisizioneComponent } from './acquisizione/acquisizione.component'
import { PaneComponent } from './pane/pane.component';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './material.module';
import { Poinfo } from './poinfo';

import { SharedModule } from './shared/shared.module';

import {
  //MdToolbarModule,
  //MdTabsModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
 //MdInputModule,
  //MdDatepickerModule,
  //MdNativeDateModule,
  //MdCheckboxModule,
  //MdRadioModule
} from '@angular/material';

const appRoutes: Routes = [
  {
    path: 'base',
    component: PaneComponent,
    data: { title: 'Heroes List' }
  },
  { path: 'acq', component: AcquisizioneComponent },
  { path: '',
    redirectTo: '/base',
    pathMatch: 'full'
  },
  //{ path: '**', component: AppComponent }
];

@NgModule({
  imports:      [ SharedModule,
        BrowserModule, FormsModule, FlexLayoutModule, CustomMaterialModule,
        ReactiveFormsModule,
        MatInputModule,
                  MatButtonModule,
                  RouterModule.forRoot(
                    appRoutes,
                    { enableTracing: true } // <-- debugging purposes only
                  )
   ],
  declarations: [ AppComponent , OrderheaderComponent
                  , LavorazioniComponent, LavorazioniActComponent,
                  MaterialiActComponent , ClickButtonComponent,
                  AcquisizioneComponent, PaneComponent
                  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
