import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AlbumList } from "../Model/album.model";

@Injectable({
    providedIn:'root'
})

export class AlbumService {
    constructor(private httpClient: HttpClient) { }
        
     getAlbumList(){
        return this.httpClient.get<AlbumList[]>('https://jsonplaceholder.typicode.com/albums')
     }
    
}