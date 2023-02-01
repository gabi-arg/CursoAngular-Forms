import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveformsComponent } from "./component/reactiveforms/reactiveforms.component";


@NgModule({
    declarations: [
        AppComponent,
        ReactiveformsComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
    ]
})
export class AppModule { }
