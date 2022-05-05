import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from '../app.post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  title="";
  content="";
  private mode = 'create';
  private postId!: string;
  post!: Post;  // post = Post | undefined;

  constructor(public postService: PostService, public route: ActivatedRoute) { }

  addPost(form:NgForm){
    if(this.mode ==="create"){
      this.postService.addPostService(form.value.title, form.value.content);
    } else {
      this.postService.updatePost(this.postId, form.value.title, form.value.content);
    }
    form.resetForm();
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      console.log("parammap is", paramMap);
      if(paramMap.has('postId')){
        this.mode = 'edit';
        this.postId = paramMap.get('postId')!;
        console.log("Post ID", this.postId);
        this.post = this.postService.getPost(this.postId)!;
      //Post | undefined = Post | undefined
      // number = string
        console.log("Got the post", this.post);
      }
      else {
        this.mode ='create';
        this.postId = null!;
        console.log("not in edit");
      }
    })
  }
}
