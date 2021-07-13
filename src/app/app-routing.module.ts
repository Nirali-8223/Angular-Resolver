import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { CreateAlbumComponent } from './components/create-album/create-album.component';
import { AlbumResolverService } from './services/album-list-resolver-service';
import { AlbumService } from './services/albums-list-service';

const routes: Routes = [
  {
    path:'',
    redirectTo:'list',
    pathMatch:'prefix'
    
  },
  {
    path:'list',
    component:AlbumListComponent,
    resolve:{albumList:AlbumResolverService}
  },
  {
    path:'create-album',
    component:CreateAlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
