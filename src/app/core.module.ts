import {NgModule} from "@angular/core";
import {SearchComponent } from './components/search.component';
import {Spotify} from "./service/spotify";
import {MatInputModule} from "@angular/material/input";
import {Service} from "./service/service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    HttpClientModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [
    SearchComponent
  ],
  exports: [
    SearchComponent
  ],
  providers: [
    Spotify,
    Service
  ]
})
export class CoreModule {
}
