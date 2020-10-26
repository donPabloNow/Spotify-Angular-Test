import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { AlbumComponent } from './pages/album/album.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core.module';
import { MatListModule } from '@angular/material/list';
import { AppNgxsModule } from './app.ngxs.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWTInterceptor } from './app.interceptor';

@NgModule({
  declarations: [AppComponent, HomeComponent, ArtistComponent, AlbumComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppNgxsModule,
    MatListModule,
    CoreModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
