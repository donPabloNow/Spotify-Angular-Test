import { NgModule } from '@angular/core';
import { SearchComponent } from './components/search.component';
import { Gateway, Service } from './state/service';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [HttpClientModule, MatInputModule, FormsModule],
  declarations: [SearchComponent],
  exports: [SearchComponent],
  providers: [Gateway, Service],
})
export class AppModule {}
