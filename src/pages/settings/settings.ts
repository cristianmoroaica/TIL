import { Component } from '@angular/core';
import { NavController, DateTime } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  sortby: any;
  limit: any;
  constructor(public navCtrl: NavController, private redditService:RedditService) {
    
  }

}
