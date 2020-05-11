import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomeOtherComponent } from './some-other-component/some-other-component.component';
import { ExampleComponent } from './example/example.component';


@NgModule({
  declarations: [
    AppComponent,
    SomeOtherComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
