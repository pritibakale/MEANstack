import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  title="";
  content="";
  private mode = 'create';
  private postId: string | null = null;

  constructor(public postService: PostService, public route: ActivatedRoute) { }

  addPost(form:NgForm){
    this.postService.addPostService(form.value.title, form.value.content);

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      if(paramMap.has('postId')){
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
      }
      else {
        this.mode ='create';
      }
    })
  }
}
