import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
	private username:string;
	private client_id='9355ecec336c02455b8b';
	private client_secret='cacdbcff8e0eb96bc8da995170cbcbfc0ae2ec36';

	constructor (private _http: Http){

		console.log('Github Server is ready ...');
		this.username = 'ashtiani';
	}

	getUser(){

		return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
				.map(res => res.json());
	}

	getRepos(){

		return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
				.map(res => res.json());
		}
		updateUser(username:string){

			this.username= username;

		}


}
