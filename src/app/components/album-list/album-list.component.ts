import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumList } from 'src/app/Model/album.model';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  albumsList :AlbumList[] = []
  constructor(private _actRoute:ActivatedRoute) { }

  ngOnInit(): void {

    // ex-01
    console.log(this.albumsList=this._actRoute.snapshot.data['albumList'])

    // ex-02
    this._actRoute.data.subscribe(res =>{
      this.albumsList = res.albumList;
    })
  } 

}
