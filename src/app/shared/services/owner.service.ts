import {Injectable} from '@angular/core';
import {Owner} from '../models/owners';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  owners: Owner[] = [];
  id = 1;

  constructor(private http: HttpClient) {
    this.owners = [
      {id: this.id++, name: 'John'},
      {id: this.id++, name: 'Bob'}];
  }

  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>('https://testwebapi-zido.azurewebsites.net/api/owners');
  }

  addOwners(owner: Owner) {
    owner.id = this.id++;
    this.owners.push(owner);
  }

  updateOwner(owner: Owner) {
    const ownerToUpdate = this.owners.find(o => owner.id === o.id);
    const index = this.owners.indexOf(ownerToUpdate);
    this.owners[index] = owner;
  }

  deleteOwner(id: number) {
    this.owners = this.owners.filter(o => o.id !== id);
  }

  getOwnersById(id: number) {
    return this.owners.find(o => o.id === id);
  }
}
