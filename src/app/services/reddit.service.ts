import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RedditService {
    http: any;
    baseUrl: string;

    constructor(http:Http){
        this.http = http;
        this.baseUrl = 'https://www.reddit.com/r';
    }
    
    getPosts(sortby, limit){
        return this.http.get(this.baseUrl+'/todayilearned/'+sortby+'.json?limit='+limit).map(res => res.json());
    }
}