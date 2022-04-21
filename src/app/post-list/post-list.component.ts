import { Component, OnDestroy, OnInit } from '@angular/core';
import {Post} from '../app.post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  Posts:Post[] =[];
  private postsSub: Subscription | undefined;

  panelOpenState = false;
  constructor(public postService:PostService) { }

  ngOnInit(): void {
    this.postService.getPosts();
    console.log("inside list", this.Posts);
    this.postsSub =this.postService.getPostUpdateListner().subscribe((Posts:Post [])=>{
      this.Posts = Posts;
    });
  }

  ngOnDestroy(): void {
    this.postsSub?.unsubscribe();
  }

}
