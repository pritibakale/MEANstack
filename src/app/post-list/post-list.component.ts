import { Component, OnInit } from '@angular/core';
import {Post} from '../app.post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  Posts =[
  {title: "First Title", content:"First post content"},
  {title: "Second Title", content:"Second post content"},
  {title: "Third Title", content:"Third post content"}];

  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
