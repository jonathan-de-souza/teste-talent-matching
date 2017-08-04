//imports do angular
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

//imports plugins
import { CoolLocalStorage } from 'angular2-cool-storage';
import { BlockUI, NgBlockUI } from 'ng-block-ui';



@Injectable()
export class HttpClient {

  @BlockUI() _blockUI: NgBlockUI;

  constructor(private http: Http, private _localStorage: CoolLocalStorage) { }

  createAuthorizationHeader(headers?: Headers): Headers {
    if (headers == null) {
      headers = new Headers();
    }

    // var token = this._localStorage.getItem('token');

    headers.append('Content-Type', 'application/json');
    // headers.append("Access-Control-Allow-Origin", "*");
    // headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // headers.append("authorization", token);

    return headers;
  }

  getRequestOptionsArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    options.headers = this.createAuthorizationHeader(options.headers);
    return options;
  }

  get(url, options?: RequestOptionsArgs) {
    this._blockUI.start();
    return this.unblock(this.http.get(url, this.getRequestOptionsArgs(options)));
  }

  post(url, data, options?: RequestOptionsArgs) {
    this._blockUI.start();
    return this.unblock(this.http.post(url, data, this.getRequestOptionsArgs(options)));
  }

  put(url, data, options?: RequestOptionsArgs) {
    this._blockUI.start();
    return this.unblock(this.http.put(url, data, this.getRequestOptionsArgs(options)));
  }

  delete(url, options?: RequestOptionsArgs) {
    this._blockUI.start();
    return this.unblock(this.http.delete(url, this.getRequestOptionsArgs(options)));
  }

  unblock(observable: Observable<any>): Observable<any> {
    return observable.finally(() => {
      this._blockUI.stop();
    });
  }
}