import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  title="";
  content="";

  constructor(public postService: PostService) { }

  addPost(form:NgForm){
    this.postService.addPostService(form.value.title, form.value.content);

  }
  ngOnInit(): void {
  }

}
