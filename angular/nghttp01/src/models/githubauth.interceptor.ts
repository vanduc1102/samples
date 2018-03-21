
import { Injectable, Inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubAuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any> , next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Nothing to do, next -->' , req.url);
    return next.handle(req);
  }

}
