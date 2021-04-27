
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AppService } from './app/app.service';
// import { UserService } from './user/user.service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

    constructor(
        // private readonly userService: UserService,
        private readonly appService: AppService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // if (this.userService.jwt) return next.handle(req.clone({
        //     headers: req.headers.set('authorization', this.userService.jwt)
        // })).pipe(
        //     finalize(() => this.appService.isLoading = false)
        // );
        return next.handle(req).pipe(
            finalize(() => this.appService.isLoading = false)
        );
    }

}
