import { Component } from '@angular/core';
import { NavController, DateTime } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts : any;
  sortby: any;
  limit: any;
  constructor(public navCtrl: NavController, private redditService:RedditService) {
    this.getDefaults();
  }

  ngOnInit(){
    this.getPosts(this.sortby, this.limit);
  }
  
  getDefaults(){
      if (localStorage.getItem('sortby') != null){
          this.sortby = localStorage.getItem('sortby');
      } else {
          this.sortby = 'top';
      }
      if (localStorage.getItem('limit') != null){
        this.limit = localStorage.getItem('limit');
    } else {
        this.limit = 25;
    }
  }
  getPosts(sortby, limit){
    this.redditService.getPosts(sortby, limit).subscribe(response => {
      this.posts = response.data.children;
    })
  }
  changeSort(){
    this.getPosts(this.sortby, this.limit);
    this.setDefaults();
  }

  setDefaults(){
    localStorage.setItem('sortby', this.sortby);
    localStorage.setItem('limit', this.limit);
}
}
