import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { AlbumComponent } from './pages/album/album.component';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  },
  {
    path: 'search',
    component: HomeComponent,
  },
  {
    path: 'artist/:artistSlug',
    component: ArtistComponent,
  },
  {
    path: 'artist/:artistSlug/album/:albumSlug',
    component: AlbumComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
