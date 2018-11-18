import {Component, OnInit} from '@angular/core';
import {OwnerService} from '../../shared/services/owner.service';
import {Owner} from '../../shared/models/owners';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.css']
})
export class OwnersListComponent implements OnInit {

  owners: Owner[];

  constructor(private ownerService: OwnerService) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.ownerService.getOwners()
      .subscribe(listOfOwners => {
        this.owners = listOfOwners;
      });
  }

  delete(id: number) {
    this.ownerService.deleteOwner(id)
      .subscribe(() => {
        this.refresh();
      });
    // this.owners = this.ownerService.getOwners();
  }
}
