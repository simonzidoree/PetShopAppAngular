import {Injectable} from '@angular/core';
import {Owner} from '../models/owners';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {environment} from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  getOwners(): Observable<Owner[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Owner[]>(environment.apiUrl + '/api/owners', httpOptions);
  }

  addOwners(owner: Owner): Observable<Owner> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.post<Owner>(environment.apiUrl + '/api/owners', owner, httpOptions);
  }

  updateOwner(owner: Owner): Observable<Owner> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.put<Owner>(environment.apiUrl + '/api/owners/' + owner.id, owner, httpOptions);
  }

  deleteOwner(id: number): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.delete(environment.apiUrl + '/api/owners/' + id, httpOptions);
  }

  getOwnersById(id: number): Observable<Owner> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Owner>(environment.apiUrl + '/api/owners/' + id, httpOptions);
  }
}
