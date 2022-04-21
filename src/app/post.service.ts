import { Injectable } from '@angular/core';
import {Post} from './app.post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] =[];
  private postsUpdated = new Subject<Post[]>();

  getPosts(){
    //return [...this.posts];
    this.http.get<{message:string, posts:Post[]}>('http://localhost:3000/api/posts').subscribe((postData)=>{
      console.log(postData.posts);
      this.posts = postData.posts;
      this.postsUpdated.next([...this.posts]);
    })
  }

  addPostService(title: string, content: string){
  const post: Post ={title: title, content: content};
  this.posts.push(post);
  console.log("*****************************",post);
  this.postsUpdated.next([...this.posts]);
  }
 getPostUpdateListner()
 {
   return this.postsUpdated.asObservable();
 }
  constructor(private http:HttpClient) { }
}
