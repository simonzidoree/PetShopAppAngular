import {Injectable} from '@angular/core';
import {Owner} from '../models/owners';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  apiUrl = 'https://testwebapi-zido.azurewebsites.net/api/owners';

  constructor(private http: HttpClient) {
  }

  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.apiUrl);
  }

  addOwners(owner: Owner): Observable<Owner> {
    return this.http.post<Owner>(this.apiUrl, owner);
  }

  updateOwner(owner: Owner): Observable<Owner> {
    return this.http.put<Owner>(this.apiUrl + '/' + owner.id, owner);
  }

  deleteOwner(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  getOwnersById(id: number): Observable<Owner> {
    return this.http.get<Owner>(this.apiUrl + '/' + id);
  }
}
