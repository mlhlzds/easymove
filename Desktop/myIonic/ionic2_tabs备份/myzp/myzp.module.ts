import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {DemoPage} from "./demo";
import {SharedModule} from "../../shared/shared.module";
import {Conversion} from "../../pipes/conversion";
import {Page1} from "./page1-myzp/page1-myzp";

@NgModule({
  imports: [IonicModule, SharedModule],
  declarations: [DemoPage,Page1,Conversion],
  entryComponents: [DemoPage,Page1],
  providers: [],
  exports: [IonicModule]
})
export class DemoModule {
}
