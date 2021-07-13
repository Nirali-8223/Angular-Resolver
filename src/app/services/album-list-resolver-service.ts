import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable ,of} from "rxjs";
import { catchError } from 'rxjs/operators';
import { AlbumList } from "../Model/album.model";
import { AlbumService } from "./albums-list-service";

@Injectable({
    providedIn:'root'
})

export class AlbumResolverService implements Resolve <AlbumList[]>{
    constructor(private albums: AlbumService) { }
        /// resolve
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AlbumList[]> {
        return this.albums.getAlbumList().pipe(
            catchError(err =>{
                return of('No data',err);       
            }))
    }
}

  