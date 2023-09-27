import { NgModule, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { CustomElementComponent } from './custom-element/custom-element.component';
import { createCustomElement } from '@angular/elements';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    CustomElementComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [CustomElementComponent],
  providers: [],
  bootstrap: [CustomElementComponent]
})
export class AppModule { 

  constructor(private injector: Injector) {
  }
  ngDoBootstrap() {
    const customElement = createCustomElement(CustomElementComponent, { injector: this.injector });
    customElements.define('app-custom-element', customElement);
  }
}
